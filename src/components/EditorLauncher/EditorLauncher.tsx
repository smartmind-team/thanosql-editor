/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";
import { useEditorContext } from "../EditorProvider";
import LoadingSpinner from "../LoadingSpinner";

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
  useEffect(() => {
    let modelContentChangeListener = editor.onDidChangeModelContent(() => {
      const value = editor.getValue();
      setDisabled(!value);
    });
    let modelChangeListener = editor.onDidChangeModel(() => {
      const value = editor.getValue();
      setDisabled(!value);
    });
    return () => {
      modelContentChangeListener.dispose();
      modelChangeListener.dispose();
    };
  }, [editor]);
  console.log(disabled);
  return (
    <div css={EditorLauncherStyle} {...props}>
      {isQueryStopping ? (
        <LoadingSpinner />
      ) : (
        onStopQuery && (
          <span id="stop-button icon-button" onClick={() => !disabled && !isQueryStarting && onStopQuery(editor)}>
            <StopIcon css={IconButton(disabled)} />
          </span>
        )
      )}
      {isQueryStarting ? (
        <LoadingSpinner />
      ) : (
        onStartQuery && (
          <span id="start-button icon-button" onClick={() => !disabled && !isQueryStopping && editor.trigger("run query", runAction.id, {})}>
            <StartIcon css={IconButton(disabled)} />
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

const IconButton = (disabled = false) => css`
  opacity: ${disabled ? 0.5 : 1};
  cursor: default;
  ${!disabled &&
  `&:hover {
    cursor: pointer;
    opacity: 0.8;
  }`}
`;

export interface EditorLauncherProps extends HTMLAttributes<HTMLDivElement> {
  onStartQuery?: EditorLauncherEventHandler;
  onStopQuery?: EditorLauncherEventHandler;
}

export type EditorLauncherEventHandler = {
  method(editor?: monaco.editor.ICodeEditor, targetValue?: string, ...args: unknown[]): void;
}["method"];

export default EditorLauncher;
