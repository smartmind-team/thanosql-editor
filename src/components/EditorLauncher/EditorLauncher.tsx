/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { StartIcon, StopIcon } from "../Icons";
import * as monaco from "monaco-editor-core";
import { useEditorContext } from "../EditorProvider";
import LoadingSpinner from "../LoadingSpinner";
import { useEffectOnce } from "@/util/useEffectOnce";

const EditorLauncher = ({ onStartQuery, onStopQuery, ...props }: EditorLauncherProps) => {
  const { editor, isQueryStarting, isQueryStopping } = useEditorContext();

  useEffectOnce(() => {
    if (!editor) return;

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

        onStartQuery && onStartQuery(editor, selectedValue);
      },
    };

    editor.addAction(runAction);
  });

  return (
    <div css={EditorLauncherStyle} {...props}>
      {isQueryStopping ? <LoadingSpinner /> : <StopIcon onClick={() => !isQueryStarting && onStopQuery && onStopQuery(editor)} />}
      {isQueryStarting ? <LoadingSpinner /> : <StartIcon onClick={() => !isQueryStopping && editor.trigger("", "runSelectedOrEntireQuery", "")} />}
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
  method(editor?: monaco.editor.ICodeEditor, targetValue?: string): void;
}["method"];

export default EditorLauncher;
