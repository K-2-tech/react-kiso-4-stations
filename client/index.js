import React from "react";
import ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";
import App from "../src/App.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, React.createElement(App));
}
