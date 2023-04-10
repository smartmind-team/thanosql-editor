# thanosql-editor
[<img src="https://img.shields.io/npm/v/@smartmind-team/thanosql-editor/latest"/>](https://www.npmjs.com/package/@smartmind-team/thanosql-editor) [<img src="https://img.shields.io/npm/v/@smartmind-team/thanosql-editor/alpha" />](https://www.npmjs.com/package/@smartmind-team/thanosql-editor) <img src="https://img.shields.io/npm/dm/@smartmind-team/thanosql-editor" />

Library for **monaco editor with ThanoSQL** in react.

## Introduction
The Monaco Editor is the fully featured code editor from VS Code. Check out the [VS Code docs](https://code.visualstudio.com/docs/editor/editingevolved) to see some of the supported features. Please check more information about Monaco Editor on this [official docs](https://microsoft.github.io/monaco-editor/)

`thanosql-editor` has dependencies on [monaco-editor-core](https://github.com/opensumi/monaco-editor-core) package. It serves esm as well as cjs, and this component is available in both module environments. This project includes antlr files for syntax verification and a Monaco setup files for using language **ThanoSQL** (worker, diagnotics, monarch setting file).

## System Requirement
- node.js >= v16.17.0
- npm >= v8

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
```shell
cd playground
npm i
npm run dev # vite server will be run.
```

## Contribution Guide
### [part 1] Antlr setting
1. Update .antlr/*.g4 files.
2. Convert .g4 file to JavaScirpt and put in `src/ANTLR/`. Please look up antlr4 javascript [guide](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md#how-to-create-a-javascript-lexer-or-parser)
> **These Antlr files, created with TypeScript, are used in files inside 'src/thanosql-service'.**

### [part 2] Monaco setting for language(ThanoSQL).
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
