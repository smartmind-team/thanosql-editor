import { setupLanguage } from "@/thanosql/setup";
import * as monaco from "monaco-editor-core";

export const isLanguageExist = (languageID: string) => !!monaco.editor.getModels().find(model => model.id === languageID);

export const createModel = (modelOptions?: CreateModelOptions) => {
  return monaco.editor.createModel(modelOptions?.value ?? "", modelOptions?.language ?? "thanosql");
};

export const createEditorState = (states?: monaco.editor.ICodeEditorViewState): monaco.editor.ICodeEditorViewState => {
  const { cursorState = null, viewState = null, contributionsState = null } = states ?? {};
  return {
    cursorState: cursorState ?? [
      {
        inSelectionMode: false,
        position: { column: 1, lineNumber: 1 },
        selectionStart: { column: 1, lineNumber: 1 },
      },
    ],
    viewState: {
      firstPosition: { column: 1, lineNumber: 1 },
      firstPositionDeltaTop: 0,
      scrollLeft: 0,
      ...viewState,
    },
    contributionsState,
  };
};

if (!isLanguageExist("thanosql")) setupLanguage();

export interface CreateModelOptions {
  value?: string;
  language?: string;
}
