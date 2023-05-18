/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";
import { useEditorContext } from "../EditorProvider";
import LoadingSpinner from "../LoadingSpinner";
import { useEffectOnce } from "@/util/useEffectOnce";

const EditorLauncher = ({ onStartQuery, onStopQuery, ...props }: EditorLauncherProps) => {
  const { editor, isQueryStarting, isQueryStopping } = useEditorContext();
  const runAction: monaco.editor.IActionDescriptor = {
    id: "runSelectedOrEntireQuery",
    label: "Run (selected) query",
    contextMenuOrder: 2,
    contextMenuGroupId: "1_modification",
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
    run: editor => {
      const model = editor.getModel();
      // by default, only run selected value
      let selectedValue = model.getValueInRange(editor.getSelection());
      // however, if nothing is selected, we run all editor value
      if (selectedValue === "") {
        selectedValue = model.getValue();
      }
      selectedValue && onStartQuery(editor, selectedValue);
    },
  };

  /** It's for update onStartQuery's closure */
  const actionRegistration = useRef(null);
  const switchAction = () => {
    if (actionRegistration.current) {
      actionRegistration.current.dispose();
    }
    actionRegistration.current = editor.addAction({ ...runAction });
  };
  useEffect(() => {
    switchAction();
  }, [onStartQuery]);

  /** It's for being disable launcher menu when editor has no contents. */
  const [disabled, setDisabled] = useState(!editor.getValue());
  useEffectOnce(() => {
    editor.onDidChangeModelContent(() => {
      const value = editor.getValue();
      setDisabled(!value);
    });
  });

  return (
    <div css={EditorLauncherStyle} {...props}>
      {isQueryStopping ? (
        <LoadingSpinner />
      ) : (
        onStopQuery && (
          <span id="stop-button" onClick={() => !disabled && !isQueryStarting && onStopQuery(editor)}>
            <StopIcon style={{ opacity: disabled ? 0.5 : 1, cursor: "default" }} />
          </span>
        )
      )}
      {isQueryStarting ? (
        <LoadingSpinner />
      ) : (
        onStartQuery && (
          <span id="start-button" onClick={() => !disabled && !isQueryStopping && editor.trigger("run query", runAction.id, {})}>
            <StartIcon style={{ opacity: disabled ? 0.5 : 1, cursor: "default" }} />
          </span>
        )
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
  onStartQuery?: EditorLauncherEventHandler;
  onStopQuery?: EditorLauncherEventHandler;
}

export type EditorLauncherEventHandler = {
  method(editor?: monaco.editor.ICodeEditor, targetValue?: string, ...args: unknown[]): void;
}["method"];

export default EditorLauncher;
