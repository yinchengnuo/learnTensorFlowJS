/*
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:29
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-04-03 17:13:52
 * @Description: file content
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/learnTensorFlowJS',
  plugins: [vue(), vueJsx()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
});
