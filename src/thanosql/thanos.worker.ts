import * as worker from "monaco-editor-core/esm/vs/editor/editor.worker";
import { ThanosWorker } from "@/thanosql/ThanosWorker";

self.onmessage = () => {
  worker.initialize((ctx) => {
    return new ThanosWorker(ctx);
  });
};
