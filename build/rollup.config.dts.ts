import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue"; // 处理vue文件
import { resolve } from "path";

const extensions = [".ts", ".js", ".tsx"];
const input = resolve(__dirname, "../packages"); // 入口文件
const output = resolve(__dirname, "../lib"); // 输出文件
const config = [
  {
    input: `${input}/index.ts`,
    output: {
      format: "es",
      file: `${output}/index.esm.js`,
    },
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: "browser",
        exposeFilename: false,
      }),
      typescript({
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
          include: ["packages/**/*"],
          exclude: ["node_modules", "examples", "mobile", "tests"],
        },
        abortOnError: false,
      }),
      babel({ babelHelpers: "bundled", extensions }),
    ],
    external: ["vue"],
  },
];
export default config;
