import { createFileRoute } from "@tanstack/react-router";
import facility from "@/assets/facility.jpg";
import { PageHero } from "@/components/site/PageHero";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { whyChooseUs } from "@/data/site";

const title = "About Kraela — Edible Oil Manufacturer & Exporter";
const description =
  "Kraela is an international supplier of refined edible oils and oilseeds, working with importers, processors and distributors across global markets.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="Built around one promise: the shipment matches the specification."
        intro="Placeholder overview. Kraela sources, processes and exports refined edible oils and oilseeds for buyers who need repeatable quality, clear documentation and predictable communication."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={facility}
              alt="Stainless steel refining tanks inside an edible oil processing facility"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-6">
            <h2 className="text-3xl md:text-4xl">Who we are</h2>
            <p className="leading-relaxed text-muted-foreground">
              Placeholder content. Kraela operates as an export-focused supplier of edible oils and
              agri commodities. We work with a network of processing partners and growing regions,
              consolidating volumes and standardising quality before shipment.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our commercial model is simple: written specifications, transparent quotations,
              disciplined documentation and one accountable point of contact for the whole order.
            </p>
            <dl className="grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <dt className="eyebrow text-muted-foreground">Focus</dt>
                <dd className="mt-2 font-display text-2xl">Edible oils</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Model</dt>
                <dd className="mt-2 font-display text-2xl">B2B export</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Coverage</dt>
                <dd className="mt-2 font-display text-2xl">Multi-region</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="How we work with international buyers"
          intro="Six operating principles that shape every order we accept."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full border-t-2 border-brand-gold bg-card p-7">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <QuoteCta />
    </>
  );
}