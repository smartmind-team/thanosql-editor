/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, HTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";
import LoadingSpinner from "../LoadingSpinner";

const EditorLauncher = forwardRef<EditorLauncherModule, EditorLauncherProps>(({ onStartQuery, onStopQuery, editor, children, ...props }, ref) => {
  const [isQueryStarting, setIsQueryStarting] = useState(false);
  const [isQueryStopping, setIsQueryStopping] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        isQueryStarting: () => isQueryStarting,
        setIsQueryStarting,
        isQueryStopping: () => isQueryStopping,
        setIsQueryStopping,
      };
    },
    [],
  );

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

  return (
    <div css={EditorLauncherStyle} {...props} className="editor-launcher">
      <div css={LauncherStatusBar}>{children}</div>
      <div css={LauncherActionBox}>
        {isQueryStopping ? (
          <LoadingSpinner />
        ) : (
          onStopQuery && (
            <span css={IconButtonWrapper} id="stop-button icon-button" onClick={() => !disabled && !isQueryStarting && onStopQuery(editor)}>
              <StopIcon css={IconButton(disabled)} />
            </span>
          )
        )}
        {isQueryStarting ? (
          <LoadingSpinner />
        ) : (
          onStartQuery && (
            <span
              css={IconButtonWrapper}
              id="start-button icon-button"
              onClick={() => !disabled && !isQueryStopping && editor.trigger("run query", runAction.id, {})}>
              <StartIcon css={IconButton(disabled)} />
            </span>
          )
        )}
      </div>
    </div>
  );
});

const EditorLauncherStyle = css`
  display: flex;
  gap: 2em;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.5em;
  height: 3em;
`;

const LauncherStatusBar = css`
  width: 100%;
`;

const LauncherActionBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
`;

const IconButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
`;

const IconButton = (disabled = false) => css`
  opacity: ${disabled ? 0.5 : 1};
  cursor: default;
  vertical-align: middle;
  ${!disabled &&
  `&:hover {
    cursor: pointer;
    opacity: 0.8;
  }`}
`;

export interface EditorLauncherProps extends HTMLAttributes<HTMLDivElement> {
  onStartQuery?: EditorLauncherEventHandler;
  onStopQuery?: EditorLauncherEventHandler;
  editor?: monaco.editor.IStandaloneCodeEditor;
}

export type EditorLauncherEventHandler = {
  method(editor?: monaco.editor.ICodeEditor, targetValue?: string, ...args: unknown[]): void;
}["method"];

export interface EditorLauncherModule {
  isQueryStarting: () => boolean;
  setIsQueryStarting: Dispatch<boolean>;
  isQueryStopping: () => boolean;
  setIsQueryStopping: Dispatch<boolean>;
}

export default EditorLauncher;
