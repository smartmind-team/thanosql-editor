import { useEffect, useState } from "react";
import { setupLanguage } from "../../lib/esm/thanosql/setup";
import Editor from "../../lib/esm";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: 800 }}>
      <Editor
        language="thanosql"
        workerPaths={{
          default: {
            url: "../node_modules/monaco-editor-core/esm/vs/editor/editor.worker.js",
            base: window.location.href,
            isModule: true,
          },
          thanosql: {
            url: "../node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql/thanos.worker.js",
            base: window.location.href,
            isModule: true,
          },
        }}
      />
    </div>
  );
}

export default App;
