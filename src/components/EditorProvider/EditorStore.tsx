import * as monaco from 'monaco-editor-core';
import { v4 } from 'uuid';

class EditorStore {
  sessionID;
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

  createTabSession = (sessionID: string, options?: { value?: string; language?: string }) => {
    if (!this.#store.has(sessionID)) {
      const model = monaco.editor.createModel(options?.value ?? '', options?.language ?? 'thanosql');
      this.#store.set(sessionID, { model, state: null });
    }
    return this.#store.get(sessionID);
  };

  changeTabSession = (desiredTabSessionID: string) => {
    this.saveTabSession();
    this.setSessionID(desiredTabSessionID);

    // If the desired TabSessionID does not exist, create new one.
    if (!this.#store.has(desiredTabSessionID)) this.createTabSession(desiredTabSessionID);
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
