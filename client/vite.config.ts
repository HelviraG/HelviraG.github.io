import react from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    fs: {
      allow: ["..", "src", ".", "../server"],
    },
  },
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
