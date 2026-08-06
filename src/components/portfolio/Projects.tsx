import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Section, SectionHeader } from "./primitives";

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeader
        eyebrow="03 — Projetos"
        title={
          <>
            Projetos <span className="text-gradient">reais em produção</span>.
          </>
        }
        description="Cada projeto lista as tecnologias utilizadas, as funcionalidades entregues e o acesso público quando disponível."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
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
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="label-mono">{p.subtitle}</div>
              <h3 className="mt-2 text-xl">{p.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[13px] text-muted-foreground">
                    <span
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                      style={{ background: "var(--cyan)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(100deg, var(--brand), var(--violet))",
                    }}
                  >
                    Acessar Projeto <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
                  >
                    <Github className="h-3.5 w-3.5" /> Ver Código no GitHub
                  </a>
                )}
                {!p.demo && (
                  <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    {p.status === "desenvolvimento"
                      ? "Em desenvolvimento"
                      : "Projeto privado"}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
