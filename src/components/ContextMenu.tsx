import { useEffect, useState } from "react";

import { Style } from "../lib/styles";
import { Action } from "../lib/action";
import { MovementAxis, MovementLockState } from "../lib/movement-lock";

import StyleMenu from "./StyleMenu";

const ContextMenu = (props: {
  currentStyle: Style;
  doAction: (action: Action) => void;
  getMovementLockState: () => MovementLockState;
  toggleMovementLock: (axis: MovementAxis) => void;
}) => {
  const [menu, setMenu] = useState<{
    coords: [number, number];
    movementLocks: MovementLockState;
  } | null>(null);

  useEffect(() => {
    document.addEventListener("contextmenu", (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("upper-canvas")) {
        e.preventDefault();
        e.stopPropagation();
        setMenu((oldMenu) =>
          oldMenu
            ? null
            : {
                coords: [e.clientX, e.clientY],
                movementLocks: props.getMovementLockState(),
              },
        );
      }
    });
    document.addEventListener("click", () => setMenu(null));
  }, []);

  return menu ? (
    <div
      className="context-menu"
      style={{
        top: `calc(${menu.coords[1]}px - 2.8em)`,
        left: `calc(${menu.coords[0]}px - 1.1em)`,
      }}
    >
      <StyleMenu
        currentStyle={props.currentStyle}
        doAction={(action: Action) => props.doAction(action)}
        inContext={true}
      />
      {menu.movementLocks.hasSelection && (
        <div
          aria-label="Movement locks"
          className="movement-locks"
          role="group"
        >
          {(["x", "y"] as const).map((axis) => (
            <button
              aria-label={`Toggle ${axis.toUpperCase()} movement lock`}
              aria-pressed={menu.movementLocks[axis]}
              className={menu.movementLocks[axis] ? "active" : undefined}
              key={axis}
              onClick={() => props.toggleMovementLock(axis)}
              title={`Lock ${axis.toUpperCase()} movement`}
            >
              <i aria-hidden="true" className="fas fa-lock" />{" "}
              {axis.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  ) : null;
};

export default ContextMenu;
