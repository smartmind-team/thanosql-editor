import "./index.css";
import Editor from "./components/Editor";
import EditorProvider, { useEditorContext } from "./components/EditorProvider";
import { setWorkers } from "./util/setWorkers";

export { EditorProvider, useEditorContext, setWorkers };
export default Editor;
