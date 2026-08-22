import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/site";
import logo from "@/assets/kraela-mark.jpg.jpeg";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card transition-shadow duration-500 hover:shadow-[0_24px_60px_-32px_var(--brand-green)]">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-muted"
        aria-label={product.name}
      >
        <img
          src={product.image}
          alt={`${product.name} â€” Kraela export grade`}
          width={900}
          height={900}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {product.range} · {product.category}
            </p>
          </div>
          <span className="shrink-0 font-mono text-[10px] text-brand-gold">{product.code}</span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.summary}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
          >
            Specifications
          </Link>
          <Link
            to="/quote"
            search={{ product: product.slug }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold"
          >
            Get quote
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}


