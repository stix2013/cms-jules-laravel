import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
function render(page) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": () => import("./assets/About-D3wsQPkK.js"), "./Pages/Home.jsx": () => import("./assets/Home-BiuZeZcC.js"), "./Pages/Products.jsx": () => import("./assets/Products-DrME0byL.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  });
}
export {
  render as default
};
