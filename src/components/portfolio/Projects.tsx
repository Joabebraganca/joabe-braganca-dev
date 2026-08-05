import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Lightbulb, Target } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./primitives";

export function Projects() {
  const [filter, setFilter] = useState<string>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category.includes(filter as never)),
    [filter],
  );

  return (
    <Section id="projetos">
      <SectionHeader
        eyebrow="03 — Projetos"
        title={
          <>
            Cases com <span className="text-gradient">contexto, desafio e solução</span>.
          </>
        }
        description="Cada projeto detalha as tecnologias envolvidas, funcionalidades principais e as decisões técnicas por trás da entrega."
      />

      <Reveal delay={0.06}>
        <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar projetos">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[13px] transition-all ${
                filter === f
                  ? "border-transparent text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
              style={
                filter === f
                  ? {
                      background:
                        "linear-gradient(100deg, var(--brand), var(--violet))",
                    }
                  : undefined
              }
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="panel panel-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={`Prévia do projeto ${p.title}`}
                  loading="lazy"
                  width={1200}
                  height={760}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, color-mix(in oklab, var(--background) 25%, transparent), color-mix(in oklab, var(--background) 85%, transparent))",
                  }}
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                  {p.category.map((c) => (
                    <span key={c} className="chip backdrop-blur-sm">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="label-mono">{p.subtitle}</div>
                <h3 className="mt-2 text-xl">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-[13px] text-muted-foreground"
                    >
                      <span
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                        style={{ background: "var(--cyan)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Note icon={Target} label="Desafio" text={p.challenge} />
                  <Note icon={Lightbulb} label="Solução" text={p.solution} />
                </div>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 pt-1">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
                    >
                      Demonstração <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function Note({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Target;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" style={{ color: "var(--violet)" }} aria-hidden />
        <span className="label-mono">{label}</span>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
