import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import replaceAllInserter from "string.prototype.replaceall";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import webfontDownload from "vite-plugin-webfont-dl";

replaceAllInserter.shim();
const base = process.env.NODE_ENV === "development" ? "/" : "/crypto-details/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createHtmlPlugin({ minify: true }),
    VueI18nPlugin({}),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap",
    ]),
  ],
  base,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
