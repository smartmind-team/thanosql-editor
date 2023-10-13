import * as monaco from "monaco-editor-core";
import { v4 } from "uuid";

export class EditorStoreManager {
  public static entireStore = new Map<string, EditorStore>();
  static getAllStoreKeys = () => {
    const keys = [];
    const keyIter = this.entireStore.keys();
    let key = keyIter.next().value;
    while (key) {
      keys.push(key);
      key = keyIter.next().value;
    }
    return keys;
  };

  static getEditorStore = (key: string) => {
    return this.entireStore.get(key);
  };

  static setEditorStore = (key: string, store: EditorStore) => {
    this.entireStore.set(key, store);
  };

  static createModel = (newSessionStore?: CreateSessionOptions) => {
    const model = monaco.editor.createModel(newSessionStore?.value ?? "", newSessionStore?.language ?? "thanosql");
    return model;
  };
}
export class EditorStore {
  key: string; // unique key for distinguishing store.
  #store: Map<string, EditorDefaultStore & Record<string, unknown>>;

  constructor(store = new Map<string, EditorDefaultStore & Record<string, unknown>>(), key = v4()) {
    this.#store = store;
    this.key = key;
    EditorStoreManager.setEditorStore(key, this);
  }

  getSessionState = (sessionID: string) => {
    return this.#store.get(sessionID);
  };

  setTabSession = (sessionID: string, model: monaco.editor.ITextModel) => {
    if (!sessionID || !model) return;

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
    if (!sessionID) return;
    if (!this.#store.has(sessionID)) {
      this.setTabSession(sessionID, EditorStoreManager.createModel(options));
    }
    return this.#store.get(sessionID);
  };

  changeTabSession = (
    editor: monaco.editor.IStandaloneCodeEditor,
    currentTabSessionId: string,
    nextTabSessionId: string,
    options?: CreateSessionOptions,
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

const editorStore = new EditorStore();
export default editorStore;
export interface EditorDefaultStore {
  model: monaco.editor.ITextModel;
  state: monaco.editor.ICodeEditorViewState;
}

export interface CreateSessionOptions {
  value?: string;
  language?: string;
}
