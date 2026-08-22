import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-Btj7XwNG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, { rootMargin: "0px 0px -10% 0px" });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("transition-none", shown && "reveal", className),
		style: shown ? { animationDelay: `${delay}ms` } : { opacity: 0 },
		children
	});
}
function Section({ children, className, id, tone = "ivory" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-20 md:py-28", {
			ivory: "bg-background text-foreground",
			white: "bg-card text-card-foreground",
			muted: "bg-muted text-foreground",
			green: "bg-brand-green text-brand-ivory"
		}[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children
		})
	});
}
function SectionHeading({ eyebrow, title, intro, align = "left", invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("eyebrow mb-4", invert ? "text-brand-gold" : "text-brand-gold"),
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl leading-tight md:text-5xl",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-5 text-base leading-relaxed md:text-lg", invert ? "text-brand-ivory/70" : "text-muted-foreground"),
				children: intro
			}) : null
		]
	});
}
//#endregion
export { cn as i, Section as n, SectionHeading as r, Reveal as t };
