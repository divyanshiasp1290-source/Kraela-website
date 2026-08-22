import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { t as PageHero } from "./PageHero-4TdATcoY.mjs";
import { t as QuoteCta } from "./QuoteCta-Cr48ERLQ.mjs";
import { a as industries } from "./router-C8D0lgql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-CjgMSH0I.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries & applications",
			title: "One supply desk, many end uses.",
			intro: "Placeholder content. Our grades and packing formats are selected to match how each sector buys, stores and processes oil."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Sectors served",
			title: "Where our products are used",
			intro: "Tell us your application and we will recommend the grade and packing that fits."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3",
			children: industries.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] text-brand-gold",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: item.description
						})
					]
				})
			}, item.name))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCta, {})
	] });
}
//#endregion
export { IndustriesPage as component };
