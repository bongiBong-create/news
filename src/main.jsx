import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app/styles/global.css";

import App from "./app";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);