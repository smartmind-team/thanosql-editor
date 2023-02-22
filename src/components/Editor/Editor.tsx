import React, { useState } from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage } from "@/thanosql/setup";
import EditorLauncher, {
  EditorLauncherProps,
} from "@/components/EditorLauncher";

const Editor: React.FC<IEditorProps> = ({
  language = "thanosql",
  defaultValue,
  width,
  height,
  style,
  onStartQuery,
  onStopQuery,
  ...props
}: IEditorProps &
  React.HTMLAttributes<HTMLDivElement> &
  Omit<EditorLauncherProps, "editor">) => {
  let divNode;
  const [editor, setEditor] = useState(null);
  const effectCalled = React.useRef<boolean>(false);
  const assignRef = React.useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
  }, []);
  const [loading, setLoading] = useState(true);

  const ro = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { width, height } = entry.contentRect;
      (self as any).editor?.layout({
        width,
        height,
      });
    });
  });

  React.useEffect(() => {
    if (divNode && !effectCalled.current) {
      effectCalled.current = true;
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
      });
      ro.observe(divNode);
      (self as any).editor = editor;
      setEditor(editor);
      setLoading(false);
    }
  }, [assignRef]);

  return (
    <div id="editor-wrapper">
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
          ...style,
        }}
        {...props}
      ></div>
      {loading && "isLoading..."}
    </div>
  );
};

export interface IEditorProps {
  language?: string;
  defaultValue?: string;
  width?: string | number;
  height?: string | number;
}

export default Editor;
