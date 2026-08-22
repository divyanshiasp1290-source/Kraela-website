import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, s as Slot, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn } from "./Section-Btj7XwNG.mjs";
import { t as Input } from "./input-Bpx-kHVJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { s as products } from "./router-C8D0lgql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InquiryForm-DrvlDhcH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	company: stringType().trim().min(2, "Please enter your company").max(120),
	email: stringType().trim().email("Enter a valid business email").max(255),
	phone: stringType().trim().min(6, "Enter a reachable phone or WhatsApp number").max(40),
	country: stringType().trim().min(2, "Please enter your country").max(80),
	product: stringType().trim().min(1, "Select a product"),
	quantity: stringType().trim().min(1, "Tell us the quantity or requirement").max(120),
	message: stringType().trim().max(1500).optional()
});
var contactSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	company: stringType().trim().min(2, "Please enter your company").max(120),
	email: stringType().trim().email("Enter a valid email").max(255),
	phone: stringType().trim().max(40).optional(),
	message: stringType().trim().min(1, "Please enter a message").max(1500)
});
var fieldClass = "mt-2 h-11 rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:border-brand-gold focus-visible:ring-0";
function InquiryForm({ defaultProduct = "", mode = "quote" }) {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const isContactForm = mode === "contact";
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const raw = Object.fromEntries(new FormData(form).entries());
		const parsed = (isContactForm ? contactSchema : schema).safeParse(raw);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			toast.error("Please correct the highlighted fields.");
			return;
		}
		setErrors({});
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			form.reset();
			toast.success(isContactForm ? "Message sent" : "Enquiry received", { description: isContactForm ? "Our team will get back to you shortly." : "Our export desk will respond to your requirement shortly." });
		}, 600);
	}
	const err = (k) => errors[k] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-xs text-destructive",
		children: errors[k]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "grid gap-6 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					className: "eyebrow text-muted-foreground",
					children: "Full name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					name: "name",
					autoComplete: "name",
					className: fieldClass
				}),
				err("name")
			] }),
			isContactForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "company",
					className: "eyebrow text-muted-foreground",
					children: "Company Name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "company",
					name: "company",
					autoComplete: "organization",
					className: fieldClass
				}),
				err("company")
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "email",
					className: "eyebrow text-muted-foreground",
					children: isContactForm ? "Email" : "Business email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					name: "email",
					type: "email",
					autoComplete: "email",
					className: fieldClass
				}),
				err("email")
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "phone",
					className: "eyebrow text-muted-foreground",
					children: "Phone number"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "phone",
					name: "phone",
					autoComplete: "tel",
					className: fieldClass,
					required: !isContactForm
				}),
				err("phone")
			] }),
			!isContactForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "company",
					className: "eyebrow text-muted-foreground",
					children: "Company Name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "company",
					name: "company",
					autoComplete: "organization",
					className: fieldClass
				}),
				err("company")
			] }),
			!isContactForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "country",
					className: "eyebrow text-muted-foreground",
					children: "Country"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "country",
					name: "country",
					autoComplete: "country-name",
					className: fieldClass
				}),
				err("country")
			] }),
			!isContactForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "product",
					className: "eyebrow text-muted-foreground",
					children: "Product of interest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "product",
					name: "product",
					defaultValue: defaultProduct,
					className: "mt-2 h-11 w-full border-0 border-b border-input bg-transparent text-sm outline-none focus:border-brand-gold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select a product"
						}),
						products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: p.slug,
							children: p.name
						}, p.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "other",
							children: "Other / multiple products"
						})
					]
				}),
				err("product")
			] }),
			!isContactForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "quantity",
						className: "eyebrow text-muted-foreground",
						children: "Quantity / requirement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "quantity",
						name: "quantity",
						placeholder: "e.g. 2 x 20ft container, 1L PET, monthly",
						className: fieldClass
					}),
					err("quantity")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						className: "eyebrow text-muted-foreground",
						children: "Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						rows: 5,
						placeholder: isContactForm ? "How can we help?" : "Destination port, packing preference, required documents, target timeline…",
						required: isContactForm,
						className: "mt-2 resize-none rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:border-brand-gold focus-visible:ring-0"
					}),
					err("message")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: submitting,
					className: "h-12 w-full rounded-none bg-brand-green text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ivory hover:bg-brand-green-deep md:w-auto md:px-10",
					children: submitting ? "Sending…" : isContactForm ? "Send message" : "Submit enquiry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "We use your details only to respond to this enquiry."
				})]
			})
		]
	});
}
//#endregion
export { InquiryForm as t };
