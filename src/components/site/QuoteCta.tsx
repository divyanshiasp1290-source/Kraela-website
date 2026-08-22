import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function QuoteCta() {
  return (
    <section className="bg-brand-green text-brand-ivory">
      <div className="container-x grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-brand-gold">Start an enquiry</p>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Send us your specification. We will send back a quotation.
          </h2>
          <p className="mt-5 text-brand-ivory/70">
            Share product, quantity, packing and destination port — our export desk replies with
            pricing, lead time and documentation detail.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/quote"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-deep transition-transform hover:-translate-y-0.5"
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-brand-ivory/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:bg-brand-ivory/10"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}