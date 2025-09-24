import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("Mounting React app…"); // diagnostic – safe to keep

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
