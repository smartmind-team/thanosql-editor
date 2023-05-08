import * as monaco from 'monaco-editor-core';
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

const EditorContext = createContext<EditorContextState | null>(null);

export const useEditorContext = () => {
  const {
    editor,
    sessionID,
    store,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
    createTabSession,
    changeTabSession,
    removeTabSession,
    setEditor,
    setSessionID,
    setIsQueryStarting,
    setIsQueryStopping,
    setIsEditorLoading,
  } = useContext(EditorContext) ?? {};
  return {
    editor,
    sessionID,
    store,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
    createTabSession,
    changeTabSession,
    removeTabSession,
    setEditor,
    setSessionID,
    setIsQueryStarting,
    setIsQueryStopping,
    setIsEditorLoading,
  };
};

const EditorProvider: React.FC<EditorProviderProps> = ({ children, defaultState }) => {
  const {
    editor: defaultEditor,
    sessionID: defaultSessionID,
    store = new Map<string, (EditorDefaultStore & Record<string, unknown>) | undefined>(),
    isQueryStarting: defaultIsQueryStarting,
    isQueryStopping: defaultIsQueryStopping,
    isEditorLoading: defaultIsEditorLoading,
  } = defaultState ?? {};
  const [editor, setEditor] = useState(defaultEditor ?? null);
  const [sessionID, setSessionID] = useState(defaultSessionID ?? '');
  const [isQueryStarting, setIsQueryStarting] = useState(defaultIsQueryStarting ?? false);
  const [isQueryStopping, setIsQueryStopping] = useState(defaultIsQueryStopping ?? false);
  const [isEditorLoading, setIsEditorLoading] = useState(defaultIsEditorLoading ?? false);

  const createTabSession: EditorContextState['createTabSession'] = (sessionID, createType = 'default') => {
    if (!store.has(sessionID)) {
      let model = null;
      switch (createType) {
        case 'initialize':
          model = editor.getModel();
          break;
        case 'copy':
          model = monaco.editor.createModel(editor.getValue(), editor.getModel().getLanguageId());
          break;
        default:
          model = monaco.editor.createModel('', 'thanosql');
          break;
      }
      store.set(sessionID, { model, state: null });
    }
    return store.get(sessionID);
  };

  const changeTabSession: EditorContextState['changeTabSession'] = (currentTabSessionID, desiredTabSessionID) => {
    const currentState = editor.saveViewState();
    if (store.has(currentTabSessionID)) store.set(currentTabSessionID, { ...store.get(currentTabSessionID), state: currentState });

    // If the desired TabSessionID does not exist, create new one.
    if (!store.has(desiredTabSessionID)) createTabSession(desiredTabSessionID);
    const { model, state } = store.get(desiredTabSessionID);
    editor.setModel(model);
    editor.restoreViewState(state);
    editor.focus();
  };

  const removeTabSession: EditorContextState['removeTabSession'] = sessionID => {
    store.delete(sessionID);
    return store.has(sessionID);
  };

  return (
    <EditorContext.Provider
      value={{
        editor,
        sessionID,
        store,
        isQueryStarting,
        isQueryStopping,
        isEditorLoading,
        createTabSession,
        changeTabSession,
        removeTabSession,
        setEditor,
        setSessionID,
        setIsQueryStarting,
        setIsQueryStopping,
        setIsEditorLoading,
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export interface EditorContextState {
  editor: monaco.editor.IStandaloneCodeEditor;
  // current editor tab session ID
  sessionID: string;
  // storage for session's model, state, and something...
  store: Map<string, (EditorDefaultStore & Record<string, unknown>) | undefined>;
  isQueryStarting?: boolean;
  isQueryStopping?: boolean;
  isEditorLoading?: boolean;
  createTabSession: (sessionID: string, createType?: CreateType) => EditorDefaultStore | void;
  changeTabSession: (currentTabSessionID: string, desiredTabSessionID: string) => void;
  removeTabSession: (sessionID: string) => boolean;
  setEditor?: Dispatch<SetStateAction<monaco.editor.IStandaloneCodeEditor>>;
  setSessionID?: Dispatch<SetStateAction<string>>;
  setIsQueryStarting?: Dispatch<SetStateAction<boolean>>;
  setIsQueryStopping?: Dispatch<SetStateAction<boolean>>;
  setIsEditorLoading?: Dispatch<SetStateAction<boolean>>;
}

export type CreateType = 'copy' | 'initialize' | 'default';
export interface EditorProviderProps {
  defaultState?: EditorContextState;
  children?: ReactNode;
}

export interface EditorDefaultStore {
  model: monaco.editor.ITextModel;
  state: monaco.editor.ICodeEditorViewState;
}

export default EditorProvider;
