import assert from "node:assert/strict";
import test from "node:test";

import {
  getMovementLockState,
  MovementLockable,
  toggleMovementLock,
} from "../src/lib/movement-lock";

const lockable = (
  lockMovementX = false,
  lockMovementY = false,
): MovementLockable => {
  const object: MovementLockable = {
    lockMovementX,
    lockMovementY,
    set(options) {
      Object.assign(object, options);
    },
  };
  return object;
};

test("reports independent lock state for a selection", () => {
  const objects = [lockable(true, false), lockable(true, false)];

  assert.deepEqual(getMovementLockState(objects), {
    hasSelection: true,
    x: true,
    y: false,
  });
});

test("locks every object when a selection has mixed state", () => {
  const objects = [lockable(true), lockable(false)];

  assert.equal(toggleMovementLock(objects, "x"), true);
  assert.ok(objects.every((object) => object.lockMovementX));
  assert.ok(objects.every((object) => !object.lockMovementY));
});

test("unlocks every object when the whole selection is locked", () => {
  const objects = [lockable(true), lockable(true)];

  assert.equal(toggleMovementLock(objects, "x"), false);
  assert.ok(objects.every((object) => !object.lockMovementX));
});
