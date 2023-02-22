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
        ...monarchLanguage.thanosqlKeywords.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Keyword,
          insertText: k,
        })),
        ...monarchLanguage.thanosqlOperators.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Operator,
          insertText: k,
        })),
        ...monarchLanguage.pgKeywords.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Function,
          insertText: k,
        })),
        ...monarchLanguage.pgOperators.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Function,
          insertText: k,
        })),
        ...monarchLanguage.pgBuiltinFunctions.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Function,
          insertText: k,
        })),
        ...monarchLanguage.pgBuiltinVariables.map((k: string) => ({
          label: k,
          kind: CompletionItemKind.Function,
          insertText: k,
        })),
      ];
      return { suggestions };
    },
  });

  //   monaco.editor.defineTheme('myCustomTheme', {
  //     base: 'vs', // can also be vs-dark or hc-black
  //     inherit: true, // can also be false to completely replace the builtin rules
  //     rules: [
  //         { token: 'thanosql-keyword', foreground: '#604BCC', fontStyle: 'bold'},
  //         { token: 'thanosql-operator', foreground: '#B05A9F', fontStyle: 'bold'},
  //         { token: 'pg-keyword', foreground: '#604BCC'},
  //         { token: 'pg-operator', foreground: '#B05A9F'},
  //         {token : 'pg-predefined', foreground: '#42988F'}
  //     ],
  //     colors: {
  //         'editor.foreground': '#000000',
  //     }
  // });

  // keyword - #604BCC
  // operator - #B05A9F
  // builtin function - #42988F
  monaco.editor.defineTheme("thanosql-light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "thanosql-keyword", foreground: "#604BCC", fontStyle: "bold" },
      { token: "thanosql-operator", foreground: "#B05A9F", fontStyle: "bold" },
      { token: "pg-keyword", foreground: "#604BCC" },
      { token: "pg-operator", foreground: "#B05A9F" },
      { token: "pg-predefined", foreground: "#42988F" },
      { token: "operator", foreground: "#B05A9F" },
    ],
    colors: {
      "editor.foreground": "#000000",
      "editor.lineHighlightBackground": "#00000000",
      "editor.lineHighlightBorder": "#00000000",
    },
  });
}

export type WorkerAccessor = (
  ...uris: monacoEditor.Uri[]
) => Promise<ThanosWorker>;
