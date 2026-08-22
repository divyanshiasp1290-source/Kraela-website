import { t as facility_default } from "./facility-NPf4lgnv.mjs";
import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-Btj7XwNG.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, d as Earth, f as Container, h as Award, l as Leaf, n as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as QuoteCta } from "./QuoteCta-Cr48ERLQ.mjs";
import { t as world_map_default } from "./world-map-5td1PjnP.mjs";
import { a as industries, d as whyChooseUs, i as faqs, l as regions, n as certifications, s as products, u as resources } from "./router-C8D0lgql.mjs";
import { t as ProductCard } from "./ProductCard-DBIXztte.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CrghYPor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-h6jWbB7n.js
var import_jsx_runtime = require_jsx_runtime();
var heropage_default = "/assets/heropage-C5fMrkMG.png";
var trustPoints = [
	{
		icon: Container,
		label: "Bulk & packed export formats"
	},
	{
		icon: ShieldCheck,
		label: "Batch-wise certificate of analysis"
	},
	{
		icon: Earth,
		label: "Multi-region trade lanes"
	},
	{
		icon: Leaf,
		label: "Traceable seed sourcing"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[76vh] w-full overflow-hidden bg-brand-green-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: heropage_default,
					alt: "Golden sunflower oil poured into a glass bottle beside fresh sunflower blooms",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 size-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute inset-0 bg-gradient-to-r from-brand-green-deep/72 via-brand-green-deep/42 to-brand-green-deep/12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-green-deep/55 to-transparent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x relative flex min-h-[76vh] flex-col justify-center py-24 text-brand-ivory",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-6 text-brand-gold",
								children: "International edible oil supply"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl",
								children: "Export-grade edible oils, delivered to specification."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-xl text-base leading-relaxed text-brand-ivory/75 md:text-lg",
								children: "Kraela supplies refined oils, cold-pressed oils and graded oilseeds to importers, food manufacturers and distributors — with the packing, paperwork and consistency international buyers expect."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/quote",
									className: "inline-flex items-center justify-center gap-2 bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep transition-transform hover:-translate-y-0.5",
									children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "inline-flex items-center justify-center border border-brand-ivory/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:bg-brand-ivory/10",
									children: "Explore Products"
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4",
				children: trustPoints.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-5 shrink-0 text-brand-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: t.label
						})]
					})
				}, t.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "ivory",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4 text-brand-gold",
						children: "About Kraela"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl leading-tight md:text-4xl",
						children: "A supply partner built for international procurement teams."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: "Placeholder content. We consolidate seed and oil volumes, process to agreed parameters and ship with complete documentation — so your quality team, your customs broker and your production line all get what they were promised."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3.5",
						children: [
							"Written specifications agreed before every order",
							"Packing options from retail PET to flexitank",
							"One accountable contact from quote to delivery"
						].map((li) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold" }), li]
						}, li))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-9 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
						children: ["More about the company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: facility_default,
						alt: "Refining tanks and pipework inside a modern edible oil processing plant",
						width: 1400,
						height: 900,
						loading: "lazy",
						className: "w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Portfolio",
					title: "Featured export grades",
					intro: "Reusable product pages carry full specification, packing and application detail."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
					children: "View all products"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: products.slice(0, 3).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Industries",
			title: "Applications we supply",
			intro: "From retail packing to industrial formulation, each sector gets the grade and format it needs."
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "green",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Kraela",
				title: "Reasons buyers keep re-ordering",
				intro: "Placeholder positioning statements — adjust to reflect your verified capabilities.",
				invert: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: whyChooseUs.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-brand-ivory/15 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl text-brand-ivory",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-brand-ivory/65",
							children: item.body
						})]
					})
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4 text-brand-gold",
						children: "Quality & certifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl leading-tight md:text-4xl",
						children: "Tested, coded and documented before it leaves us."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: "Intake screening, in-process control points, laboratory verification and batch coding — followed by documentation prepared for your destination market."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/quality",
						className: "mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
						children: ["See our quality process", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: certifications.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full border border-border bg-background p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5 text-brand-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: c.note
								})
							]
						})
					}, c.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-brand-gold",
					children: "Global presence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl leading-tight md:text-4xl",
					children: "Shipping across major trade lanes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border",
					children: regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-6 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 font-medium",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-muted-foreground",
							children: r.ports
						})]
					}, r.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/global-presence",
					className: "mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
					children: ["Our export markets", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: world_map_default,
					alt: "Stylised world map showing Kraela's international shipping routes",
					width: 1600,
					height: 900,
					loading: "lazy",
					className: "w-full object-cover"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Knowledge hub",
					title: "Resources for buyers",
					intro: "Specification sheets, loading guidance and trade explainers, available on request."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/resources",
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline",
					children: "Browse resources"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
				children: resources.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full border-t-2 border-brand-gold bg-background p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground",
								children: r.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: r.body
							})
						]
					})
				}, r.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Common buyer questions",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-12 max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `faq-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left font-display text-lg",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCta, {})
	] });
}
//#endregion
export { Home as component };
