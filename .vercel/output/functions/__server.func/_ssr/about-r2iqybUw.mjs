import { t as facility_default } from "./facility-NPf4lgnv.mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { t as PageHero } from "./PageHero-4TdATcoY.mjs";
import { t as QuoteCta } from "./QuoteCta-Cr48ERLQ.mjs";
import { d as whyChooseUs } from "./router-C8D0lgql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-r2iqybUw.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About the company",
			title: "Built around one promise: the shipment matches the specification.",
			intro: "Placeholder overview. Kraela sources, processes and exports refined edible oils and oilseeds for buyers who need repeatable quality, clear documentation and predictable communication."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: facility_default,
					alt: "Stainless steel refining tanks inside an edible oil processing facility",
					width: 1400,
					height: 900,
					loading: "lazy",
					className: "w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl",
							children: "Who we are"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-muted-foreground",
							children: "Placeholder content. Kraela operates as an export-focused supplier of edible oils and agri commodities. We work with a network of processing partners and growing regions, consolidating volumes and standardising quality before shipment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-muted-foreground",
							children: "Our commercial model is simple: written specifications, transparent quotations, disciplined documentation and one accountable point of contact for the whole order."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-6 border-t border-border pt-6 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-muted-foreground",
									children: "Focus"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-display text-2xl",
									children: "Edible oils"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-muted-foreground",
									children: "Model"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-display text-2xl",
									children: "B2B export"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-muted-foreground",
									children: "Coverage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-display text-2xl",
									children: "Multi-region"
								})] })
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Our approach",
			title: "How we work with international buyers",
			intro: "Six operating principles that shape every order we accept."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: whyChooseUs.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full border-t-2 border-brand-gold bg-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: item.body
					})]
				})
			}, item.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCta, {})
	] });
}
//#endregion
export { AboutPage as component };
