import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootEl = document.getElementById("root")!;
const banner = document.getElementById("preload-banner");

console.log("[blog] Mounting React app…");
try {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  if (banner) banner.remove(); // hide diagnostic banner on success
  (window as any).__BLOG_OK__ = true; // quick test in console
  console.log("[blog] App mounted ✔");
} catch (e) {
  console.error("[blog] Mount failed:", e);
}
