import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./primitives";

export function Certifications() {
  return (
    <Section id="certificacoes">
      <SectionHeader
        eyebrow="05 — Certificações"
        title={
          <>
            Formação complementar em{" "}
            <span className="text-gradient">desenvolvimento e segurança</span>.
          </>
        }
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={0.04 * i}>
            <article className="panel panel-hover group relative h-full overflow-hidden p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand) 70%, transparent), transparent)",
                }}
              />
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border"
                  style={{
                    background:
                      "color-mix(in oklab, var(--violet) 16%, transparent)",
                  }}
                >
                  <BadgeCheck
                    className="h-4 w-4"
                    style={{ color: "var(--cyan)" }}
                    aria-hidden
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] leading-snug">{c.name}</h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {c.org}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
