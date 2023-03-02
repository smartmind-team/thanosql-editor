import { HTMLAttributes } from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";

const EditorLauncher = ({
  editor,
  onStartQuery,
  onStopQuery,
  style,
  ...props
}: EditorLauncherProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "0.75rem 1.5rem",
        gap: "2.5rem",
        ...style,
      }}
      {...props}
    >
      <StopIcon onClick={onStopQuery} />
      <StartIcon onClick={onStartQuery} />
    </div>
  );
};

export interface EditorLauncherProps extends HTMLAttributes<HTMLDivElement> {
  editor?: monaco.editor.IStandaloneCodeEditor;
  onStartQuery?: () => void;
  onStopQuery?: () => void;
}

export default EditorLauncher;
