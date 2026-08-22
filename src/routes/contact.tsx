import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { company } from "@/data/site";

const title = "Contact Kraela — Export Sales Enquiries";
const description =
  "Contact the Kraela export desk with your edible oil or oilseed requirement. Share product, quantity, packing and destination for a prompt quotation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with our team."
        intro="Have a question or want to discuss our products? Send us a message and we will get back to you shortly."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal className="space-y-8">
            <h2 className="text-3xl">Direct contact</h2>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand-gold" />
                <div>
                  <p className="eyebrow text-muted-foreground">Email</p>
                  <a href={`mailto:${company.email}`} className="mt-1 block font-medium">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-gold" />
                <div>
                  <p className="eyebrow text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="mt-1 block font-medium"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-brand-gold" />
                <div>
                  <p className="eyebrow text-muted-foreground">WhatsApp</p>
                  <p className="mt-1 font-medium">{company.whatsapp}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-gold" />
                <div>
                  <p className="eyebrow text-muted-foreground">Office</p>
                  <p className="mt-1 font-medium">{company.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-gold" />
                <div>
                  <p className="eyebrow text-muted-foreground">Response time</p>
                  <p className="mt-1 font-medium">Within one business day</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-background p-7 md:p-10">
              <h2 className="text-2xl">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your contact details and we will be in touch.
              </p>
              <div className="mt-8">
                <InquiryForm mode="contact" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
