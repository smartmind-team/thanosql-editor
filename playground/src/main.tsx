import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EditorProvider } from "@smartmind-team/thanosql-editor";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <EditorProvider>
      <App />
    </EditorProvider>
  </StrictMode>
);
