import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Container, Globe2, Leaf, ShieldCheck } from "lucide-react";
import heroBanner from "@/assets/heropage.png";
import facility from "@/assets/facility.jpg";
import worldMap from "@/assets/world-map.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { certifications, faqs, industries, products, regions, resources, whyChooseUs } from "@/data/site";

const title = "Kraela — Edible Oil Manufacturer & Global Exporter";
const description =
  "Kraela supplies refined sunflower oil, cold-pressed mustard oil and graded oilseeds to importers, food manufacturers and distributors worldwide. Request a quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kraela",
          description,
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

const trustPoints = [
  { icon: Container, label: "Bulk & packed export formats" },
  { icon: ShieldCheck, label: "Batch-wise certificate of analysis" },
  { icon: Globe2, label: "Multi-region trade lanes" },
  { icon: Leaf, label: "Traceable seed sourcing" },
];

function Home() {
  return (
    <>
      {/* Hero — full-bleed banner */}
      <section className="relative isolate min-h-[76vh] w-full overflow-hidden bg-brand-green-deep">
        <img
          src={heroBanner}
          alt="Golden sunflower oil poured into a glass bottle beside fresh sunflower blooms"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/72 via-brand-green-deep/42 to-brand-green-deep/12"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-green-deep/55 to-transparent"
        />

        <div className="container-x relative flex min-h-[76vh] flex-col justify-center py-24 text-brand-ivory">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-6 text-brand-gold">International edible oil supply</p>
            <h1 className="text-4xl leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl">
              Export-grade edible oils, delivered to specification.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-ivory/75 md:text-lg">
              Kraela supplies refined oils, cold-pressed oils and graded oilseeds to importers, food
              manufacturers and distributors — with the packing, paperwork and consistency
              international buyers expect.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep transition-transform hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center border border-brand-ivory/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:bg-brand-ivory/10"
              >
                Explore Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-b border-border bg-card">
        <div className="container-x grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t, i) => (
            <Reveal key={t.label} delay={i * 60}>
              <div className="flex min-w-0 items-center gap-3.5">
                <t.icon className="size-5 shrink-0 text-brand-gold" />
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* About */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4 text-brand-gold">About Kraela</p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              A supply partner built for international procurement teams.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Placeholder content. We consolidate seed and oil volumes, process to agreed parameters
              and ship with complete documentation — so your quality team, your customs broker and
              your production line all get what they were promised.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Written specifications agreed before every order",
                "Packing options from retail PET to flexitank",
                "One accountable contact from quote to delivery",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {li}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
            >
              More about the company
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={facility}
              alt="Refining tanks and pipework inside a modern edible oil processing plant"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Featured products */}
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured export grades"
            intro="Reusable product pages carry full specification, packing and application detail."
          />
          <Link
            to="/products"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
          >
            View all products
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Applications we supply"
          intro="From retail packing to industrial formulation, each sector gets the grade and format it needs."
        />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="h-full bg-card p-8">
                <p className="font-mono text-[10px] text-brand-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="green">
        <SectionHeading
          eyebrow="Why Kraela"
          title="Reasons buyers keep re-ordering"
          intro="Placeholder positioning statements — adjust to reflect your verified capabilities."
          invert
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="border-t border-brand-ivory/15 pt-6">
                <h3 className="text-xl text-brand-ivory">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ivory/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quality */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <p className="eyebrow mb-4 text-brand-gold">Quality & certifications</p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              Tested, coded and documented before it leaves us.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Intake screening, in-process control points, laboratory verification and batch coding —
              followed by documentation prepared for your destination market.
            </p>
            <Link
              to="/quality"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
            >
              See our quality process
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <div className="h-full border border-border bg-background p-6">
                  <Award className="size-5 text-brand-gold" />
                  <h3 className="mt-4 text-lg">{c.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Global presence */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4 text-brand-gold">Global presence</p>
            <h2 className="text-3xl leading-tight md:text-4xl">Shipping across major trade lanes</h2>
            <ul className="mt-8 divide-y divide-border">
              {regions.map((r) => (
                <li key={r.name} className="flex justify-between gap-6 py-3.5 text-sm">
                  <span className="min-w-0 font-medium">{r.name}</span>
                  <span className="text-right text-muted-foreground">{r.ports}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/global-presence"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
            >
              Our export markets
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={worldMap}
              alt="Stylised world map showing Kraela's international shipping routes"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Resources */}
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Knowledge hub"
            title="Resources for buyers"
            intro="Specification sheets, loading guidance and trade explainers, available on request."
          />
          <Link
            to="/resources"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
          >
            Browse resources
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="h-full border-t-2 border-brand-gold bg-background p-6">
                <p className="eyebrow text-muted-foreground">{r.kind}</p>
                <h3 className="mt-3 text-lg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Common buyer questions" align="center" />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
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
