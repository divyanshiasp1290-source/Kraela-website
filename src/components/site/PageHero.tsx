import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-green text-brand-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-gold/15 blur-3xl"
      />
      <div className="container-x relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5 text-brand-gold">{eyebrow}</p>
          <h1 className="text-4xl leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ivory/70 md:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}