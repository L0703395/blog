import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: Pages serves under /blog/ (repo name). If you rename the repo, update this.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/blog/" : "/"
}));
