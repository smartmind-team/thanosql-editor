import * as monaco from "monaco-editor-core";
import { v4 } from "uuid";

class EditorStore {
  sessionID: string;
  editor: monaco.editor.IStandaloneCodeEditor;
  #store: Map<string, EditorDefaultStore & Record<string, unknown>>;

  constructor(sessionID = v4(), editor = null, store = new Map<string, EditorDefaultStore & Record<string, unknown>>()) {
    this.sessionID = sessionID;
    this.editor = editor;
    this.#store = store;
  }

  setSessionID = (sessionID: string) => {
    this.sessionID = sessionID;
  };

  setEditor = (editor: monaco.editor.IStandaloneCodeEditor) => {
    this.editor = editor;
  };

  getSessionState = (sessionID = this.sessionID) => {
    return this.#store.get(sessionID);
  };

  createTabSession = (sessionID: string, options?: CreateSessionOptions) => {
    if (!this.#store.has(sessionID)) {
      const model = monaco.editor.createModel(options?.value ?? "", options?.language ?? "thanosql");
      const lineNumber = model.getLineCount();
      const position = { column: model.getLineMaxColumn(lineNumber), lineNumber };
      const state: monaco.editor.ICodeEditorViewState = {
        cursorState: [
          {
            inSelectionMode: false,
            position,
            selectionStart: position,
          },
        ],
        viewState: {
          firstPosition: { column: 1, lineNumber: 1 },
          firstPositionDeltaTop: 0,
          scrollLeft: 0,
        },
        contributionsState: null,
      };

      this.#store.set(sessionID, { model, state });
    }
    return this.#store.get(sessionID);
  };

  changeTabSession = (desiredTabSessionID: string, options?: CreateSessionOptions) => {
    this.saveTabSession();
    this.setSessionID(desiredTabSessionID);

    // If the desired TabSessionID does not exist, create new one.
    if (!this.#store.has(desiredTabSessionID)) this.createTabSession(desiredTabSessionID, options);
    const { model, state } = this.#store.get(desiredTabSessionID);
    this.editor.setModel(model);
    this.editor.restoreViewState(state);
    this.editor.focus();
  };

  removeTabSession = (sessionID: string) => {
    this.#store.delete(sessionID);
    return this.#store.has(sessionID);
  };

  saveTabSession = (sessionID = this.sessionID) => {
    const currentState = this.editor.saveViewState();
    if (this.#store.has(sessionID)) this.#store.set(sessionID, { ...this.#store.get(sessionID), state: currentState });
  };
}

export default EditorStore;

export interface EditorDefaultStore {
  model: monaco.editor.ITextModel;
  state: monaco.editor.ICodeEditorViewState;
}

export interface CreateSessionOptions {
  value?: string;
  language?: string;
}
