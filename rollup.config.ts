import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import typescript2 from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
// import dts from 'rollup-plugin-dts'

const extensions = [".ts", ".js", ".tsx"];
const globals = {
  vue: "Vue",
};
export default [
  {
    input: "packages/index.ts",
    output: [
      {
        name: "HayUI",
        file: pkg.main,
        format: "umd",
        globals,
      },
      {
        file: pkg.module,
        format: "es",
      },
      {
        name: "HayUI",
        file: pkg.unpkg,
        format: "umd",
        plugins: [terser()],
        globals,
      },
    ],
    plugins: [
      external(),
      scss({
        output: "dist/index.min.css",
      }),
      typescript({
        lib: ["es5", "es6", "dom"],
        target: "es5",
        sourceMap: false,
        tsconfig: "./tsconfig.json",
      }),
      // typescript2({
      //   rollupCommonJSResolveHack: true,
      //   clean: true
      // }),
      babel({ babelHelpers: "bundled", extensions }),
      resolve(),
      commonjs({ extensions }),
    ],
  },
  // {
  //   input: 'src/index.ts',
  //   output: [{ file: "dist/index.d.ts", format: "es" }],
  //   plugins: [dts()]
  // }
];
