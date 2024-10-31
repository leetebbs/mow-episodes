import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true, // Automatically open the browser on server start
    port: 3000,
  },
  build: {
    outDir: "dist", // Output directory for the build
  },

});
