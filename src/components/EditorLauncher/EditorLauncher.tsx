import React from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";

const EditorLauncher = ({
  editor,
  onStartQuery,
  onStopQuery,
}: EditorLauncherProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "0.75rem 1.5rem",
        gap: "2.5rem",
      }}
    >
      <StopIcon onClick={onStopQuery} />
      <StartIcon onClick={onStartQuery} />
    </div>
  );
};

export interface EditorLauncherProps {
  editor?: monaco.editor.IStandaloneCodeEditor;
  onStartQuery?: () => void;
  onStopQuery?: () => void;
}
export default EditorLauncher;
