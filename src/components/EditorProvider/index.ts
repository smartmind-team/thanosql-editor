import { memo } from "react";
import EditorProvider from "./EditorProvider";
import { useEditorContext } from "./EditorProvider";
import type { EditorProviderProps, EditorContextState } from "./EditorProvider";

export { useEditorContext, EditorProviderProps, EditorContextState };

export default memo<EditorProviderProps>(EditorProvider);
