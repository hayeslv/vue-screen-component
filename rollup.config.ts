import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import typescript2 from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser";
import image from "rollup-plugin-img";
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
    // compact: false,
    plugins: [
      external(),
      image({
        output: "dist/images", // default the root
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 8192, // default 8192(8k)
        exclude: "node_modules/**",
      }),
      scss({
        output: "dist/index.min.css",
      }),
      // typescript2({
      //   rollupCommonJSResolveHack: true,
      //   clean: true
      // }),
      // , exclude: "node_modules/**"
      babel({ babelrc: true, babelHelpers: "bundled", extensions, exclude: "node_modules/**" }),
      resolve(),
      commonjs({
        extensions,
        transformMixedEsModules: true, // 指示插件是否启用混合模块转换。如果require调用应转换为混合模块中的导入，则设置为true；
      }),
      typescript({
        lib: ["es5", "es6", "dom"],
        target: "es6",
        sourceMap: false,
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  // {
  //   input: 'src/index.ts',
  //   output: [{ file: "dist/index.d.ts", format: "es" }],
  //   plugins: [dts()]
  // }
];
