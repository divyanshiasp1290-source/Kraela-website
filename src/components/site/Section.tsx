import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  tone = "ivory",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "white" | "green" | "muted";
}) {
  const tones = {
    ivory: "bg-background text-foreground",
    white: "bg-card text-card-foreground",
    muted: "bg-muted text-foreground",
    green: "bg-brand-green text-brand-ivory",
  } as const;

  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", invert ? "text-brand-gold" : "text-brand-gold")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            invert ? "text-brand-ivory/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}