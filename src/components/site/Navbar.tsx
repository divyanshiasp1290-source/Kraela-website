import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kraela-mark.jpg.jpeg";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Kraela logo"
            width={40}
            height={40}
            className="size-9 shrink-0 object-contain mix-blend-multiply md:size-20"
          />
          <span className="truncate font-display text-4xl font-semibold tracking-tight text-brand-green md:text-[40px]">
            Kraela
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand-green" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative py-1 text-[15px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:text-brand-green hover:after:w-full data-[status=active]:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <Link
            to="/quote"
            className="hidden bg-brand-green px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-ivory transition-colors hover:bg-brand-green-deep sm:inline-block"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center border border-border text-brand-green xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background xl:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-brand-green" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-4 bg-brand-green px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ivory"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
