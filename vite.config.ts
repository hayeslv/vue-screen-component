import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./packages/index.ts",
      name: "HayUI",
      fileName: "screen-comp",
    },
  },
  resolve: {
    alias: {
      "~": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    VueJsx(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        /* 引入var.scss全局预定义变量，多个：'@import "xxx";@import "xxx' */
        additionalData: "@import '~/style/global.scss';",
      },
    },
  },
});
