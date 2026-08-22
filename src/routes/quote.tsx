import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

const title = "Request a Quote — Bulk Edible Oil Enquiry | Kraela";
const description =
  "Request a quotation from Kraela. Share product, quantity, packing and destination port and our export desk will respond with pricing and lead time.";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/quote")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const steps = [
  { t: "Share the requirement", b: "Product, quantity, packing format and destination port." },
  { t: "Receive the quotation", b: "Pricing, Incoterm, validity, lead time and documentation list." },
  { t: "Confirm and ship", b: "Sample approval where needed, then order confirmation and loading." },
];

function QuotePage() {
  const { product } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what you need. We will price it precisely."
        intro="The more detail you give, the sharper the quotation. Nothing is shared outside our export desk."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <div className="border border-border bg-background p-7 md:p-10">
              <h2 className="text-2xl">Enquiry details</h2>
              <div className="mt-8">
                <InquiryForm defaultProduct={product ?? ""} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-3xl">How it works</h2>
            <ol className="mt-8 space-y-7">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-5">
                  <span className="grid size-11 shrink-0 place-items-center bg-brand-gold/15 font-display text-xl text-brand-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg">{s.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-l-2 border-brand-gold pl-5 text-sm leading-relaxed text-muted-foreground">
              Enquiries are currently reviewed manually by our team. No account or registration is
              required to request pricing.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
