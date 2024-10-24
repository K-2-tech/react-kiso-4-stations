/*
import { hydrateRoot } from "react-dom/client";

import App from "./app";

hydrateRoot(document.getElementById("app"), <App />);
*/
import { hydrateRoot } from "react-dom/client";
import * as React from "react";
import App from "./app";
const container = document.getElementById("app");
hydrateRoot(container, <App />);
