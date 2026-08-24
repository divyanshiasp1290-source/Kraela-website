import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  email: z.string().trim().email("Enter a valid business email").max(255),
  phone: z.string().trim().min(6, "Enter a reachable phone or WhatsApp number").max(40),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  product: z.string().trim().min(1, "Select a product"),
  quantity: z.string().trim().min(1, "Tell us the quantity or requirement").max(120),
  message: z.string().trim().max(1500).optional(),
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, "Please enter a message").max(1500),
});

type FormMode = "quote" | "contact";
type Errors = Partial<Record<string, string>>;

const fieldClass =
  "mt-2 h-11 rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:border-brand-gold focus-visible:ring-0";

export function InquiryForm({
  defaultProduct = "",
  mode = "quote",
}: {
  defaultProduct?: string;
  mode?: FormMode;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const isContactForm = mode === "contact";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = (isContactForm ? contactSchema : schema).safeParse(raw);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    // No backend connected yet: the enquiry is validated and acknowledged only.
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success(isContactForm ? "Message sent" : "Enquiry received", {
        description: isContactForm
          ? "Our team will get back to you shortly."
          : "Our export desk will respond to your requirement shortly.",
      });
    }, 600);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 md:grid-cols-2">
      <div>
        <Label htmlFor="name" className="eyebrow text-muted-foreground">
          Full name
        </Label>
        <Input id="name" name="name" autoComplete="name" className={fieldClass} />
        {err("name")}
      </div>
      {isContactForm && <div>
        <Label htmlFor="company" className="eyebrow text-muted-foreground">
          Company Name
        </Label>
        <Input id="company" name="company" autoComplete="organization" className={fieldClass} />
        {err("company")}
      </div>}
      <div>
        <Label htmlFor="email" className="eyebrow text-muted-foreground">
          {isContactForm ? "Email" : "Business email"}
        </Label>
        <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
        {err("email")}
      </div>
      <div>
        <Label htmlFor="phone" className="eyebrow text-muted-foreground">
          Phone number
        </Label>
        <Input id="phone" name="phone" autoComplete="tel" className={fieldClass} required={!isContactForm} />
        {err("phone")}
      </div>
      {!isContactForm && <div>
        <Label htmlFor="company" className="eyebrow text-muted-foreground">
          Company Name
        </Label>
        <Input id="company" name="company" autoComplete="organization" className={fieldClass} />
        {err("company")}
      </div>}
      {!isContactForm && <div>
        <Label htmlFor="country" className="eyebrow text-muted-foreground">
          Country
        </Label>
        <Input id="country" name="country" autoComplete="country-name" className={fieldClass} />
        {err("country")}
      </div>}
      {!isContactForm && <div>
        <Label htmlFor="product" className="eyebrow text-muted-foreground">
          Product of interest
        </Label>
        <select
          id="product"
          name="product"
          defaultValue={defaultProduct}
          className="mt-2 h-11 w-full border-0 border-b border-input bg-transparent text-sm outline-none focus:border-brand-gold"
        >
          <option value="">Select a product</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
          <option value="other">Other / multiple products</option>
        </select>
        {err("product")}
      </div>}
      {!isContactForm && <div className="md:col-span-2">
        <Label htmlFor="quantity" className="eyebrow text-muted-foreground">
          Quantity / requirement
        </Label>
        <Input
          id="quantity"
          name="quantity"
          placeholder="e.g. 2 x 20ft container, 1L PET, monthly"
          className={fieldClass}
        />
        {err("quantity")}
      </div>}
      <div className="md:col-span-2">
        <Label htmlFor="message" className="eyebrow text-muted-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder={isContactForm ? "How can we help?" : "Destination port, packing preference, required documents, target timeline…"}
          required={isContactForm}
          className="mt-2 resize-none rounded-none border-0 border-b border-input bg-transparent px-0 shadow-none focus-visible:border-brand-gold focus-visible:ring-0"
        />
        {err("message")}
      </div>
      <div className="md:col-span-2">
        <Button
          type="submit"
          disabled={submitting}
          className="h-12 w-full rounded-none bg-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep hover:bg-brand-gold-soft md:w-auto md:px-10"
        >
          {submitting ? "Sending…" : isContactForm ? "Send message" : "Submit enquiry"}
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          We use your details only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}