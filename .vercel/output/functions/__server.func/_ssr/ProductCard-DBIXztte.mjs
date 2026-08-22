import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-DBIXztte.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col border border-border bg-card transition-shadow duration-500 hover:shadow-[0_24px_60px_-32px_var(--brand-green)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "block overflow-hidden bg-muted",
			"aria-label": product.name,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: `${product.name} â€” Kraela export grade`,
				width: 900,
				height: 900,
				loading: "lazy",
				className: "aspect-square w-full object-cover transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-[1.04]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
							children: [
								product.range,
								" · ",
								product.category
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-mono text-[10px] text-brand-gold",
						children: product.code
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: product.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
						children: "Specifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/quote",
						search: { product: product.slug },
						className: "inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold",
						children: ["Get quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
