import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Link } from "@inertiajs/react";
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-200 text-center p-4 mt-auto", children: /* @__PURE__ */ jsx("p", { children: "© 2024 My Inertia App. All rights reserved." }) });
};
function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "bg-gray-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-3 flex space-x-4", children: [
    /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium", children: "Home" }),
    /* @__PURE__ */ jsx(Link, { href: "/about", className: "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium", children: "About" }),
    /* @__PURE__ */ jsx(Link, { href: "/products", className: "hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium", children: "Products" })
  ] }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { id: "persistent-layout", className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "My Inertia App" }) }) }),
    /* @__PURE__ */ jsx(Navbar, {}),
    " // Use the new component",
    /* @__PURE__ */ jsx("main", { className: "container mx-auto p-6", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Layout as L
};
