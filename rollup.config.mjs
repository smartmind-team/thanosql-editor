import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";
import nodePolyfills from "rollup-plugin-node-polyfills";

const external = ["react", "react-dom", "monaco-editor-core"];
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const defaultNodeResolveConfig = {
  exportsCondition: ["node"],
  extensions,
  browser: true,
  moduleDirectories: ["node_modules"],
  dedeupe: ["antlr4ts", "react", "react-dom", "monaco-editor-core"],
  preferBuiltins: false,
};
const nodeResolvePlugin = nodeResolve(defaultNodeResolveConfig);

const commonPlugins = [
  PeerDepsExternalPlugin(),
  nodeResolvePlugin,
  nodePolyfills(),
  babel({
    // presets: ["@babel/preset-env", "react", "antlr4ts"],
    include: ["src/**/*/"],
    exclude: /node_modules/,
    babelHelpers: "runtime",
    extensions,
  }),
  commonjs({
    include: /node_modules/,
  }),
  typescript({
    typescript: ttypescript,
    tsconfig: "tsconfig.json",
  }),
];

process.env.BABEL_ENV = "production";

export default [
  {
    input: "src/index.ts",
    external,
    output: {
      dir: "lib/cjs/",
      format: "cjs",
      exports: "named",
      preserveModules: true,
    },
    plugins: commonPlugins,
    context: "window",
  },
  {
    input: "src/index.ts",
    external,
    output: {
      dir: "lib/es/",
      format: "es",
      preserveModules: true,
    },
    plugins: commonPlugins,
    context: "window",
  },
  // {
  //   input: "src/thanosql/thanos.worker.ts",
  //   external,
  //   output: {
  //     dir: "lib/es/",
  //     format: "es",
  //     preserveModules: true,
  //   },
  //   plugins: commonPlugins,
  //   context: "window",
  // },
  // {
  //   input: "src/thanosql/thanos.worker.ts",
  //   external,

  //   output: {
  //     name: "thanos.worker",
  //     exports: "auto",
  //     file: "lib/thanosql.worker.js",
  //     format: "umd",
  //     globals: {
  //       react: "React",
  //       "monaco-editor-core/esm/vs/editor/editor.worker": "worker",
  //       "antlr4ts/atn/ATN": "ATN",
  //       "antlr4ts/atn/ATNDeserializer": "ATNDeserializer",
  //       "antlr4ts/FailedPredicateException": "FailedPredicateException",
  //       "antlr4ts/NoViableAltException": "NoViableAltException",
  //       "antlr4ts/Parser": "Parser",
  //       "antlr4ts/ParserRuleContext": "ParserRuleContext",
  //       "antlr4ts/atn/ParserATNSimulator": "ParserATNSimulator",
  //       "antlr4ts/RecognitionException": "RecognitionException",
  //       "antlr4ts/VocabularyImpl": "VocabularyImpl",
  //       "antlr4ts/misc/Utils": "Utils",
  //       "antlr4ts/Lexer": "Lexer",
  //       "antlr4ts/atn/LexerATNSimulator": "LexerATNSimulator",
  //       antlr4ts: "antlr4ts",
  //     },
  //   },
  //   plugins: commonPlugins,
  //   context: "window",
  // },
];
