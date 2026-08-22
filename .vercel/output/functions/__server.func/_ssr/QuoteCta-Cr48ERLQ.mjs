import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuoteCta-Cr48ERLQ.js
var import_jsx_runtime = require_jsx_runtime();
function QuoteCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-brand-green text-brand-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4 text-brand-gold",
						children: "Start an enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl leading-tight md:text-5xl",
						children: "Send us your specification. We will send back a quotation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-brand-ivory/70",
						children: "Share product, quantity, packing and destination port — our export desk replies with pricing, lead time and documentation detail."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/quote",
					className: "inline-flex items-center justify-center gap-2 bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep transition-transform hover:-translate-y-0.5",
					children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "inline-flex items-center justify-center border border-brand-ivory/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:bg-brand-ivory/10",
					children: "Contact us"
				})]
			})]
		})
	});
}
//#endregion
export { QuoteCta as t };
