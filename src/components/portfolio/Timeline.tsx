import { Award, Briefcase, FolderGit2, GraduationCap } from "lucide-react";
import { TIMELINE, type TimelineKind } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./primitives";

const META: Record<
  TimelineKind,
  { icon: typeof Award; label: string; color: string }
> = {
  experiencia: { icon: Briefcase, label: "Experiência", color: "var(--brand)" },
  formacao: { icon: GraduationCap, label: "Formação", color: "var(--violet)" },
  certificacao: { icon: Award, label: "Certificação", color: "var(--cyan)" },
  projeto: { icon: FolderGit2, label: "Projeto", color: "var(--violet)" },
};

export function Timeline() {
  return (
    <Section id="trajetoria">
      <SectionHeader
        eyebrow="05 — Trajetória"
        title={
          <>
            Formação, certificações e{" "}
            <span className="text-gradient">experiência aplicada</span>.
          </>
        }
        description="Uma linha do tempo com as etapas que construíram minha atuação em desenvolvimento, automação e segurança."
      />

      <ol className="relative mt-12 space-y-4 pl-6 md:pl-8">
        <span
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-px md:left-2"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--brand) 60%, transparent), color-mix(in oklab, var(--violet) 40%, transparent), transparent)",
          }}
        />
        {TIMELINE.map((e, i) => {
          const meta = META[e.kind];
          return (
            <Reveal key={`${e.title}-${i}`} delay={0.04 * i}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-6 h-2.5 w-2.5 rounded-full ring-4 md:-left-[1.6rem]"
                  style={{
                    background: meta.color,
                    // @ts-expect-error CSS custom property for ring color
                    "--tw-ring-color": "var(--background)",
                  }}
                />
                <article className="panel panel-hover p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip">
                      <meta.icon
                        className="h-3 w-3"
                        style={{ color: meta.color }}
                        aria-hidden
                      />
                      {meta.label}
                    </span>
                    <span className="label-mono">{e.period}</span>
                  </div>
                  <h3 className="mt-3 text-[17px]">{e.title}</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground">{e.org}</p>
                  {e.items && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {e.items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                            style={{ background: "var(--cyan)" }}
                          />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
