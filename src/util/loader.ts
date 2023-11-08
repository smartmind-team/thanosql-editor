import { languageWorkerPath as thanosqlWorkerPath, languageID as thanosqlID } from "@/thanosql/config";

const config = {
  [thanosqlID]: {
    path: thanosqlWorkerPath,
  },
};

export const initMonacoWorker = () => {
  ["thanosql", "default"].map(label => pipe(appendScript, getMonacoWorkerScript)({ label, path: config?.[label]?.path }));
};

export const loadScript = (src: string) => {
  const script: HTMLScriptElement = document.createElement("script");
  script.src = src;
  return script;
};

export const appendScript = (script: HTMLScriptElement) => document.body.appendChild(script);

const getMonacoWorkerScript = ({ onLoad = () => console.log("load"), label = "default", path }) => {
  const script = loadScript(`https://cdn.jsdelivr.net/npm/${path ?? "monaco-editor@0.34.1/esm/vs/editor/editor.worker.js"}`);
  script.onload = () => onLoad();
  script.onerror = () => {
    console.error("fail to load script.");
  };
  return script;
};

const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduceRight((y, f) => f(y), x);
