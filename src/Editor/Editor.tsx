import * as React from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage } from "@/thanosql/setup";
export interface IEditorProps {
  language: string;
}

const Editor: React.FC<IEditorProps> = (props: IEditorProps) => {
  let divNode;
  const effectCalled = React.useRef<boolean>(false);
  const assignRef = React.useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
  }, []);

  React.useEffect(() => {
    if (divNode && !effectCalled.current) {
      effectCalled.current = true;
      setupLanguage();
      monaco.editor.create(divNode, {
        language: props.language,
        minimap: { enabled: false },
        autoIndent: "full",
        theme: "thanosql-light",
        mouseWheelZoom: true,
        fontSize: 25,
        value: `PRINT AUDIO\nSELECT audio_path\nFROM korean_voice\nLIMIT 3`,
        inDiffEditor: false,
      });
    }
  }, [assignRef]);

  return (
    <div
      ref={assignRef}
      className="editor-container"
      style={{ minHeight: "90vh" }}
    ></div>
  );
};

export default Editor;
