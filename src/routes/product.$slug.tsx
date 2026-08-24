import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { products } from "@/data/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — Kraela" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Bulk Export Supply | Kraela`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const productIndex = products.findIndex((p) => p.slug === product.slug);
  const related = products.filter((p) => p.slug !== product.slug);
  const relatedProducts = [...related.slice(productIndex), ...related.slice(0, productIndex)].slice(
    0,
    3,
  );

  return (
    <>
      <section className="bg-brand-green text-brand-ivory">
        <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-5 text-brand-gold">
              {product.category} · {product.code}
            </p>
            <h1 className="text-4xl leading-[1.05] md:text-5xl">{product.name}</h1>
            <p className="mt-6 max-w-xl leading-relaxed text-brand-ivory/70">{product.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                search={{ product: product.slug }}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep"
              >
                Request a quote
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center border border-brand-ivory/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em]"
              >
                All products
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={product.image}
              alt={`${product.name} supplied by Kraela in export packing`}
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Reveal className="space-y-6">
            <h2 className="text-3xl">Product details</h2>
            <p className="leading-relaxed text-muted-foreground">{product.description}</p>

            <h3 className="pt-4 text-xl">Applications</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {a}
                </li>
              ))}
            </ul>

            <h3 className="pt-4 text-xl">Packing formats</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.packaging.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-background p-8">
              <h2 className="text-2xl">Specification</h2>
              <dl className="mt-6 divide-y divide-border">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-6 py-3.5 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-right font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Placeholder values. Final parameters are confirmed in writing with each quotation
                and certificate of analysis.
              </p>
              <Link
                to="/quote"
                search={{ product: product.slug }}
                className="mt-7 inline-flex w-full items-center justify-center bg-brand-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep transition-colors hover:bg-brand-gold-soft"
              >
                Get pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Also available" title="Other grades in our range" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}