import "../../index.css";
import { useRef, useEffect, useCallback } from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage } from "@/thanosql/setup";
import EditorLauncher, { EditorLauncherProps } from "@/components/EditorLauncher";
import { WorkerPaths, setWorkers } from "@/util/setWorkers";
import { useEditorContext } from "../EditorProvider";
import { useEffectOnce } from "@/util/useEffectOnce";

const Editor: React.FC<EditorProps> = ({
  language = "thanosql",
  defaultValue,
  width,
  height,
  style,
  workerPaths,
  options,
  launcherProps,
  ...props
}) => {
  const { editorRef, isEditorLoading, sessionID, setIsEditorLoading, createTabSession, getSessionState, saveTabSession } = useEditorContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const effectCalled = useRef<boolean>(false);
  const modelChangeEffect = useRef<monaco.IDisposable>();

  useEffectOnce(() => {
    if (editorRef.current) {
      saveTabSession(editorRef.current);
      editorRef.current.dispose();
      setIsEditorLoading(true);
    }
  });

  const createEditor = useCallback(() => {
    if (!containerRef.current || effectCalled.current) return;

    // presetting step
    setupLanguage();
    setWorkers(workerPaths);

    // if current SessionID has previous store(model);
    const model = getSessionState()?.model ?? createTabSession(sessionID, { language, value: defaultValue }).model;

    // create monaco-editor instance
    editorRef.current = monaco.editor.create(containerRef.current, {
      model,
      minimap: { enabled: false },
      autoIndent: "full",
      theme: "thanosql-light",
      mouseWheelZoom: true,
      fontSize: 16,
      inDiffEditor: false,
      renderLineHighlight: "none",
      lineNumbers: ln => '<span style="padding-left: 16px; color: #C7C9CC;">' + ln + "</span>",
      glyphMargin: false,
      folding: false,
      lineDecorationsWidth: "32px",
      lineNumbersMinChars: 0,
      detectIndentation: true,
      tabSize: 4,
      automaticLayout: true,
      ...options,
    });

    if (getSessionState()?.state) editorRef.current.restoreViewState(getSessionState().state);
    setIsEditorLoading(false);
    effectCalled.current = true;
  }, [language, defaultValue, workerPaths, options]);

  useEffect(() => {
    isEditorLoading && createEditor();
  }, [isEditorLoading, createEditor]);

  useEffect(() => {
    modelChangeEffect.current?.dispose();
    modelChangeEffect.current = editorRef.current?.onDidChangeModel(() => editorRef.current.focus());
  }, []);

  return (
    <div className="editor-wrapper" style={{ display: "flex", flexFlow: "column nowrap", height: "100%" }}>
      {!!editorRef.current && <EditorLauncher {...launcherProps} />}
      <div
        hidden={isEditorLoading}
        ref={containerRef}
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
        {...props}></div>
      {isEditorLoading && <>isLoading...</>}
    </div>
  );
};

export interface EditorCustomProps {
  language?: string;
  sessionID?: string;
  defaultValue?: string;
  width?: string | number;
  height?: string | number;
  workerPaths?: WorkerPaths;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
  launcherProps?: EditorLauncherProps;
}

export type EditorProps = EditorCustomProps & React.HTMLAttributes<HTMLDivElement>;

export default Editor;
