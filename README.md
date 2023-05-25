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

> **Warning**
>
> **thanos.worker.js is not working yet**, so you can see the error about workerPath.

```ts
// App.tsx
import Editor from "@smartmind-team/thanosql-editor";
import { useEditorContext } from "@smartmind-team/thanosql-editor";

function App() {
  const { isQueryStarting, editor, setQueryStarting } = useEditorContext();

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
          language="thanosql"
          workerPaths={{
            default: {
              url: "../node_modules/monaco-editor-core/esm/vs/editor/editor.worker.js",
              base: window.location.href,
              isModule: true,
            },
            thanosql: {
              url: "../node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql/thanos.worker.js",
              base: window.location.href,
              isModule: true,
            },
          }}
          onStartQuery={editor => {
            setIsQueryStarting(true);
            const queryValue = editor?.getValue();
            console.log(queryValue);
            setTimeout(() => setIsQueryStarting(false), 2000);
          }}
        />
      </div>
    </div>
  );
}

export default App;
```

```ts
// main.tsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EditorProvider, EditorStore } from "@smartmind-team/thanosql-editor";

const EditorStoreClient = new EditorStore();

// To set a custom default session ID, create your own session ID and send it to the EditorProvider's props.
const DefaultSessionID = "yourCustomSessionID";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <EditorProvider store={EditorStoreClient} sessionID={DefaultSessionID}>
      <App />
    </EditorProvider>
  </StrictMode>,
);
```

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
