# thanosql-editor
Library for using **Monaco Editor for ThanoSQL** in React.

## Requirements
Node ^v16.17.0(latest)

## Development Setting

```shell
git clone https://github.com/smartmind-team/thanosql-editor.git
cd thanosql-editor
npm ci
npm prepare # husky install

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
2. `npm run antlr4` -> It will make a new version of language parser as TypeScript in `src/ANTLR/`
> **These Antlr files, created with TypeScript, are used in files inside 'src/thanosql-service'.**

### [part 2] Monaco settings for language(ThanoSQL).
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
