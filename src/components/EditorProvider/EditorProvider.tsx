import * as monaco from "monaco-editor-core";
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useRef, MutableRefObject } from "react";
import EditorStore from "./EditorStore";

const EditorContext = createContext<EditorContextState | null>(null);

export const useEditorContext = () => {
  const {
    store,
    editorRef,
    sessionID,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
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
  } = useContext(EditorContext) ?? {};
  return {
    store,
    editorRef,
    sessionID,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
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
  const [isEditorLoading, setIsEditorLoading] = useState(defaultIsEditorLoading ?? true);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

  return (
    <EditorContext.Provider
      value={{
        store: store,
        editorRef,
        sessionID: store.sessionID,
        isQueryStarting,
        isQueryStopping,
        isEditorLoading,
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
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export interface EditorContextState extends Omit<InstanceType<typeof EditorStore>, "#store"> {
  store: EditorStore;
  editorRef: MutableRefObject<monaco.editor.IStandaloneCodeEditor>;
  // storage for session's model, state, and something...
  isQueryStarting?: boolean;
  isQueryStopping?: boolean;
  isEditorLoading?: boolean;
  setIsQueryStarting?: Dispatch<SetStateAction<boolean>>;
  setIsQueryStopping?: Dispatch<SetStateAction<boolean>>;
  setIsEditorLoading?: Dispatch<SetStateAction<boolean>>;
}

export interface EditorProviderProps {
  store: EditorStore;
  defaultState?: Partial<Omit<EditorContextState, "editor">>;
  children?: ReactNode;
}

export default EditorProvider;
