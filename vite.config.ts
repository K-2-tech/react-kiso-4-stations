/*
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "./",
});
*/
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/react-kiso-4-stations/", // GitHubのリポジトリ名を指定
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 9000,
  },
});
