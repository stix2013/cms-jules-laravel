import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { L as Layout } from "./Layout-BPNmPupJ.js";
import "react";
const Home = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6", children: "Welcome to the Home Page!" }),
    /* @__PURE__ */ jsx("p", { children: "This is an Inertia-powered React component." })
  ] });
};
Home.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: "Home" });
export {
  Home as default
};
