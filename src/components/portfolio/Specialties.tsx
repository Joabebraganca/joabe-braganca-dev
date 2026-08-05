import { SPECIALTIES, type Specialty } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./primitives";

const ACCENT: Record<Specialty["accent"], string> = {
  brand: "var(--brand)",
  violet: "var(--violet)",
  cyan: "var(--cyan)",
};

export function Specialties() {
  return (
    <Section id="especialidades">
      <SectionHeader
        eyebrow="02 — Especialidades"
        title={
          <>
            Áreas onde entrego{" "}
            <span className="text-gradient">resultado técnico</span>.
          </>
        }
        description="Seis frentes complementares que sustentam produtos digitais seguros, inteligentes e escaláveis."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SPECIALTIES.map((s, i) => (
          <Reveal key={s.title} delay={0.05 * i}>
            <article className="panel panel-hover group relative h-full overflow-hidden p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background: `color-mix(in oklab, ${ACCENT[s.accent]} 55%, transparent)`,
                }}
              />
              <div className="relative">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border"
                  style={{
                    background: `color-mix(in oklab, ${ACCENT[s.accent]} 16%, transparent)`,
                  }}
                >
                  <s.icon
                    className="h-5 w-5"
                    style={{ color: ACCENT[s.accent] }}
                    aria-hidden
                  />
                </span>

                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
