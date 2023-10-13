import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EditorProvider, EditorStore } from "@smartmind-team/thanosql-editor";
import { RecoilRoot } from "recoil";
import { defaultTab } from "./assets/config";

// const store = new EditorStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <EditorProvider>
        <Suspense fallback={<>suspense fallback</>}>
          <App />
        </Suspense>
      </EditorProvider>
    </RecoilRoot>
  </StrictMode>,
);
