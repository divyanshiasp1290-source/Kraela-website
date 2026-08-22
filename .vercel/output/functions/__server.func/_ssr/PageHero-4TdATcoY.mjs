import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./Section-Btj7XwNG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-4TdATcoY.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-brand-green text-brand-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-gold/15 blur-3xl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x relative py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-brand-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl leading-[1.05] md:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-brand-ivory/70 md:text-lg",
						children: intro
					})
				]
			})
		})]
	});
}
//#endregion
export { PageHero as t };
