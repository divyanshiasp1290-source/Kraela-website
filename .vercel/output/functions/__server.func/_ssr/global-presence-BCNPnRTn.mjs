import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { t as PageHero } from "./PageHero-4TdATcoY.mjs";
import { t as QuoteCta } from "./QuoteCta-Cr48ERLQ.mjs";
import { t as world_map_default } from "./world-map-5td1PjnP.mjs";
import { l as regions } from "./router-C8D0lgql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/global-presence-BCNPnRTn.js
var import_jsx_runtime = require_jsx_runtime();
function GlobalPresencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Global presence",
			title: "Trade lanes we serve, ports we load to.",
			intro: "Placeholder content. Regions and ports listed below are indicative — confirm your destination and we will quote accordingly."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl",
					children: "Regions & discharge ports"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border",
					children: regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 text-sm sm:flex sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 font-medium",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-muted-foreground",
							children: r.ports
						})]
					}, r.name))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: world_map_default,
						alt: "Stylised world map highlighting Kraela's international export routes",
						width: 1600,
						height: 900,
						loading: "lazy",
						className: "w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Logistics support",
			title: "What we handle on every shipment",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-8 md:grid-cols-3",
			children: [
				{
					t: "Incoterms clarity",
					b: "Quotations state the Incoterm, validity and what is included, so cost comparison is straightforward."
				},
				{
					t: "Container & bulk options",
					b: "Packed containers, jumbo bags, drums or flexitank depending on volume and destination handling."
				},
				{
					t: "Destination documentation",
					b: "Papers prepared to the importing market's requirements to keep clearance predictable."
				}
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full border-t-2 border-brand-gold bg-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: c.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: c.b
					})]
				})
			}, c.t))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCta, {})
	] });
}
//#endregion
export { GlobalPresencePage as component };
