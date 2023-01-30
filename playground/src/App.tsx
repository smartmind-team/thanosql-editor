import { useEffect, useState } from "react";
// import "./App.css";
import { setupLanguage } from "../../lib/es/thanosql/setup";
// import Editor, { Monaco } from "@monaco-editor/react";
import Editor from "../../lib/es";

function App() {
  // function handleEditorWillMount(monaco: Monaco) {
  //   // setupLanguage(monaco);
  //   // monaco.languages.setLanguageConfiguration("thanosql", {
  //   //   indentationRules: {
  //   //     // ^(.*\*/)?\s*\}.*$a
  //   //     decreaseIndentPattern: /^((?!.*?\/\*).*\*\/)?\s*[\}\]\)].*$/,
  //   //     // ^.*\([^)"';]*$
  //   //     increaseIndentPattern:
  //   //       /^((?!\/\/).)*(\([^)"'`]*|\([^)"'`]*|\[[^\]"'`]*);$/,
  //   //   },
  //   // });
  // }

  return (
    <div className="App" style={{ width: "100vw", minHeight: "25%" }}>
      {/* <Editor
        height="90vh"
        defaultValue="-- some comment"
        defaultLanguage="javascript"
        language="cpp"
        theme="thanosql-light"
        beforeMount={handleEditorWillMount}
        options={{
          autoIndent: true,
          minimap: {
            enabled: false,
          },
        }}
      /> */}
      <Editor language="thanosql" />
    </div>
  );
}

export default App;
