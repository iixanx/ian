import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";

export const BASE_URL = process.env.REACT_APP_BASE_URL!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
