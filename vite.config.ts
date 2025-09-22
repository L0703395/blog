import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: Set base to your repo name so assets resolve on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: "/blog/"
});
