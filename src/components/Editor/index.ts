import { RefAttributes, memo } from "react";

import { EditorModule, EditorProps } from "./Editor";
import Editor from "./Editor";

export default memo<EditorProps & RefAttributes<EditorModule>>(Editor);
export { EditorProps };
