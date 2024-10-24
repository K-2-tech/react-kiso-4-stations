import { jsxs, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import "react";
const App = () => {
  const profile = {
    name: "加藤貴也",
    age: 19,
    occupation: "学生",
    hobbies: ["プログラミング", "アニメ鑑賞", "鉱物収集"]
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: "自己紹介" }),
    /* @__PURE__ */ jsxs("div", { className: "profile", children: [
      /* @__PURE__ */ jsx("h2", { children: "プロフィール" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "名前: ",
        profile.name
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "年齢: ",
        profile.age
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "職業: ",
        profile.occupation
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "趣味" }),
      /* @__PURE__ */ jsx("ul", { children: profile.hobbies.map((hobby, index) => /* @__PURE__ */ jsx("li", { children: hobby }, index)) })
    ] })
  ] });
};
const render = async (url, context) => {
  const app = /* @__PURE__ */ jsx(App, {});
  const html = renderToString(app);
  return { html };
};
export {
  render
};
