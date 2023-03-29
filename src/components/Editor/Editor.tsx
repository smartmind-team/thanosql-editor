import { useState, useRef, useCallback, useEffect } from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage } from "@/thanosql/setup";
import EditorLauncher, {
  EditorLauncherProps,
} from "@/components/EditorLauncher";
import { WorkerPaths, setWorkers } from "@/util/setWorkers";
import { useEditorContext } from "../EditorProvider";

const Editor: React.FC<EditorProps> = ({
  language = "thanosql",
  defaultValue,
  width,
  height,
  style,
  workerPaths,
  options,
  onStartQuery,
  onStopQuery,
  ...props
}) => {
  const {
    editor,
    currentValue,
    currentMode,
    sessionID,
    isEditorLoading,
    setEditor,
    setValue,
    setMode,
    setSession,
    setEditorLoading,
  } = useEditorContext();
  let divNode;
  const effectCalled = useRef<boolean>(false);
  const assignRef = useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
  }, []);

  useEffect(() => {
    if (divNode && !effectCalled.current) {
      setupLanguage();
      const editor = monaco.editor.create(divNode, {
        language: language,
        minimap: { enabled: false },
        autoIndent: "full",
        theme: "thanosql-light",
        mouseWheelZoom: true,
        fontSize: 16,
        value: defaultValue,
        inDiffEditor: false,
        renderLineHighlight: "none",
        lineNumbers: (ln) =>
          '<span style="padding-left: 16px; color: #C7C9CC;">' + ln + "</span>",
        glyphMargin: false,
        folding: false,
        lineDecorationsWidth: "32px",
        lineNumbersMinChars: 0,
        detectIndentation: true,
        tabSize: 4,
        ...options,
      });

      // ResizeObserver for auto resize monaco editor
      const ro = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { width, height } = entry.contentRect;
          editor.layout({
            width,
            height,
          });
        });
      });
      ro.observe(divNode);

      setEditor(editor);
      setEditorLoading(false);
      setWorkers(workerPaths);
      effectCalled.current = true;
    }
  }, [assignRef]);

  return (
    <div
      className="editor-wrapper"
      style={{ display: "flex", flexFlow: "column nowrap", height: "100%" }}
    >
      <EditorLauncher onStartQuery={onStartQuery} onStopQuery={onStopQuery} />
      <div
        hidden={!divNode && isEditorLoading}
        ref={assignRef}
        className="editor-container"
        style={{
          maxHeight: 916,
          minWidth: "100%",
          width: width ?? "100%",
          height: height ?? 256,
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "#52525226",
          flex: 2,
          ...style,
        }}
        {...props}
      ></div>
      {isEditorLoading && "isLoading..."}
    </div>
  );
};

export interface EditorCustomProps {
  language?: string;
  defaultValue?: string;
  width?: string | number;
  height?: string | number;
  workerPaths?: WorkerPaths;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
}

export type EditorProps = EditorCustomProps &
  React.HTMLAttributes<HTMLDivElement> &
  Omit<EditorLauncherProps, "editor">;

export default Editor;
