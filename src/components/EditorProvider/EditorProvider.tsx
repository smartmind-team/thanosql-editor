import { createContext, useContext, ReactNode, useRef, MutableRefObject, useCallback, useState, Dispatch, SetStateAction } from "react";
import editorStore, { EditorStore, EditorStoreManager } from "./EditorStore";
import { EditorModule } from "../Editor/Editor";

const EditorContext = createContext<EditorContextState>(null);

export const useEditorContext = () => {
  const editorContext = useContext(EditorContext);
  return editorContext;
};

const EditorProvider: React.FC<EditorProviderProps> = ({ children, store }) => {
  const newStore = store ?? editorStore;
  const editorRefs = useRef<Record<string, EditorModule>>({});
  const [activeEditors, _setActiveEditors] = useState<Set<string>>(new Set());

  const setActiveEditors = (value: SetStateAction<Set<string>>) => {
    const newActiveEditors = value instanceof Set ? value : value(activeEditors);
    if (activeEditors.size === newActiveEditors.size) return;
    _setActiveEditors(newActiveEditors);
  };

  const isEditorReady = useCallback((editorId: string) => !!editorRefs.current[editorId], [activeEditors]);
  const getEditorModules = useCallback((editorId: string) => editorRefs.current[editorId], [activeEditors]);

  return (
    <EditorContext.Provider
      value={{
        ...newStore,
        ...EditorStoreManager,
        editorRefs,
        isEditorReady,
        activeEditors,
        setActiveEditors,
        getEditorModules,
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export interface EditorContextState extends Omit<InstanceType<typeof EditorStore>, "#store">, InstanceType<typeof EditorStoreManager> {
  editorRefs: MutableRefObject<Record<string, EditorModule>>;
  isEditorReady: (editorId: string) => boolean;
  activeEditors: Set<string>;
  setActiveEditors: Dispatch<SetStateAction<Set<string>>>;
  getEditorModules: (editorId: string) => EditorModule;
}

export interface EditorProviderProps {
  store?: EditorStore;
  children?: ReactNode;
}

export default EditorProvider;
