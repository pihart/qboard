import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { build } from "esbuild";

const outputDirectory = await mkdtemp(join(tmpdir(), "qboard-keyboard-"));
const outputFile = join(outputDirectory, "keyboard-routing.mjs");

try {
  await build({
    bundle: true,
    entryPoints: [resolve("src/lib/keyboard-routing.ts")],
    format: "esm",
    logLevel: "silent",
    outfile: outputFile,
    platform: "node",
  });

  const { routeShortcut } = await import(pathToFileURL(outputFile).href);

  const event = (target, modifiers = {}) => {
    let prevented = 0;
    return {
      altKey: false,
      ctrlKey: false,
      metaKey: false,
      preventDefault: () => {
        prevented += 1;
      },
      shiftKey: false,
      target,
      ...modifiers,
      get prevented() {
        return prevented;
      },
    };
  };

  const assertIgnored = (key, keyEvent) => {
    let actions = 0;
    assert.equal(routeShortcut(key, keyEvent, () => actions++), false);
    assert.equal(actions, 0);
    assert.equal(keyEvent.prevented, 0);
  };

  assertIgnored("1", event({ tagName: "INPUT" }));
  assertIgnored("v", event({ tagName: "textarea" }));
  assertIgnored("a", event({ tagName: "select" }));
  assertIgnored("e", event({ isContentEditable: true }));
  assertIgnored("v", event({ tagName: "CANVAS" }, { ctrlKey: true }));
  assertIgnored("ctrl + v", event({ tagName: "CANVAS" }, { ctrlKey: true, shiftKey: true }));

  const matchingEvent = event({ tagName: "CANVAS" }, { ctrlKey: true });
  let actions = 0;
  assert.equal(routeShortcut("ctrl + v", matchingEvent, () => actions++), true);
  assert.equal(actions, 1);
  assert.equal(matchingEvent.prevented, 1);

  const overlay = await readFile(resolve("src/components/Overlay.tsx"), "utf8");
  assert.doesNotMatch(overlay, /keyboardJS\.bind\(\s*["']tab["']/);

  console.log("Keyboard routing verification passed.");
} finally {
  await rm(outputDirectory, { force: true, recursive: true });
}
