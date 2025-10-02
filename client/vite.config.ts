import react from "@vitejs/plugin-react-refresh";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      fs: {
        allow: ["..", "src", ".", "../server"],
      },
      proxy: {
        "/api": {  
          target: env.VITE_API_URL,
          changeOrigin: true
        }
      }
    },
    build: {
      outDir: "./build",
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  }
});
