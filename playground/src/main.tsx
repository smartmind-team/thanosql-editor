import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EditorProvider, EditorSessionStore, createEditorState, createModel } from "@smartmind-team/thanosql-editor";
import { RecoilRoot } from "recoil";

// To set defaultTab on EditorProvider initialization:
import { defaultTab } from "./assets/config";
const editorSessionStore = new EditorSessionStore();
editorSessionStore.setTabSession(defaultTab.id, { model: createModel({ value: "-- default session!", language: "thanosql" }), state: null });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <EditorProvider store={editorSessionStore}>
        <Suspense fallback={<>suspense fallback</>}>
          <App />
        </Suspense>
      </EditorProvider>
    </RecoilRoot>
  </StrictMode>,
);
