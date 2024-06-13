import React from "react";
import ReatDom from "react-dom/client";
import App from "./App";

const root = ReatDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
