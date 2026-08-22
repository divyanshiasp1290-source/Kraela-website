import { Link, createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { faqs, resources } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Resources & Knowledge Hub — Export Guides | Kraela";
const description =
  "Specification sheets, packing and loading guidance, Incoterms explainers and quality references for buyers of edible oils and oilseeds.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Reference material for buyers and procurement teams."
        intro="Placeholder content. Documents below are available on request while the download library is being prepared."
      />

      <Section>
        <SectionHeading eyebrow="Knowledge hub" title="Guides & documents" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="flex h-full gap-5 border border-border bg-card p-7">
                <FileText className="mt-1 size-6 shrink-0 text-brand-gold" />
                <div className="min-w-0">
                  <p className="eyebrow text-muted-foreground">{r.kind}</p>
                  <h3 className="mt-2 text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
                  >
                    Request document
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="FAQ" title="Buyer questions, answered" />
        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <QuoteCta />
    </>
  );
}
