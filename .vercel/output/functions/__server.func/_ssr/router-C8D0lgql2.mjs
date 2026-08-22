import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Mail, i as Phone, o as Menu, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as FaWhatsapp } from "../_libs/react-icons.mjs";
import { o as navLinks, r as company, s as products } from "./router-C8D0lgql.mjs";
import { n as __exportAll } from "./server-DChfR-cx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C8D0lgql.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-44lPxXHA.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var kraela_mark_jpg_default = "/assets/kraela-mark.jpg-C3Q6bFsv.jpeg";
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between gap-4 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: kraela_mark_jpg_default,
						alt: "Kraela logo",
						width: 40,
						height: 40,
						className: "size-9 shrink-0 object-contain mix-blend-multiply md:size-20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-4xl font-semibold tracking-tight text-brand-green md:text-[40px]",
						children: "Kraela"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-5 xl:flex",
					"aria-label": "Main",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						activeProps: { className: "text-brand-green" },
						inactiveProps: { className: "text-muted-foreground" },
						className: "relative py-1 text-[15px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-green hover:after:w-full data-[status=active]:after:w-full",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						className: "hidden bg-brand-green px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-ivory transition-colors hover:bg-brand-green-deep sm:inline-block",
						children: "Request a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "grid size-10 place-items-center border border-border text-brand-green xl:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background xl:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col py-3",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: l.to === "/" },
					activeProps: { className: "text-brand-green" },
					inactiveProps: { className: "text-muted-foreground" },
					className: "border-b border-border/60 py-3 text-sm font-medium last:border-0",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/quote",
					onClick: () => setOpen(false),
					className: "mt-4 bg-brand-green px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ivory",
					children: "Request a Quote"
				})]
			})
		}) : null]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-brand-green-deep text-brand-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: kraela_mark_jpg_default,
						alt: "Kraela logo",
						width: 40,
						height: 40,
						loading: "lazy",
						className: "size-10 shrink-0 rounded-full bg-brand-ivory object-contain p-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-semibold",
						children: "Kraela"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xs text-sm leading-relaxed text-brand-ivory/60",
					children: [company.tagline, ". Supplying importers, processors and distributors across international markets."]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow text-brand-gold",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm text-brand-ivory/70",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "transition-colors hover:text-brand-gold",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow text-brand-gold",
					children: "Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm text-brand-ivory/70",
					children: [products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						className: "transition-colors hover:text-brand-gold",
						children: p.name
					}) }, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						className: "transition-colors hover:text-brand-gold",
						children: "Request a Quote"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow text-brand-gold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4 text-sm text-brand-ivory/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-brand-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "hover:text-brand-gold",
								children: company.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-brand-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${company.phone.replace(/\s/g, "")}`,
								className: "hover:text-brand-gold",
								children: company.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-brand-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.address })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-brand-ivory/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col gap-3 py-6 text-[11px] uppercase tracking-[0.18em] text-brand-ivory/40 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Placeholder content — company details to be confirmed." })]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function WhatsAppButton() {
	const whatsappNumber = company.whatsapp.replace(/\D/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${whatsappNumber}`,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with Kraela on WhatsApp",
		title: "Chat on WhatsApp",
		className: "fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-brand-green-deep/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold md:right-8 md:bottom-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
			className: "size-7",
			"aria-hidden": "true"
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Kraela — Edible Oil Manufacturer & Global Exporter" },
			{
				name: "description",
				content: "Kraela supplies refined edible oils and graded oilseeds to importers, food manufacturers and distributors worldwide."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Kraela"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-h6jWbB7n.mjs");
var title$8 = "Kraela — Edible Oil Manufacturer & Global Exporter";
var description$8 = "Kraela supplies refined sunflower oil, cold-pressed mustard oil and graded oilseeds to importers, food manufacturers and distributors worldwide. Request a quote.";
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$8 },
			{
				name: "description",
				content: description$8
			},
			{
				property: "og:title",
				content: title$8
			},
			{
				property: "og:description",
				content: description$8
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Kraela",
				description: description$8,
				url: "/"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-r2iqybUw.mjs");
var title$7 = "About Kraela — Edible Oil Manufacturer & Exporter";
var description$7 = "Kraela is an international supplier of refined edible oils and oilseeds, working with importers, processors and distributors across global markets.";
var Route$10 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$7 },
			{
				name: "description",
				content: description$7
			},
			{
				property: "og:title",
				content: title$7
			},
			{
				property: "og:description",
				content: description$7
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-wfZJ_oAP.mjs");
var title$6 = "Contact Kraela — Export Sales Enquiries";
var description$6 = "Contact the Kraela export desk with your edible oil or oilseed requirement. Share product, quantity, packing and destination for a prompt quotation.";
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$6 },
			{
				name: "description",
				content: description$6
			},
			{
				property: "og:title",
				content: title$6
			},
			{
				property: "og:description",
				content: description$6
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./global-presence-BCNPnRTn.mjs");
var title$5 = "Global Presence — Export Markets & Ports | Kraela";
var description$5 = "Kraela ships to buyers across the Middle East, Africa, Europe, Asia, the Americas and Oceania, with packing and documentation matched to each destination.";
var Route$8 = createFileRoute("/global-presence")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/global-presence"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/global-presence"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./industries-CjgMSH0I.mjs");
var title$4 = "Industries We Supply — Food, Retail & Industrial | Kraela";
var description$4 = "Kraela supplies edible oils and oilseeds to food manufacturers, retail and private label brands, food service, personal care, feed and industrial buyers.";
var Route$7 = createFileRoute("/industries")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/industries"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./products-C7F03LXy.mjs");
var Route$6 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./quality-C3F9rppO.mjs");
var title$3 = "Quality & Certifications — Testing and Compliance | Kraela";
var description$3 = "How Kraela controls quality: intake screening, in-process control points, laboratory testing, batch coding and complete export documentation.";
var Route$5 = createFileRoute("/quality")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/quality"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/quality"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./quote-DezpAXQl.mjs");
var title$2 = "Request a Quote — Bulk Edible Oil Enquiry | Kraela";
var description$2 = "Request a quotation from Kraela. Share product, quantity, packing and destination port and our export desk will respond with pricing and lead time.";
var searchSchema = objectType({ product: stringType().optional() });
var Route$4 = createFileRoute("/quote")({
	validateSearch: searchSchema,
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/quote"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/quote"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./resources-DH9c_5G-.mjs");
var title$1 = "Resources & Knowledge Hub — Export Guides | Kraela";
var description$1 = "Specification sheets, packing and loading guidance, Incoterms explainers and quality references for buyers of edible oils and oilseeds.";
var Route$3 = createFileRoute("/resources")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/resources"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/resources"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/products",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/industries",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/quality",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/global-presence",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/resources",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/quote",
				changefreq: "monthly",
				priority: "0.9"
			},
			...products.map((p) => ({
				path: `/products/${p.slug}`,
				changefreq: "monthly",
				priority: "0.8"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./product._slug-DowuWFcD.mjs");
var Route$1 = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = products.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product unavailable — Kraela" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		const title = `${product.name} — Bulk Export Supply | Kraela`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: product.summary
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: product.summary
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/products/${product.slug}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/products/${product.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products.index-CPuIaP7Y.mjs");
var title = "Products — Refined Edible Oils & Oilseeds | Kraela";
var description = "Explore Kraela's export range: refined sunflower oil, cold-pressed mustard oil and graded oilseeds, available in retail, bulk and industrial packing.";
var Route = createFileRoute("/products/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/products"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var GlobalPresenceRoute = Route$8.update({
	id: "/global-presence",
	path: "/global-presence",
	getParentRoute: () => Route$12
});
var IndustriesRoute = Route$7.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$12
});
var ProductsRoute = Route$6.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$12
});
var QualityRoute = Route$5.update({
	id: "/quality",
	path: "/quality",
	getParentRoute: () => Route$12
});
var QuoteRoute = Route$4.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$12
});
var ResourcesRoute = Route$3.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$12
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$12
});
var ProductSlugRoute = Route$1.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$12
});
var ProductsRouteChildren = { ProductsIndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	GlobalPresenceRoute,
	IndustriesRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	QualityRoute,
	QuoteRoute,
	ResourcesRoute,
	SitemapDotxmlRoute,
	ProductSlugRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { router_exports as i, Route$4 as n, getRouter as r, Route$1 as t };
