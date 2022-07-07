import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 配置src目录
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  // 配置前端服务地址和端口
  server: {
    host: "0.0.0.0",
    port: 8991,
    //是否开启https
    https: false,
    // 设置反向代理，跨域
    proxy: {
      "/api": {
        target: "http://x.abczzz.cn",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
});
