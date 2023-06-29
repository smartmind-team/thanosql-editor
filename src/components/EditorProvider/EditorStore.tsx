import * as monaco from "monaco-editor-core";
import { v4 } from "uuid";

class EditorStore {
  sessionID: string;
  #store: Map<string, EditorDefaultStore & Record<string, unknown>>;

  constructor(sessionID = v4(), store = new Map<string, EditorDefaultStore & Record<string, unknown>>()) {
    this.sessionID = sessionID;
    this.#store = store;
  }

  setSessionID = (sessionID: string) => {
    this.sessionID = sessionID;
  };

  getSessionState = (sessionID = this.sessionID) => {
    return this.#store.get(sessionID);
  };

  setTabSession = (sessionID: string, newSessionStore?: CreateSessionOptions) => {
    const model = monaco.editor.createModel(newSessionStore?.value ?? "", newSessionStore?.language ?? "thanosql");
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
  };

  createTabSession = (sessionID: string, options?: CreateSessionOptions) => {
    if (!this.#store.has(sessionID)) {
      this.setTabSession(sessionID, options);
    }
    return this.#store.get(sessionID);
  };

  changeTabSession = (editor: monaco.editor.IStandaloneCodeEditor, desiredTabSessionID: string, options?: CreateSessionOptions) => {
    this.saveTabSession(editor);
    this.setSessionID(desiredTabSessionID);

    // If the desired TabSessionID does not exist, create new one.
    if (!this.#store.has(desiredTabSessionID)) this.createTabSession(desiredTabSessionID, options);
    this.refreshTabSession(editor, desiredTabSessionID);
  };

  removeTabSession = (sessionID: string) => {
    this.#store.delete(sessionID);
    return this.#store.has(sessionID);
  };

  saveTabSession = (editor: monaco.editor.IStandaloneCodeEditor, sessionID = this.sessionID) => {
    const currentState = editor.saveViewState();
    if (this.#store.has(sessionID)) this.#store.set(sessionID, { ...this.#store.get(sessionID), state: currentState });
  };

  refreshTabSession = (editor: monaco.editor.IStandaloneCodeEditor, sessionID = this.sessionID) => {
    const { model, state } = this.#store.get(sessionID);
    editor.setModel(model);
    editor.restoreViewState(state);
    editor.focus();
    if (state.viewState.firstPosition.lineNumber === 1) editor.setScrollTop(0);
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
