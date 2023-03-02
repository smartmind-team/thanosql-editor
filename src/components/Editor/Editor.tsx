import { useState, useRef, useCallback, useEffect } from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage } from "@/thanosql/setup";
import EditorLauncher, {
  EditorLauncherProps,
} from "@/components/EditorLauncher";
import { WorkerPaths, setWorkers } from "@/util/setWorkers";

const Editor: React.FC<EditorProps> = ({
  language = "thanosql",
  defaultValue,
  width,
  height,
  style,
  onStartQuery,
  onStopQuery,
  workerPaths,
  options,
  ...props
}) => {
  let divNode;
  const [editor, setEditor] = useState(null);
  const effectCalled = useRef<boolean>(false);
  const assignRef = useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
    setWorkers(workerPaths);
  }, []);
  const [loading, setLoading] = useState(true);

  const ro = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { width, height } = entry.contentRect;
      (window as any).editor?.layout({
        width,
        height,
      });
    });
  });

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
        value: defaultValue ?? "--thanosql query",
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
      ro.observe(divNode);
      (self as any).editor = editor;
      setEditor(editor);
      setLoading(false);
      effectCalled.current = true;
    }
  }, [assignRef]);

  return (
    <div
      className="editor-wrapper"
      style={{ display: "flex", flexFlow: "column nowrap", height: "100%" }}
    >
      <EditorLauncher
        editor={editor}
        onStartQuery={onStartQuery}
        onStopQuery={onStopQuery}
      />
      <div
        hidden={!divNode && loading}
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
      {loading && "isLoading..."}
    </div>
  );
};

export interface EditorCustomProps {
  language?: string;
  defaultValue?: string;
  width?: string | number;
  height?: string | number;
  workerPaths: WorkerPaths;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
}

export type EditorProps = EditorCustomProps &
  React.HTMLAttributes<HTMLDivElement> &
  Omit<EditorLauncherProps, "editor">;

export default Editor;
