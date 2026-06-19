# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

qboard is a wholly client-side whiteboard app (React + TypeScript + Fabric.js), built for seamless lecturing: everything that isn't drawing can be done from the keyboard. Pages are fixed 16:9, exportable to PDF. There is no backend.

## Commands

- `npm start` — Vite dev server with HMR.
- `npm run build` — static build into `dist/`.
- `npm run lint` — full suite: `typecheck` (`tsc --noEmit`) + `eslint` + `stylelint`. Run this before considering work done.
- `npm run lint:fix` — autofix eslint + stylelint.
- `npm run typecheck` / `npm run eslint` / `npm run stylelint` — run individually.
- `npm run deploy` — builds, then runs `deploy.js` (rsync to the author's host; you generally won't run this).

There is **no test runner**; the only verification gate is `npm run lint` plus manually exercising the app via `npm start`. Note `engines` requires node >=24, npm >=11.

The project builds with **Vite** (`vite.config.js`).

## Architecture

Entry is `src/index.jsx`: it constructs a single `QBoard` instance (1600×900) on two canvas DOM elements, exposes it as `window.qboard`, and renders the React `Overlay` with that instance as a prop. **React is only the UI chrome** (toolbar, modals, context menu); all whiteboard logic lives in the plain-TypeScript `src/lib/` classes, driven imperatively. The bridge: `QBoard` holds a `QBoardState` and calls an `updateState` callback that React's `Overlay` registers to re-render.

### Two canvases
Two stacked `Page` instances (a `Page` extends the Fabric canvas, `src/lib/page.ts`):
- **baseCanvas** — persistent objects: free drawing, move, eraser, everything committed.
- **canvas** (top) — a temporary overlay that renders lines/ellipses/rectangles *while being drawn*; on completion the shape is removed from the top and added to the base. This exists so the base canvas doesn't rerender on every mousemove.

### Pages model (`src/lib/pages.ts`, `page.ts`)
Only the **current** page's objects are live in Fabric; all other pages are stored **serialized** in a JSON array. Switching pages clears the canvas and reloads from memory. Save = collect the serialized array + small metadata wrapper (`{ "qboard-version": N, "pages": [...] }`), so files are human-readable. When bumping the file format, opening + re-saving an old file should migrate it.

### `QBoard` (`src/lib/qboard.ts`) — the hub
Owns the canvases and all handlers, listens to mouse events, and switches the active tool. Everything else is delegated to handler classes, each in its own file:
- `tools.ts` — implements each non-free-drawing tool (`Tool` subclasses; `DrawingTool` is marked via a boolean type-guard property). Includes `Behaviors` geometry helpers (e.g. `rectify` snapping to 45°).
- `action.ts` — the `Action` enum + `ActionHandler`: the front-end-facing abstraction mapping every UI/keyboard action to behavior.
- `keyboard.ts` — KeyboardJS bindings; `defaultKeys: KeyMap` maps key strings (e.g. `"shift + q"`) to `Action`s.
- `history.ts` — undo/redo via a `HistoryHandler` with `history`/`redoStack` of `HistoryItem`s; objects carry numeric ids (`latestId`).
- `clipboard.ts` — cut/copy/paste, including system-clipboard image paste.
- `styles.ts` — pen `Style` = `{ dash, stroke, fill }` (the `Dash`/`Stroke`/`Fill` enums); `StyleHandler` mutates it.
- `files.ts` — open/save/export (PDF via pdfmake), JSON (de)serialization, drag-drop and `?json=` URL preload.
- `latex.ts` — LaTeX → image via MathJax 4 (`@mathjax/src`), for the LaTeX tool.

### Key flow
A keypress or toolbar click → an `Action` → `ActionHandler` → mutates canvas/pages/style and records history → `updateState` fires → React re-renders the overlay from the new `QBoardState`.

### Types (`src/types/`)
`fabric.ts` augments Fabric types (e.g. `ObjectId`, `FabricTeXImage`, collection type guards); `assert.ts` provides `AssertType`; `html.ts` DOM helpers. The codebase leans on these to work around Fabric's loose typing.

## Conventions

- Handlers are constructed with their dependencies injected (e.g. `HistoryHandler(canvas, pages, updateState)`); follow that pattern rather than reaching for globals — `window.qboard` is a public dev escape hatch, not for internal use.
- Styling is SCSS: `src/main.scss` imports partials from `src/styles/` (one `_*.scss` per component). stylelint enforces it.
- `tsconfig` has `strict: true` but `noImplicitAny: false`.
