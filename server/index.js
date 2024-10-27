/*
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 9000;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, "../dist")));

// メインルート
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
*/
// server/index.js
// server/index.js

// server/index.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import React from "react";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import App from "../src/App.tsx"; // .tsxの拡張子を明示的に指定

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 9000;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, "../dist")));

const REPO_NAME = "react-kiso-4-stations";

// HTMLテンプレート
const template = `
<!DOCTYPE html>
<html>
  <head>
    <title>React SSR</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/${REPO_NAME}/">
  </head>
  <body>
    <div id="root">%%CONTENT%%</div>
    <script src="client.js" defer></script>
  </body>
</html>
`;

// メインルート
app.get("/", (req, res) => {
  try {
    const jsx = renderToString(createElement(App));
    const html = template.replace("%%CONTENT%%", jsx);
    res.send(html);
  } catch (error) {
    console.error("Rendering error:", error);
    res.status(500).send("Server rendering error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
