import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import defaultWorker from "monaco-editor-core/esm/vs/editor/editor.worker?worker";
import thanosWorker from "../../lib/esm/thanosql/thanos.worker?worker";

(self as any).MonacoEnvironment = {
  getWorker: function (_: any, label: string) {
    if (label === "thanosql") {
      return new thanosWorker();
    }
    return new defaultWorker();
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
