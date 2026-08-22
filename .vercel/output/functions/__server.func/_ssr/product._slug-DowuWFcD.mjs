import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight } from "../_libs/lucide-react.mjs";
import { s as products } from "./router-C8D0lgql.mjs";
import { t as Route$1 } from "./router-C8D0lgql2.mjs";
import { t as ProductCard } from "./ProductCard-DBIXztte.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DowuWFcD.js
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { product } = Route$1.useLoaderData();
	const productIndex = products.findIndex((p) => p.slug === product.slug);
	const related = products.filter((p) => p.slug !== product.slug);
	const relatedProducts = [...related.slice(productIndex), ...related.slice(0, productIndex)].slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-brand-green text-brand-ivory",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 py-16 md:py-20 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow mb-5 text-brand-gold",
						children: [
							product.category,
							" · ",
							product.code
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl leading-[1.05] md:text-5xl",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl leading-relaxed text-brand-ivory/70",
						children: product.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							search: { product: product.slug },
							className: "inline-flex items-center justify-center gap-2 bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep",
							children: ["Request a quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "inline-flex items-center justify-center border border-brand-ivory/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em]",
							children: "All products"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: `${product.name} supplied by Kraela in export packing`,
						width: 900,
						height: 900,
						className: "aspect-square w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl",
							children: "Product details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "pt-4 text-xl",
							children: "Applications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-3 sm:grid-cols-2",
							children: product.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-brand-gold" }), a]
							}, a))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "pt-4 text-xl",
							children: "Packing formats"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-3 sm:grid-cols-2",
							children: product.packaging.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-brand-gold" }), p]
							}, p))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-background p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl",
								children: "Specification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-6 divide-y divide-border",
								children: product.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-6 py-3.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: s.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-right font-medium",
										children: s.value
									})]
								}, s.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs leading-relaxed text-muted-foreground",
								children: "Placeholder values. Final parameters are confirmed in writing with each quotation and certificate of analysis."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								search: { product: product.slug },
								className: "mt-7 inline-flex w-full items-center justify-center bg-brand-green px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ivory",
								children: "Get pricing"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Also available",
			title: "Other grades in our range"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: relatedProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
			}, p.slug))
		})] })
	] });
}
//#endregion
export { ProductDetail as component };
