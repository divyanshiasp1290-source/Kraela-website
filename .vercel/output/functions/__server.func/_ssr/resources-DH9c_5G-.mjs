import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { t as PageHero } from "./PageHero-4TdATcoY.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as FileText } from "../_libs/lucide-react.mjs";
import { t as QuoteCta } from "./QuoteCta-Cr48ERLQ.mjs";
import { i as faqs, u as resources } from "./router-C8D0lgql.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CrghYPor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DH9c_5G-.js
var import_jsx_runtime = require_jsx_runtime();
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Resources",
			title: "Reference material for buyers and procurement teams.",
			intro: "Placeholder content. Documents below are available on request while the download library is being prepared."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Knowledge hub",
			title: "Guides & documents"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-8 md:grid-cols-2",
			children: resources.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full gap-5 border border-border bg-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mt-1 size-6 shrink-0 text-brand-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground",
								children: r.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-xl",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: r.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
								children: "Request document"
							})
						]
					})]
				})
			}, r.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: "Buyer questions, answered"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-display text-lg",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: f.a
						})]
					}, f.q))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCta, {})
	] });
}
//#endregion
export { ResourcesPage as component };
