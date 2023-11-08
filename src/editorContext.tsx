import { createContext, useContext, ReactNode, useRef, MutableRefObject, useCallback, useState, Dispatch, SetStateAction, memo } from "react";
import { EditorSessionStore } from "./EditorSessionStore";
import { type EditorModule } from "./components/Editor";

const EditorContext = createContext<EditorContextState>(null);

export const useEditorContext = () => {
  const editorContext = useContext(EditorContext);
  return editorContext;
};

export const EditorProvider: React.FC<EditorProviderProps> = memo(({ children, store = new EditorSessionStore() }) => {
  const editorRefs = useRef<{ [id: string]: EditorModule | undefined }>({});
  const [activeEditors, _setActiveEditors] = useState<Set<string>>(new Set());

  const setActiveEditors = (value: SetStateAction<Set<string>>) => {
    const newActiveEditors = value instanceof Set ? value : value(activeEditors);
    if (activeEditors.size === newActiveEditors.size) return;
    _setActiveEditors(newActiveEditors);
  };

  const isEditorReady = useCallback((editorId: string) => !!editorRefs.current[editorId], [activeEditors]);
  const getEditorModule = useCallback((editorId: string) => editorRefs.current[editorId], [activeEditors]);

  return (
    <EditorContext.Provider
      value={{
        ...store,
        editorRefs,
        isEditorReady,
        activeEditors,
        setActiveEditors,
        getEditorModule,
      }}>
      {children}
    </EditorContext.Provider>
  );
});

export interface EditorContextState extends Omit<InstanceType<typeof EditorSessionStore>, "#store"> {
  editorRefs: MutableRefObject<Record<string, EditorModule>>;
  isEditorReady: (editorId: string) => boolean;
  activeEditors: Set<string>;
  setActiveEditors: Dispatch<SetStateAction<Set<string>>>;
  getEditorModule: (editorId: string) => EditorModule | void;
}

export interface EditorProviderProps {
  store?: EditorSessionStore;
  children?: ReactNode;
}
