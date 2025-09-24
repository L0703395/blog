import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo is "blog" -> base must be "/blog/"
export default defineConfig({
  plugins: [react()],
  base: "/blog/",
});
