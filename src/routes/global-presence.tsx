import { createFileRoute } from "@tanstack/react-router";
import worldMap from "@/assets/world-map.jpg";
import { PageHero } from "@/components/site/PageHero";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { regions } from "@/data/site";

const title = "Global Presence — Export Markets & Ports | Kraela";
const description =
  "Kraela ships to buyers across the Middle East, Africa, Europe, Asia, the Americas and Oceania, with packing and documentation matched to each destination.";

export const Route = createFileRoute("/global-presence")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/global-presence" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/global-presence" }],
  }),
  component: GlobalPresencePage,
});

function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Global presence"
        title="Trade lanes we serve, ports we load to."
        intro="Placeholder content. Regions and ports listed below are indicative — confirm your destination and we will quote accordingly."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Regions & discharge ports</h2>
            <ul className="mt-8 divide-y divide-border">
              {regions.map((r) => (
                <li
                  key={r.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 text-sm sm:flex sm:justify-between"
                >
                  <span className="min-w-0 font-medium">{r.name}</span>
                  <span className="text-right text-muted-foreground">{r.ports}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={worldMap}
              alt="Stylised world map highlighting Kraela's international export routes"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Logistics support"
          title="What we handle on every shipment"
          align="center"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Incoterms clarity",
              b: "Quotations state the Incoterm, validity and what is included, so cost comparison is straightforward.",
            },
            {
              t: "Container & bulk options",
              b: "Packed containers, jumbo bags, drums or flexitank depending on volume and destination handling.",
            },
            {
              t: "Destination documentation",
              b: "Papers prepared to the importing market's requirements to keep clearance predictable.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="h-full border-t-2 border-brand-gold bg-card p-7">
                <h3 className="text-xl">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <QuoteCta />
    </>
  );
}
