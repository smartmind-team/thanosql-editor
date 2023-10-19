import { RefAttributes, memo } from "react";

import Editor, { type EditorModule, type EditorProps } from "./Editor";
export default memo<EditorProps & RefAttributes<EditorModule>>(Editor);
export type { EditorProps, EditorModule };
