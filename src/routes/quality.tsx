import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import facility from "@/assets/facility.jpg";
import { PageHero } from "@/components/site/PageHero";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { certifications, qualitySteps } from "@/data/site";

const title = "Quality & Certifications — Testing and Compliance | Kraela";
const description =
  "How Kraela controls quality: intake screening, in-process control points, laboratory testing, batch coding and complete export documentation.";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quality" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & certifications"
        title="Controlled at every point where quality can drift."
        intro="Placeholder content. Certificate names, numbers and issuing bodies must be replaced with your verified documents before publishing."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal>
            <img
              src={facility}
              alt="Processing hall with stainless steel tanks used for refining edible oil"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl md:text-4xl">Our quality process</h2>
            <ol className="mt-8 space-y-6">
              {qualitySteps.map((s, i) => (
                <li key={s.title} className="flex gap-5 border-b border-border pb-6 last:border-0">
                  <span className="font-display text-2xl text-brand-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Documentation"
          title="Certifications & records"
          intro="Editable placeholders — replace each entry with your actual certificate, scope and validity."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <div className="h-full border border-border bg-card p-7">
                <ShieldCheck className="size-6 text-brand-gold" />
                <h3 className="mt-5 text-lg">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <QuoteCta />
    </>
  );
}
