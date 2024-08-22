import * as monaco from "monaco-editor-core";
import ILanguageExtensionPoint = monaco.languages.ILanguageExtensionPoint;

export const setWorkers = async (workerPaths: WorkerPaths) => {
  let url = workerPaths.default.url;
  if (!url) url = await import.meta.resolve("../thanosql/thanos.worker.js");

  (self as any).MonacoEnvironment = {
    getWorker: function (_id, label) {
      if (workerPaths?.[label]) return generateWorker(workerPaths[label]);
      return generateWorker({ ...workerPaths.default, url });
    },
  };
};

const generateWorker: GetWorkerFunc = ({ url, base = import.meta.url }) => {
  return new Worker(new URL(url, base).href, {
    type: "module",
  });
};

type GetWorkerFunc = (...params: [WorkerProperty]) => Worker;

export interface WorkerProperty {
  url?: string;
  base?: string;
}

export interface WorkerPaths {
  default: WorkerProperty;
  [languageID: ILanguageExtensionPoint["id"]]: WorkerProperty;
}
