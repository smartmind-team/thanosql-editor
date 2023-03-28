import * as monaco from "monaco-editor-core";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const EditorContext = createContext<EditorContextState | null>(null);

export const useEditorContext = () => {
  const {
    editor,
    currentValue,
    currentMode,
    sessionID,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
    setEditor,
    setValue,
    setMode,
    setSession,
    setQueryStarting,
    setQueryStopping,
    setEditorLoading,
  } = useContext(EditorContext) ?? {};
  return {
    editor,
    currentValue,
    currentMode,
    sessionID,
    isQueryStarting,
    isQueryStopping,
    isEditorLoading,
    setEditor,
    setValue,
    setMode,
    setSession,
    setQueryStarting,
    setQueryStopping,
    setEditorLoading,
  };
};

const EditorProvider: React.FC<EditorProviderProps> = ({
  children,
  defaultState,
}) => {
  const {
    editor: defaultEditor,
    currentValue: defaultValue,
    currentMode: defaultMode,
    sessionID: defaultSessionID,
    isQueryStarting: defaultIsQueryStarting,
    isQueryStopping: defaultIsQueryStopping,
    isEditorLoading: defaultIsEditorLoading,
  } = defaultState ?? {};
  const [editor, setEditor] = useState<EditorContextState["editor"]>(
    defaultEditor ?? null
  );
  const [currentValue, setCurrentValue] = useState(defaultValue ?? "");
  const [currentMode, setCurrentMode] = useState(defaultMode ?? "");
  const [sessionID, setSessionID] = useState(defaultSessionID ?? "");
  const [isQueryStarting, setIsQueryStarting] = useState(
    defaultIsQueryStarting ?? false
  );
  const [isQueryStopping, setIsQueryStopping] = useState(
    defaultIsQueryStopping ?? false
  );
  const [isEditorLoading, setIsEditorLoading] = useState(
    defaultIsEditorLoading ?? false
  );

  return (
    <EditorContext.Provider
      value={{
        editor,
        currentValue,
        currentMode,
        sessionID,
        isQueryStarting,
        isQueryStopping,
        isEditorLoading,
        setEditor,
        setValue: setCurrentValue,
        setMode: setCurrentMode,
        setSession: setSessionID,
        setQueryStarting: setIsQueryStarting,
        setQueryStopping: setIsQueryStopping,
        setEditorLoading: setIsEditorLoading,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export interface EditorContextState {
  editor: monaco.editor.IStandaloneCodeEditor;
  currentValue: string;
  currentMode: string; // current language model
  sessionID: string; // Editor Session ID
  isQueryStarting?: boolean;
  isQueryStopping?: boolean;
  isEditorLoading?: boolean;
  setEditor?: Dispatch<SetStateAction<monaco.editor.IStandaloneCodeEditor>>;
  setValue?: Dispatch<SetStateAction<string>>;
  setMode?: Dispatch<SetStateAction<string>>;
  setSession?: Dispatch<SetStateAction<string>>;
  setQueryStarting?: Dispatch<SetStateAction<boolean>>;
  setQueryStopping?: Dispatch<SetStateAction<boolean>>;
  setEditorLoading?: Dispatch<SetStateAction<boolean>>;
}

export interface EditorProviderProps {
  defaultState?: EditorContextState;
  children?: ReactNode;
}

export default EditorProvider;
