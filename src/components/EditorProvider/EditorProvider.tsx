import { monaco, type Monaco } from "@/index";
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useRef, MutableRefObject, useEffect } from "react";
import EditorStore from "./EditorStore";

const EditorContext = createContext<EditorContextState | null>(null);

export const useEditorContext = () => {
  const {
    store,
    editorRef,
    monacoRef,
    sessionID,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
    isMonacoMounting,
    setSessionID,
    getSessionState,
    setTabSession,
    createTabSession,
    changeTabSession,
    removeTabSession,
    saveTabSession,
    refreshTabSession,
    setIsQueryStarting,
    setIsQueryStopping,
    setIsEditorLoading,
    setIsMonacoMounting,
  } = useContext(EditorContext) ?? {};
  return {
    store,
    editorRef,
    monacoRef,
    sessionID,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
    isMonacoMounting,
    setSessionID,
    getSessionState,
    setTabSession,
    createTabSession,
    changeTabSession,
    removeTabSession,
    saveTabSession,
    refreshTabSession,
    setIsQueryStarting,
    setIsQueryStopping,
    setIsEditorLoading,
    setIsMonacoMounting,
  };
};

const EditorProvider: React.FC<EditorProviderProps> = ({ children, defaultState, store }) => {
  const {
    isQueryStarting: defaultIsQueryStarting,
    isQueryStopping: defaultIsQueryStopping,
    isEditorLoading: defaultIsEditorLoading,
  } = defaultState ?? {};

  // state can affect re-render all of provider's chlidren
  const [isQueryStarting, setIsQueryStarting] = useState(defaultIsQueryStarting ?? false);
  const [isQueryStopping, setIsQueryStopping] = useState(defaultIsQueryStopping ?? false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const [isEditorLoading, setIsEditorLoading] = useState(defaultIsEditorLoading ?? true);

  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

  return (
    <EditorContext.Provider
      value={{
        store,
        editorRef,
        monacoRef,
        sessionID: store.sessionID,
        isQueryStarting,
        isQueryStopping,
        isEditorLoading,
        isMonacoMounting,
        setSessionID: store.setSessionID,
        getSessionState: store.getSessionState,
        setTabSession: store.setTabSession,
        createTabSession: store.createTabSession,
        changeTabSession: store.changeTabSession,
        removeTabSession: store.removeTabSession,
        saveTabSession: store.saveTabSession,
        refreshTabSession: store.refreshTabSession,
        setIsQueryStarting,
        setIsQueryStopping,
        setIsEditorLoading,
        setIsMonacoMounting,
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export interface EditorContextState extends Omit<InstanceType<typeof EditorStore>, "#store"> {
  store: EditorStore;
  editorRef: MutableRefObject<monaco.editor.IStandaloneCodeEditor>;
  monacoRef: MutableRefObject<Monaco>;

  // storage for session's model, state, and something...
  isQueryStarting?: boolean;
  isQueryStopping?: boolean;
  isEditorLoading?: boolean;
  isMonacoMounting?: boolean;
  setIsQueryStarting?: Dispatch<SetStateAction<boolean>>;
  setIsQueryStopping?: Dispatch<SetStateAction<boolean>>;
  setIsEditorLoading?: Dispatch<SetStateAction<boolean>>;
  setIsMonacoMounting?: Dispatch<SetStateAction<boolean>>;
}

export interface EditorProviderProps {
  store: EditorStore;
  defaultState?: Partial<Omit<EditorContextState, "editor">>;
  children?: ReactNode;
}

export default EditorProvider;
