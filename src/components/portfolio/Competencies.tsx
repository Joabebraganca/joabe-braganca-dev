import { COMPETENCIES } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./primitives";

export function Competencies() {
  return (
    <Section id="competencias">
      <SectionHeader
        eyebrow="04 — Competências técnicas"
        title={
          <>
            Stack e ferramentas do{" "}
            <span className="text-gradient">dia a dia</span>.
          </>
        }
        description="Linguagens, plataformas e ferramentas que utilizo em desenvolvimento, automação, infraestrutura e suporte."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPETENCIES.map((c, i) => (
          <Reveal key={c.group} delay={0.05 * i}>
            <article className="panel panel-hover h-full p-5">
              <h3 className="label-mono">{c.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {c.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
