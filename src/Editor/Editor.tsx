import * as React from "react";
import * as monaco from "monaco-editor-core";
import { setupLanguage } from "@/thanosql/setup";
import parse from "@/thanosql-service/parser";
export interface IEditorProps {
  language: string;
}

const Editor: React.FC<IEditorProps> = (props: IEditorProps) => {
  let divNode;
  const assignRef = React.useCallback((node) => {
    // On mount get the ref of the div and assign it the divNode
    divNode = node;
  }, []);

  React.useEffect(() => {
    if (divNode) {
      setupLanguage();
      monaco.editor.create(divNode, {
        language: props.language,
        minimap: { enabled: true },
        autoIndent: "full",
        theme: "thanosql-light",
        mouseWheelZoom: true,
        fontSize: 25,
        value: `PRINT AUDIO\nSELECT audio_path\nFROM korean_voice\nLIMIT 3`,
      });
    }
  }, [assignRef]);

  return <div ref={assignRef} className="editor-container"></div>;
};

export default Editor;
