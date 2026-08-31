import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import seo from "./vite-plugins/seo.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
