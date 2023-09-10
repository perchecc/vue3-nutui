// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import NutUIResolver from "@nutui/nutui/dist/resolver";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动引入 NutUI 组件
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 配置全局样式变量
  css: {
    preprocessorOptions: {
      scss: {
        // 默认京东 APP 10.0主题 > @import "@nutui/nutui/dist/styles/variables.scss";
        // 京东科技主题 > @import "@nutui/nutui/dist/styles/variables-jdt.scss";
        // 京东B商城主题 > @import "@nutui/nutui/dist/styles/variables-jdb.scss";
        // 京东企业业务主题 > @import "@nutui/nutui/dist/styles/variables-jddkh.scss";
        additionalData: `@import "@nutui/nutui/dist/styles/variables-jdb.scss";`,
      },
    },
  },
});
