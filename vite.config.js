import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        client: "src/entry-client.tsx",
        server: "src/entry-server.tsx",
      },
      output: {
        dir: "dist",
        format: "esm",
      },
    },
    ssr: "src/entry-server.tsx",
  },
});
