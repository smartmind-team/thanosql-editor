# thanosql-editor

[<img src="https://img.shields.io/npm/v/@smartmind-team/thanosql-editor/latest"/>](https://www.npmjs.com/package/@smartmind-team/thanosql-editor) [<img src="https://img.shields.io/npm/v/@smartmind-team/thanosql-editor/alpha" />](https://www.npmjs.com/package/@smartmind-team/thanosql-editor) <img src="https://img.shields.io/npm/dm/@smartmind-team/thanosql-editor" />

A react library for [monaco-editor](https://microsoft.github.io/monaco-editor/) supporting ThanoSQL.

![image](https://user-images.githubusercontent.com/31684481/231061622-8efd38aa-9c1b-4180-bc84-62fec60803ba.png)

## Introduction

ThanoSQL Editor is a powerful and versatile code editor designed specifically for working with ThanoSQL. Built using the [monaco-editor](https://microsoft.github.io/monaco-editor/) framework, ThanoSQL Editor provides a seamless and intuitive user experience for writing, editing, and executing ThanoSQL queries.

ThanoSQL Editor provides advanced code editing capabilities, including syntax highlighting, autocompletion, and error checking, to ensure clean and efficient query writing.

### What is monaco-editor ?

The monaco-editor is the fully featured code editor from VS Code. Check out the [VS Code docs](https://code.visualstudio.com/docs/editor/editingevolved) to see some of the supported features.

## Installation

### System Requirement

- node.js >= v16.17.0
- npm >= v8

`thanosql-editor` has dependencies on [monaco-editor-core](https://github.com/opensumi/monaco-editor-core) package.
| package | version |
| -- | -- |
| monaco-editor-core | ^0.38.0 |

```shell
npm install @smartmind-team/thanosql-editor@latest
```

## Usage

It serves esm as well as cjs, and this component is available in both module environments.

> [!WARNING]  
> **thanos.worker.js is not working yet**, so you can see the error about workerPath.

1. At first, you must set EditorProvider as parent component about Editor Component.

```ts
// main.tsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EditorProvider, EditorStore } from "@smartmind-team/thanosql-editor";

const EditorStoreClient = new EditorStore();

// To set defaultTab on EditorProvider initialization:
import { defaultTab } from "./assets/config.js";
const editorSessionStore = new EditorSessionStore();
editorSessionStore.setTabSession(defaultTab.id, { model: createModel({ value: "-- default session!", language: "thanosql" }), state: null });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    // The store will be automatically setted. Use store property only when you want to specify more than one session setting on EditorProvider
    initialization."
    <EditorProvider store={editorSessionStore}>
      <App />
    </EditorProvider>
  </StrictMode>,
);
```

2. Then, you can use Editor Component under Provider.

```ts
// App.tsx
import Editor from "@smartmind-team/thanosql-editor";
import { useEditorContext } from "@smartmind-team/thanosql-editor";

function App() {
  const { getEditorModule } = useEditorContext();
  const { changeTabSession, setIsQueryStarting, isEditorLoading, getEditor, getValue } = getEditorModule("example")! ?? {};
  // or
  // const modules = getEditorModule("example");
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
      }}>
      <div style={{ fontSize: "1rem", fontWeight: 900 }}>Editor Example</div>
      <div style={{ flex: 2 }}>
        <Editor
          editorId="example"
          language="thanosql"
          launcherProps={{
            onStartQuery: handleStart,
            onStopQuery: () => console.log("stop"),
            /** You can customize the launcher components for the remaining space in the launcher. **/
            children: (
              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
                <>test action</>
              </div>
            ),
          }}
          /**
            If you set defaultSessionId, then editor creates and stores editor session(model, state) in EditorStore so that you can access the session with this sessionId.
            defaultSession is used when the Editor component has mounted. so if you changes some value in this session and then remount the Editor component (without reloading the window), Editor will not override defaultValue but restore session value.
          **/
          defaultSessionId="example"
          defaultValue={"-- default value"}
        />
      </div>
    </div>
  );
}

export default App;
```

#### 🍴Editor Props

The Editor component also has HTMLAttributes that are applied to the Editor container div element.

| name             | type                                                                                                                                 | default    | description                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| editorId         | string                                                                                                                               |            | editorId for discriminating editor component                                                                  |
| language         | string                                                                                                                               | "thanosql" | language Id                                                                                                   |
| defaultSessionId | string                                                                                                                               | undefined  | editor default session Id                                                                                     |
| width            | string or number                                                                                                                     | undefined  | editor width                                                                                                  |
| height           | string or number                                                                                                                     | undefined  | editor height                                                                                                 |
| options          | monaco.editor.IStandaloneEditorConstructionOptions                                                                                   | undefined  | https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html |
| launcherProps    | {onStartQuery?: EditorLauncherEventHandler; onStopQuery?: EditorLauncherEventHandler; editor?: monaco.editor.IStandaloneCodeEditor;} | undefined  | launcher component props                                                                                      |
| launcherDisabled | boolean                                                                                                                              | false      | when you set true, launcher is deactivated                                                                    |

## Development Setting

```shell
git clone https://github.com/smartmind-team/thanosql-editor.git
cd thanosql-editor
npm ci
npm run prepare # husky install

# dev build
npm run dev
# build
npm run build
```

## Test for Library (Playground)

> **Warning**
>
> 1. Before running the code below, you must run the **`development setting`** part first.
> 2. When you change lib code(and run `npm run build` in the root directory), then you must restart(npm run dev) playground for the library change to take effect.

```shell
cd playground
npm i
npm run dev # vite server will be run.
```

## Contribution Guide

### [part 1] Antlr setting

1. Update .antlr/\*.g4 files.
2. Convert .g4 file to JavaScirpt and put in `src/ANTLR/`. Please look up antlr4 javascript [guide](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md#how-to-create-a-javascript-lexer-or-parser)
   > **These Antlr files, created with TypeScript, are used in files inside 'src/thanosql-service'.**

### [part 2] Monaco setting for ThanoSQL

edit the files in the following directory.

```
src/thanosql
├── DiagnosticsAdapter.ts # for operating Monaco Diagnostic
├── ThanosWorker.ts # ThanoSQL worker
├── WorkerManager.ts # ThanoSQL worker manager (make proxy for connecting web worker)
├── config.ts # Monarch config, language config
├── setup.ts # add or edit monaco setting in function named setupLanguage
└── thanos.worker.ts # web worker script
```
