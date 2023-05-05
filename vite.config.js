import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // basicSsl(),
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
