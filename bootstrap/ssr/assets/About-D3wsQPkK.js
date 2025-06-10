import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-BPNmPupJ.js";
import "react";
const About = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "About Us" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6 text-gray-700", children: "About Us" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Welcome to our About Us page. Here you will find more information about our company." })
  ] });
};
About.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: "About Us" });
export {
  About as default
};
