import "./index.css";
import Editor from "./components/Editor";
import EditorProvider, { useEditorContext, EditorStore } from "./components/EditorProvider";
import { setWorkers } from "./util/setWorkers";

export { EditorProvider, useEditorContext, setWorkers, EditorStore };
export default Editor;

/** Monaco Module **/
import type * as monaco from "monaco-editor/esm/vs/editor/editor.api";
export { monaco };
export type Monaco = typeof monaco;
