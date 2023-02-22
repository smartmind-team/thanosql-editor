import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";
import nodePolyfills from "rollup-plugin-node-polyfills";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-import-css";

const external = [
  "react",
  "react-dom",
  "monaco-editor-core",
  /\.svg$/,
  /\.css$/,
];
const extensions = [".js", ".jsx", ".ts", ".tsx", ".svg", ".css"];
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
  // url(),
  // svgr(),
  typescript({
    typescript: ttypescript,
    tsconfig: "tsconfig.json",
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
      dir: "lib/cjs/",
      format: "cjs",
      exports: "named",
      preserveModules: true,
    },
    plugins: [
      ...commonPlugins,
      copy({
        targets: [
          { src: "src/assets", dest: "lib/cjs" },
          { src: "src/index.css", dest: "lib/cjs" },
        ],
      }),
    ],
    context: "window",
  },
  {
    cache: false,
    input: "src/index.ts",
    external,
    output: {
      dir: "lib/esm/",
      format: "es",
      preserveModules: true,
    },
    plugins: [
      ...commonPlugins,
      copy({
        targets: [
          { src: "src/assets", dest: "lib/esm" },
          { src: "src/index.css", dest: "lib/esm" },
        ],
      }),
    ],
    context: "window",
  },
];
