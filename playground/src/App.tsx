import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { setupLanguage } from "../../lib/es/thanosql/setup";
// import Editor, { Monaco } from "@monaco-editor/react";
import Editor from "../../lib/es";

function App() {
  // function handleEditorWillMount(monaco: Monaco) {
  //   // here is the monaco instance
  //   // do something before editor is mounted
  //   setupLanguage(monaco);
  //   monaco.languages.setLanguageConfiguration("thanosql", {
  //     indentationRules: {
  //       // ^(.*\*/)?\s*\}.*$a
  //       decreaseIndentPattern: /^((?!.*?\/\*).*\*\/)?\s*[\}\]\)].*$/,
  //       // ^.*\([^)"';]*$
  //       increaseIndentPattern:
  //         /^((?!\/\/).)*(\([^)"'`]*|\([^)"'`]*|\[[^\]"'`]*);$/,
  //     },
  //   });
  // }
  return (
    // <div className="App" style={{ width: "100vw" }}>
    //   <Editor
    //     height="90vh"
    //     defaultValue="-- some comment"
    //     language="javascirpt"
    //     theme="thanosql-light"
    //     beforeMount={handleEditorWillMount}
    //     options={{
    //       autoIndent: true,
    //       minimap: {
    //         enabled: false,
    //       },
    //     }}
    //   />
    // </div>
    <Editor language="javascript" />
  );
}

export default App;
