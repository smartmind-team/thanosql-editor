import * as monaco from "monaco-editor-core";
import { createEditorState, createModel, type CreateModelOptions } from "./util/monaco-util";

export class EditorSessionStore {
  key: string; // unique key for distinguishing store.
  #store: Map<string, EditorSession>;

  constructor(store = new Map<string, EditorSession & Record<string, unknown>>()) {
    this.#store = store;
  }

  getSessionState = (sessionID: string) => {
    return sessionID && this.#store.get(sessionID);
  };

  setTabSession = (sessionID: string, { model, state }: EditorSession) => {
    if (!sessionID || !model) return;
    this.#store.set(sessionID, { model, state });
  };

  createTabSession = (sessionID: string, options?: CreateModelOptions) => {
    if (!sessionID) return;
    if (!this.#store.has(sessionID)) {
      this.setTabSession(sessionID, { model: createModel(options), state: createEditorState() });
    }
    return this.#store.get(sessionID);
  };

  changeTabSession = (
    editor: monaco.editor.IStandaloneCodeEditor,
    currentTabSessionId: string,
    nextTabSessionId: string,
    options?: CreateModelOptions,
  ) => {
    if (!currentTabSessionId || !nextTabSessionId) return;
    this.saveTabSession(editor, currentTabSessionId);

    // If the desired TabSessionID does not exist, create new one.
    if (!this.#store.has(nextTabSessionId)) this.createTabSession(nextTabSessionId, options);
    this.refreshTabSession(editor, nextTabSessionId);
  };

  removeTabSession = (sessionID: string) => {
    if (!sessionID) return;
    this.#store.delete(sessionID);
    return this.#store.has(sessionID);
  };

  saveTabSession = (editor: monaco.editor.IStandaloneCodeEditor, sessionID: string) => {
    if (!sessionID) return;
    const currentState = editor.saveViewState();
    if (this.#store.has(sessionID)) this.#store.set(sessionID, { ...this.#store.get(sessionID), state: currentState });
  };

  refreshTabSession = (editor: monaco.editor.IStandaloneCodeEditor, sessionID: string) => {
    if (!sessionID) return;
    const { model, state } = this.#store.get(sessionID);
    editor.setModel(model);
    editor.restoreViewState(state);
    editor.focus();
    if (state.viewState.firstPosition.lineNumber === 1) editor.setScrollTop(0);
  };
}

export interface EditorSession {
  model: monaco.editor.ITextModel;
  state: monaco.editor.ICodeEditorViewState | null;
}
