import { useRef, useEffect, useCallback } from "react";
import { monaco } from "@/index";
import { setupLanguage } from "@/thanosql/setup";
import EditorLauncher, { EditorLauncherProps } from "@/components/EditorLauncher";
import { WorkerPaths, setWorkers } from "@/util/setWorkers";
import { useEditorContext } from "../EditorProvider";
import loader from "@monaco-editor/loader";

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
  const {
    monacoRef,
    editorRef,
    isEditorLoading,
    isMonacoMounting,
    setIsMonacoMounting,
    sessionID,
    setIsEditorLoading,
    createTabSession,
    getSessionState,
    saveTabSession,
  } = useEditorContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const effectCalled = useRef<boolean>(false);
  const modelChangeEffect = useRef<monaco.IDisposable>();

  /** load monaco module */
  useEffect(() => {
    const cancelable = loader.init(); // get monaco-editor module from CDN

    cancelable
      .then(monaco => {
        monacoRef.current = monaco;
        setIsMonacoMounting(false);
      })
      .catch(error => error?.type !== "cancelation" && console.error("Monaco initialization: error:", error));

    return () => {
      editorRef.current ? disposeEditor() : cancelable.cancel();
    };
  }, []);

  const createEditor = useCallback(() => {
    if (!containerRef.current || !monacoRef.current) return;

    // presetting step
    setupLanguage(monacoRef.current);
    setWorkers(workerPaths);

    // if current SessionID has previous store(model);
    const model = getSessionState()?.model ?? createTabSession(monacoRef.current, sessionID, { language, value: defaultValue }).model;

    // create monaco-editor instance
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
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
      automaticLayout: true, // responsive editor view configuration
      ...options,
    });

    if (getSessionState()?.state) editorRef.current.restoreViewState(getSessionState().state);

    setIsEditorLoading(false);
    effectCalled.current = true;

    modelChangeEffect.current = editorRef.current.onDidChangeModel(e => {
      const newModel = monacoRef.current.editor.getModel(e.newModelUrl);
      editorRef.current.focus();
      editorRef.current.revealLine(newModel.getLineCount());
    });
  }, [language, defaultValue, workerPaths, options]);

  const disposeEditor = () => {
    // model change effect dispose -> save current session -> editor instance dispose
    modelChangeEffect.current?.dispose();
    saveTabSession(editorRef.current);
    editorRef.current?.dispose();
    setIsEditorLoading(true);
  };

  useEffect(() => {
    !isMonacoMounting && isEditorLoading && !effectCalled.current && createEditor();
    return () => {
      effectCalled.current && (effectCalled.current = false);
    };
  }, [isMonacoMounting, isEditorLoading, createEditor]);

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
