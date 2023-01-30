import * as monacoEditor from "monaco-editor-core";
import {
  languageExtensionPoint,
  languageID,
  monarchLanguage,
} from "@/thanosql/config";
import CompletionItemKind = monacoEditor.languages.CompletionItemKind;
import { WorkerManager } from "@/thanosql/WorkerManager";
import { ThanosWorker } from "@/thanosql/ThanosWorker";
import DiagnosticsAdapter from "@/thanosql/DiagnosticsAdapter";
import "@/thanosql/thanos.worker";

export function setupLanguage(monaco: any = monacoEditor) {
  // (window as any).MonacoEnvironment = {
  //   getWorkerUrl: function (_moduleId, label) {
  //     if (label === "thanosql") {
  //       return "node_modules/@smartmind-team/thanosql-editor/lib/es/thanosql/thanos.worker.js";
  //     }
  //     return "node_modules/monaco-editor-core/min/vs/base/worker/workerMain.js";
  //   },
  // };

  monaco.languages.register(languageExtensionPoint);
  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
    const client = new WorkerManager();
    const worker: WorkerAccessor = (
      ...uris: monacoEditor.Uri[]
    ): Promise<ThanosWorker> => {
      return client.getLanguageServiceWorker(...uris);
    };
    //Call the errors provider
    new DiagnosticsAdapter(worker);
  });

  // CompletionItemProvider Setting
  monaco.languages.registerCompletionItemProvider(languageID, {
    provideCompletionItems: (model, position) => {
      const suggestions = [
        ...monarchLanguage.keywords.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Keyword,
          insertText: k,
        })),
        ...monarchLanguage.operators.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Operator,
          insertText: k,
        })),
        ...monarchLanguage.builtinFunctions.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Function,
          insertText: k,
        })),
      ];
      return { suggestions };
    },
  });

  monaco.editor.defineTheme("thanosql-light", {
    base: "vs",
    inherit: true,
    rules: [
      {
        token: "keyword",
        foreground: "#604bcc",
      },
      {
        token: "operator",
        foreground: "#457BD9",
      },
      {
        token: "operator.thanosql",
        fontStyle: "bold",
      },
      {
        token: "string",
        foreground: "#8C8B92",
      },
    ],
    colors: {
      "editor.foreground": "#000000",
    },
  });
}

export type WorkerAccessor = (
  ...uris: monacoEditor.Uri[]
) => Promise<ThanosWorker>;
