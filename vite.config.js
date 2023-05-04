import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    envCompatible.default({
      prefix: "REACT",
      mountedPath: "process.env",
    }),
  ],
  build: {
    outDir: "build",
  },
});
