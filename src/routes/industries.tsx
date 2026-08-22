import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { industries } from "@/data/site";

const title = "Industries We Supply — Food, Retail & Industrial | Kraela";
const description =
  "Kraela supplies edible oils and oilseeds to food manufacturers, retail and private label brands, food service, personal care, feed and industrial buyers.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries & applications"
        title="One supply desk, many end uses."
        intro="Placeholder content. Our grades and packing formats are selected to match how each sector buys, stores and processes oil."
      />

      <Section>
        <SectionHeading
          eyebrow="Sectors served"
          title="Where our products are used"
          intro="Tell us your application and we will recommend the grade and packing that fits."
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

      <QuoteCta />
    </>
  );
}
