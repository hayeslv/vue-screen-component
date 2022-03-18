import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  resolve: {
    alias: {
      "~": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: true,
    }),
    Components({
      dts: true,
    }),
  ],
});
