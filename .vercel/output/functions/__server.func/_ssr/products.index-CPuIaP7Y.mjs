import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { t as PageHero } from "./PageHero-4TdATcoY.mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { t as QuoteCta } from "./QuoteCta-Cr48ERLQ.mjs";
import { t as Input } from "./input-Bpx-kHVJ.mjs";
import { s as products } from "./router-C8D0lgql.mjs";
import { t as ProductCard } from "./ProductCard-DBIXztte.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-CPuIaP7Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const normalizedSearch = searchTerm.trim().toLowerCase();
	const filteredProducts = products.filter((product) => [
		product.name,
		product.category,
		product.range,
		product.badge
	].join(" ").toLowerCase().includes(normalizedSearch));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Product portfolio",
			title: "Export grades, packed the way your market buys.",
			intro: "Each grade is quoted against written parameters and your preferred packing format. Specification sheets are issued with every quotation."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Catalogue",
				title: "Current export range",
				intro: "Additional grades and origins are added on request — tell us what you need and we will confirm availability."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-10 max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: searchTerm,
					onChange: (event) => setSearchTerm(event.target.value),
					placeholder: "Search products",
					"aria-label": "Search products",
					className: "h-12 rounded-none border-0 border-b border-input bg-transparent pl-7 pr-0 shadow-none focus-visible:border-brand-gold focus-visible:ring-0"
				})]
			}),
			filteredProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: filteredProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
				}, p.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground",
				children: "No products found. Try a different search."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCta, {})
	] });
}
//#endregion
export { ProductsPage as component };
