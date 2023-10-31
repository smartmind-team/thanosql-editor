import "../../index.css";
import "@/thanosql";
import { useRef, useEffect, useCallback, forwardRef, useImperativeHandle, useState, Dispatch, useMemo } from "react";
import * as monaco from "monaco-editor-core";
import EditorLauncher, { type EditorLauncherProps, type EditorLauncherModule } from "@/components/EditorLauncher";
import { WorkerPaths, setWorkers } from "@/util/setWorkers";
import { useEditorContext } from "@/editorContext";
import { EditorSessionStore } from "@/EditorSessionStore";
import { useEffectOnce } from "@/util/hooks/useEffectOnce";
import { type CreateModelOptions, createModel } from "@/util/monaco-util";

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

    const module = useMemo<EditorModule>(
      () => ({
        ...store,
        getEditor: () => editorRef.current,
        getValue: () => {
          return editorRef.current && editorRef.current.getValue();
        },
        changeTabSession: (...args) => {
          editorRef.current && defaultSessionId && store.changeTabSession(editorRef.current, ...args);
        },
        createTabSession: (...args) => defaultSessionId && store.createTabSession(...args),
        getSessionState: (...args) => defaultSessionId && store.getSessionState(...args),
        removeTabSession: (...args) => defaultSessionId && store.removeTabSession(...args),
        saveTabSession: (...args) => editorRef.current && defaultSessionId && store.saveTabSession(editorRef.current, ...args),
        setTabSession: (...args) => editorRef.current && defaultSessionId && store.setTabSession(...args),
        isQueryStarting: () => launcherRef.current.isQueryStarting(),
        setIsQueryStarting: next => launcherRef.current.setIsQueryStarting(next),
        isQueryStopping: () => launcherRef.current.isQueryStopping(),
        setIsQueryStopping: next => launcherRef.current.setIsQueryStopping(next),
        isEditorLoading: () => isEditorLoading,
        setIsEditorLoading: next => setIsEditorLoading(next),
      }),
      [defaultSessionId],
    );

    useImperativeHandle(ref, () => module, [store, editorId, module]);

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
        : createModel({ language, value: defaultValue });

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
      editorRefs.current[editorId] = module;
      setActiveEditors(new Set(Object.keys(editorRefs.current)));
    }, [editorId, module]);

    useEffect(() => {
      isEditorLoading && createEditor();
    }, [isEditorLoading, createEditor]);

    useEffect(() => {
      setEditorRef();
    }, [defaultSessionId]);

    useEffect(() => {
      modelChangeEffect.current?.dispose();
      modelChangeEffect.current = editorRef.current?.onDidChangeModel(() => editorRef.current.focus());
      return () => {
        editorRefs && delete editorRefs.current?.[editorId];
        setActiveEditors(new Set(Object.keys(editorRefs.current)));
      };
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

export interface EditorModule
  extends Omit<InstanceType<typeof EditorSessionStore>, "#store" | "changeTabSession" | "saveTabSession">,
    EditorLauncherModule {
  getEditor: () => monaco.editor.IStandaloneCodeEditor | void;
  getValue: () => string | void;
  changeTabSession: (currentSessionId: string, nextSessionId: string, options?: CreateModelOptions) => void;
  saveTabSession: (sessionId: string) => void;
  isEditorLoading: () => boolean;
  setIsEditorLoading: Dispatch<boolean>;
}

export default Editor;
