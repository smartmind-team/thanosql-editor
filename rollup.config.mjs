import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";
import nodePolyfills from "rollup-plugin-node-polyfills";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-import-css";

const external = ["react", "react-dom", "@emotion/react", /\.svg$/, /\.css$/];
const extensions = [".js", ".jsx", ".ts", ".tsx", ".svg", ".css"];
const defaultNodeResolveConfig = {
  exportsCondition: ["node"],
  extensions,
  browser: true,
  moduleDirectories: ["node_modules"],
  dedeupe: ["antlr4", "antlr4ng", "react", "react-dom", "monaco-editor-core"],
  resolveOnly: [/antlr4ts/],
  preferBuiltins: false,
};
const nodeResolvePlugin = nodeResolve(defaultNodeResolveConfig);

const commonPlugins = [
  typescript({
    typescript: ttypescript,
    tsconfig: "./tsconfig.json",
    tsconfigDefaults: {
      compilerOptions: {
        plugins: [{ transform: "typescript-transform-paths" }, { transform: "typescript-transform-paths", afterDeclarations: true }],
      },
    },
  }),
  PeerDepsExternalPlugin(),
  nodeResolvePlugin,
  nodePolyfills(),
  babel({
    include: ["src/**/*/"],
    exclude: /node_modules/,
    babelHelpers: "runtime",
    extensions,
  }),
  commonjs({
    include: /node_modules/,
  }),
  copy({
    targets: [{ src: "src/type.d.ts", dest: "lib/" }],
  }),
  css({ include: ["./index.css"] }),
];

process.env.BABEL_ENV = "production";

export default [
  {
    cache: false,
    input: "src/index.ts",
    external,
    output: {
      dir: "lib",
      format: "es",
      preserveModules: true,
      sourcemap: "inline",
    },
    plugins: [
      ...commonPlugins,
      copy({
        targets: [
          { src: "src/assets", dest: "lib" },
          { src: "src/index.css", dest: "lib" },
        ],
      }),
    ],
    context: "window",
  },
];
