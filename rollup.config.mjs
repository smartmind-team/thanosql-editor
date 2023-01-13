import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";
import nodePolyfills from "rollup-plugin-node-polyfills";

const external = ["react"];
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const defaultNodeResolveConfig = {
  extensions,
  browser: true,
  moduleDirectories: ["node_modules"],
  dedeupe: ["antlr4ts"],
};
const nodeResolvePlugin = nodeResolve(defaultNodeResolveConfig);

const commonPlugins = [
  nodeResolvePlugin,
  babel({
    presets: ["@babel/preset-env"],
    babelHelpers: "bundled",
  }),
  commonjs(),
  typescript({
    typescript: ttypescript,
    tsconfig: "tsconfig.json",
  }),
  PeerDepsExternalPlugin(),
  nodePolyfills(),
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
  },
  {
    input: "src/index.ts",
    external,
    output: {
      name: "thanosql-editor",
      exports: "named",
      file: "lib/umd/thanosql-editor.js",
      format: "umd",
      globals: {
        react: "React",
      },
    },
    plugins: commonPlugins,
  },
];
