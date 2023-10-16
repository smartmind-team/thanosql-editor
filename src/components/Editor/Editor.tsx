import "../../index.css";
import { useRef, useEffect, useCallback, forwardRef, useImperativeHandle, useState, Dispatch, createRef, useMemo } from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage as setThanoSQL } from "@/thanosql/setup";
import EditorLauncher, { EditorLauncherProps } from "@/components/EditorLauncher";
import { WorkerPaths, setWorkers } from "@/util/setWorkers";
import { useEditorContext } from "../EditorProvider";
import { useEffectOnce } from "@/util/hooks/useEffectOnce";
import { CreateSessionOptions, EditorStore, EditorStoreManager } from "../EditorProvider/EditorStore";
import { EditorLauncherModule } from "../EditorLauncher/EditorLauncher";

const Editor = forwardRef<EditorModule, EditorProps>(
  (
    {
      editorId,
      language = "thanosql",
      defaultValue,
      width,
      height,
      style,
      workerPaths,
      options,
      launcherProps,
      launcherDisabled,
      defaultSessionId,
      ...props
    },
    ref,
  ) => {
    const { editorRefs, activeEditors, setActiveEditors, ...store } = useEditorContext();
    const launcherRef = useRef<EditorLauncherModule>();
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const containerRef = useRef<HTMLDivElement>();
    const effectCalled = useRef<boolean>(false);
    const modelChangeEffect = useRef<monaco.IDisposable>();

    const [isEditorLoading, setIsEditorLoading] = useState(true);

    const modules = useMemo(
      () => ({
        ...store,
        getEditor: () => editorRef.current,
        changeTabSession: (currentSessionId: string, nextSessionId: string, options?: CreateSessionOptions) => {
          editorRef.current && defaultSessionId && store.changeTabSession(editorRef.current, currentSessionId, nextSessionId, options);
        },
        createTabSession: (...args: Parameters<typeof store.createTabSession>) => defaultSessionId && store.createTabSession(...args),
        getSessionState: (...args: Parameters<typeof store.getSessionState>) => defaultSessionId && store.getSessionState(...args),
        removeTabSession: (...args: Parameters<typeof store.removeTabSession>) => defaultSessionId && store.removeTabSession(...args),
        saveTabSession: (sessionId: string) => editorRef.current && defaultSessionId && store.saveTabSession(editorRef.current, sessionId),
        setTabSession: (...args: Parameters<typeof store.setTabSession>) => editorRef.current && defaultSessionId && store.setTabSession(...args),
        isQueryStarting: () => launcherRef.current.isQueryStarting(),
        setIsQueryStarting: next => launcherRef.current.setIsQueryStarting(next),
        isQueryStopping: () => launcherRef.current.isQueryStopping(),
        setIsQueryStopping: next => launcherRef.current.setIsQueryStopping(next),
        isEditorLoading: () => isEditorLoading,
        setIsEditorLoading: next => setIsEditorLoading(next),
      }),
      [defaultSessionId],
    );

    useImperativeHandle(ref, () => modules, [store, editorId, modules]);

    useEffectOnce(() => {
      // presetting step
      setThanoSQL();
    });

    useEffectOnce(() => {
      if (editorRef.current) {
        store.saveTabSession(editorRef.current, defaultSessionId);
        editorRef.current.dispose();
        setIsEditorLoading(true);
      }
    });

    const createEditor = useCallback(() => {
      if (!containerRef.current || effectCalled.current) return;
      setWorkers(workerPaths);

      const model = defaultSessionId
        ? store.getSessionState(defaultSessionId)?.model ?? store.createTabSession(defaultSessionId, { language, value: defaultValue }).model
        : EditorStoreManager.createModel({ language, value: defaultValue });

      const state = defaultSessionId && store.getSessionState(defaultSessionId).state;

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

      if (state) editorRef.current.restoreViewState(state);
      setIsEditorLoading(false);
      effectCalled.current = true;
    }, [language, defaultValue, workerPaths, options]);

    const setEditorRef = useCallback(() => {
      editorRefs.current[editorId] = modules;
      const newActiveEditors = Object.keys(editorRefs.current);
      setActiveEditors(prev => new Set([...prev, ...newActiveEditors]));
    }, [editorId, modules]);

    useEffect(() => {
      isEditorLoading && createEditor();
    }, [isEditorLoading, createEditor]);

    useEffect(() => {
      setEditorRef();
      return () => {
        editorRefs && delete editorRefs.current?.[editorId];
        setActiveEditors(new Set(Object.keys(editorRefs.current)));
      };
    }, [defaultSessionId]);

    useEffect(() => {
      modelChangeEffect.current?.dispose();
      modelChangeEffect.current = editorRef.current?.onDidChangeModel(() => editorRef.current.focus());
    }, []);

    return (
      <div className="editor-wrapper" style={{ display: "flex", flexFlow: "column nowrap", height: "100%", width: "100%" }}>
        {!!editorRef.current && !launcherDisabled && <EditorLauncher ref={launcherRef} editor={editorRef.current} {...launcherProps} />}
        <div
          id={`editor-${editorId}`}
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
  },
);

export interface EditorCustomProps {
  editorId: string;
  language?: string;
  defaultSessionId?: string;
  defaultValue?: string;
  width?: string | number;
  height?: string | number;
  workerPaths?: WorkerPaths;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
  launcherProps?: Exclude<EditorLauncherProps, "editor">;
  launcherDisabled?: boolean;
}

export type EditorProps = EditorCustomProps & React.HTMLAttributes<HTMLDivElement>;

export interface EditorModule extends Omit<InstanceType<typeof EditorStore>, "#store" | "changeTabSession" | "saveTabSession">, EditorLauncherModule {
  getEditor: () => monaco.editor.IStandaloneCodeEditor;
  changeTabSession: (currentSessionId: string, nextSessionId: string, options?: CreateSessionOptions) => void;
  saveTabSession: (sessionId: string) => void;
  isEditorLoading: () => boolean;
  setIsEditorLoading: Dispatch<boolean>;
}

export default Editor;
