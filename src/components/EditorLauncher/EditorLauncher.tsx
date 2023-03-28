/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";
import { useEditorContext } from "../EditorProvider";
import LoadingSpinner from "../LoadingSpinner";

const EditorLauncher = ({
  onStartQuery,
  onStopQuery,
  ...props
}: EditorLauncherProps) => {
  const { editor, isQueryStarting, isQueryStopping } = useEditorContext();
  return (
    <div css={EditorLauncherStyle} {...props}>
      {isQueryStopping ? (
        <LoadingSpinner />
      ) : (
        <StopIcon
          onClick={() =>
            !isQueryStarting &&
            !isQueryStopping &&
            onStopQuery &&
            onStopQuery(editor)
          }
        />
      )}
      {isQueryStarting ? (
        <LoadingSpinner />
      ) : (
        <StartIcon
          onClick={() =>
            !isQueryStarting &&
            !isQueryStopping &&
            onStartQuery &&
            onStartQuery(editor)
          }
        />
      )}
    </div>
  );
};

const EditorLauncherStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 2rem;
`;
export interface EditorLauncherProps extends HTMLAttributes<HTMLDivElement> {
  onStartQuery?: EditorLauncherEventHanlder;
  onStopQuery?: EditorLauncherEventHanlder;
}

export type EditorLauncherEventHanlder = {
  method(editor?: monaco.editor.IStandaloneCodeEditor): void;
}["method"];

export default EditorLauncher;
