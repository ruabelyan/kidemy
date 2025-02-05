import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/sass/resource.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      routes: `${path.resolve(__dirname, "./src/routes/")}`,
      services: `${path.resolve(__dirname, "./src/services/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      rtk: `${path.resolve(__dirname, "./src/rtk/")}`,
      types: `${path.resolve(__dirname, "./src/types/")}`,
      models: `${path.resolve(__dirname, "./src/models/")}`,
      "ui-components": `${path.resolve(__dirname, "src/ui-components")}`,
    },
  },
  define: {
    "process.env": {},
  },
});
