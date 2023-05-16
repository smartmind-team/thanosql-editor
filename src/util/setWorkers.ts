import * as monaco from "monaco-editor-core";
import ILanguageExtensionPoint = monaco.languages.ILanguageExtensionPoint;

const workerCache = new Map();

export const setWorkers = (workerPaths: WorkerPaths): void => {
  (self as any).MonacoEnvironment = {
    getWorker: function (_id, label) {
      const workerList = Object.fromEntries(
        Object.entries(workerPaths).map(([langId, property]) => {
          const key = JSON.stringify(property);
          if (!workerCache.has(key)) workerCache.set(key, generateWorker(property));
          return [langId, workerCache.get(key)];
        }),
      );
      if (workerList?.[label]) return workerList[label];
      return workerList.default;
    },
  };
};

const generateWorker: GetWorkerFunc = ({ url = "", base = window.location.href, isModule = true }) => {
  return new Worker(new URL(url, base).href, {
    type: isModule ? "module" : "classic",
  });
};

type GetWorkerFunc = (...params: [WorkerProperty]) => Worker;

export interface WorkerProperty {
  url?: string;
  base?: string;
  isModule?: boolean;
}

export interface WorkerPaths {
  default: WorkerProperty;
  [languageID: ILanguageExtensionPoint["id"]]: WorkerProperty;
}
