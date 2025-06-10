import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
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
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": () => import("./assets/About-D3wsQPkK.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-D31SllPt.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-CyEu0ACQ.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-DmIoUarw.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-B0N5wL7I.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-CDg_qeTa.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-3DaxC1ow.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-DOCLXSKk.js"), "./Pages/Home.jsx": () => import("./assets/Home-BiuZeZcC.js"), "./Pages/Products.jsx": () => import("./assets/Products-DrME0byL.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-D8_SIpZg.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-DNZJ75vO.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-Cuzb9Qpo.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-DoH0IgF1.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-ByNhCfvu.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
