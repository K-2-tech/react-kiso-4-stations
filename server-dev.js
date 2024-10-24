import fs from "fs";
import express from "express";
import { createServer } from "vite";

const startServer = async () => {
  const app = express();
  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      const template = await vite.transformIndexHtml(
        url,
        fs.readFileSync("index.html", "utf-8")
      );
      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
      const { html } = await render(url, {});
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      res.status(500).end(error.toString());
    }
  });

  app.listen(4173, () => {
    console.log("Server running at http://localhost:4173");
  });
};

startServer();
