import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/kraela-mark.jpg.jpeg";
import { company, navLinks, products } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-green-deep text-brand-ivory">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Kraela logo"
              width={40}
              height={40}
              loading="lazy"
              className="size-10 shrink-0 rounded-full bg-brand-ivory object-contain p-1"
            />
            <span className="font-display text-2xl font-semibold">Kraela</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-ivory/60">
            {company.tagline}. Supplying importers, processors and distributors across international
            markets.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-brand-gold">Company</h2>
          <ul className="mt-5 space-y-3 text-sm text-brand-ivory/70">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-brand-gold">Products</h2>
          <ul className="mt-5 space-y-3 text-sm text-brand-ivory/70">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors hover:text-brand-gold"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="transition-colors hover:text-brand-gold">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-brand-gold">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-brand-ivory/70">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-gold">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-gold" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-brand-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-ivory/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[11px] uppercase tracking-[0.18em] text-brand-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Placeholder content — company details to be confirmed.</p>
        </div>
      </div>
    </footer>
  );
}
