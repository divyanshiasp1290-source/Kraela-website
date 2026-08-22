import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { t as PageHero } from "./PageHero-4TdATcoY.mjs";
import { t as InquiryForm } from "./InquiryForm-DrvlDhcH.mjs";
import { n as Route$4 } from "./router-C8D0lgql2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-DezpAXQl.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		t: "Share the requirement",
		b: "Product, quantity, packing format and destination port."
	},
	{
		t: "Receive the quotation",
		b: "Pricing, Incoterm, validity, lead time and documentation list."
	},
	{
		t: "Confirm and ship",
		b: "Sample approval where needed, then order confirmation and loading."
	}
];
function QuotePage() {
	const { product } = Route$4.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Request a quote",
		title: "Tell us what you need. We will price it precisely.",
		intro: "The more detail you give, the sharper the quotation. Nothing is shared outside our export desk."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-background p-7 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Enquiry details"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, { defaultProduct: product ?? "" })
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-7",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 shrink-0 place-items-center bg-brand-gold/15 font-display text-xl text-brand-gold",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg",
								children: s.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
								children: s.b
							})] })]
						}, s.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 border-l-2 border-brand-gold pl-5 text-sm leading-relaxed text-muted-foreground",
						children: "Enquiries are currently reviewed manually by our team. No account or registration is required to request pricing."
					})
				]
			})]
		})
	})] });
}
//#endregion
export { QuotePage as component };
