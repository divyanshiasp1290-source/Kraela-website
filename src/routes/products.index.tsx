import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { products } from "@/data/site";

const title = "Products — Refined Edible Oils & Oilseeds | Kraela";
const description =
  "Explore Kraela's export range: refined sunflower oil, cold-pressed mustard oil and graded oilseeds, available in retail, bulk and industrial packing.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    [product.name, product.category, product.range, product.badge]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title="Export grades, packed the way your market buys."
        intro="Each grade is quoted against written parameters and your preferred packing format. Specification sheets are issued with every quotation."
      />

      <Section>
        <SectionHeading
          eyebrow="Catalogue"
          title="Current export range"
          intro="Additional grades and origins are added on request — tell us what you need and we will confirm availability."
        />
        <div className="relative mt-10 max-w-xl">
          <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products"
            aria-label="Search products"
            className="h-12 rounded-none border-0 border-b border-input bg-transparent pl-7 pr-0 shadow-none focus-visible:border-brand-gold focus-visible:ring-0"
          />
        </div>
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground">
            No products found. Try a different search.
          </p>
        )}
      </Section>

      <QuoteCta />
    </>
  );
}