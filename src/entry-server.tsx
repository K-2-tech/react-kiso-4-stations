/*
import { renderToString } from "react-dom/server";

import App from "./app";

export const render = () => {
  return renderToString(<App />);
};
*/
import { renderToString } from "react-dom/server";
import * as React from "react";
import App from "./app";

export const render = async (
  url: string,
  context: any
): Promise<{ html: string }> => {
  const app = <App />;
  const html = renderToString(app);
  return { html };
};
