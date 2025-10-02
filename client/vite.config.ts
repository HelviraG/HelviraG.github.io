import react from "@vitejs/plugin-react-refresh";
import path from "path";
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
    root:  path.resolve(__dirname),
    build: {
      outDir: "dist",
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  }
});
