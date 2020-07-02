import React, { useEffect, useState } from "react";
import keyboardJS from "keyboardjs";
import Modal from "react-modal";
Modal.setAppElement("#Overlay");

import QBoard, { QBoardState } from "./qboard";
import { Tool } from "./tools";
import { Dash, Stroke, Fill } from "./styles";

import Pagination from "./Pagination";
import UndoRedo from "./UndoRedo";
import Toolbar from "./Toolbar";
import Stylebar from "./Stylebar";

export const enum Visibility {
  None,
  Condensed,
  Full,
}

const Overlay = (props: { qboard: QBoard }) => {
  const qboard = props.qboard;

  const [visibility, setVisibility] = useState(Visibility.Full);
  const [modalOpen, setModalOpen] = useState(true);
  const [showStyleBinds, setShowStyleBinds] = useState(false);

  const [state, setState] = useState<QBoardState>({
    currentPage: 0,
    totalPages: 0,
    currentTool: Tool.Move,
    dashStyle: Dash.Solid,
    strokeStyle: Stroke.Black,
    fillStyle: Fill.Transparent,
    canUndo: false,
    canRedo: false,
  });

  useEffect(() => {
    qboard.callback = setState;
    qboard.updateState();

    keyboardJS.bind("tab", (e) => {
      setVisibility((visibility) => (visibility + 2) % 3);
    });

    keyboardJS.bind("h", (e) => {
      setModalOpen((modalOpen) => !modalOpen);
    });
  }, []);

  return (
    <div className={`overlay visibility-${visibility}`}>
      <Pagination
        previousPage={qboard.pages.previousPage}
        nextOrNewPage={qboard.pages.nextOrNewPage}
        loadPage={qboard.pages.loadPage}
        currentPage={state.currentPage}
        totalPages={state.totalPages}
        visibility={visibility}
      />
      <UndoRedo
        undo={qboard.history.undo}
        redo={qboard.history.redo}
        canUndo={state.canUndo}
        canRedo={state.canRedo}
        visibility={visibility}
      />
      <Toolbar
        switchTool={qboard.switchTool}
        currentTool={state.currentTool}
        visibility={visibility}
      />
      <Stylebar
        save={qboard.pages.export}
        copy={qboard.clipboard.copy}
        paste={qboard.clipboard.paste}
        dashStyle={state.dashStyle}
        strokeStyle={state.strokeStyle}
        fillStyle={state.fillStyle}
        setStyle={qboard.style.set}
        visibility={visibility}
      />
      <Modal
        className="modal"
        overlayClassName="modal-overlay"
        isOpen={modalOpen}
      >
        <p>
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>qboard</span>{" "}
          <span style={{ color: "#666", marginLeft: "0.2em" }}>
            So you’re writing a whiteboard app with vim keybindings?
          </span>
        </p>
        <p>
          Press <b>h</b> to show or hide this screen. Show:{" "}
          <button onClick={(e) => setShowStyleBinds(false)}>
            tool bindings
          </button>{" "}
          <button onClick={(e) => setShowStyleBinds(true)}>
            style bindings
          </button>
        </p>
        <img
          src="bindings.png"
          style={showStyleBinds ? { display: "none" } : undefined}
        />
        <img
          src="stylebindings.png"
          style={showStyleBinds ? undefined : { display: "none" }}
        />
        {showStyleBinds ? (
          <p>
            Press two or more style keys to apply them. Use <b>space</b> as a
            placeholder.
          </p>
        ) : (
          <p style={{ color: "#666" }}>
            By <a href="https://cjquines.com/">CJ Quines</a>. View on{" "}
            <a href="https://github.com/cjquines/qboard">Github</a>.
          </p>
        )}
      </Modal>
    </div>
  );
};

export default Overlay;
