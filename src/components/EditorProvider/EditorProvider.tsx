import { createContext, useContext, ReactNode, useRef, MutableRefObject, createRef, Children } from "react";
import editorStore, { EditorStore, EditorStoreManager } from "./EditorStore";
import { EditorModule } from "../Editor/Editor";

const EditorContext = createContext<EditorContextState>({
  ...editorStore,
  ...EditorStoreManager,
});

export const useEditorContext = () => {
  const editorContext = useContext(EditorContext);
  return editorContext;
};

const EditorProvider: React.FC<EditorProviderProps> = ({ children, store }) => {
  const newStore = store ?? new EditorStore();
  const editorRefs = useRef<Record<string, EditorModule>>({});

  return (
    <EditorContext.Provider
      value={{
        ...newStore,
        ...EditorStoreManager,
        editorRefs,
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export interface EditorContextState extends Omit<InstanceType<typeof EditorStore>, "#store">, InstanceType<typeof EditorStoreManager> {
  editorRefs?: MutableRefObject<Record<string, EditorModule>>;
}

export interface EditorProviderProps {
  store?: EditorStore;
  children?: ReactNode;
}

export default EditorProvider;
