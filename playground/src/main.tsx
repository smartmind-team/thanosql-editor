import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

(self as any).MonacoEnvironment = {
  getWorker: function (_: any, label: string) {
    if (label === "thanosql") {
      console.log(
        new URL(
          "./node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql/thanos.worker.js",
          window.location.href
        ).href
      );
      return new Worker(
        new URL(
          "./node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql/thanos.worker.js",
          window.location.href
        ).href,
        { type: "module" }
      );
    }
    return new Worker(
      new URL(
        "./node_modules/monaco-editor-core/esm/vs/editor/editor.worker.js",
        window.location.href
      ).href,
      { type: "module" }
    );
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
