import { memo } from "react";
import EditorProvider from "./EditorProvider";
export { default as editorStore, EditorStore, EditorStoreManager } from "./EditorStore";
import type { EditorProviderProps, EditorContextState } from "./EditorProvider";
import type { EditorDefaultStore } from "./EditorStore";

export { useEditorContext } from "./EditorProvider";
export { EditorProviderProps, EditorContextState, EditorDefaultStore };
export default memo<EditorProviderProps>(EditorProvider);
