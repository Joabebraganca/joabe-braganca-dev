import { Cloud, Cpu, Layers, ShieldCheck } from "lucide-react";
import { Reveal, Section, SectionHeader } from "./primitives";

const PILLARS = [
  {
    icon: Layers,
    title: "Arquitetura & APIs",
    text: "Sistemas modulares, integrações REST e camadas de dados bem definidas.",
  },
  {
    icon: Cpu,
    title: "IA & Automação",
    text: "Agentes, assistentes e fluxos que removem trabalho repetitivo.",
  },
  {
    icon: ShieldCheck,
    title: "Desenvolvimento Seguro",
    text: "OWASP Top 10, validação de entrada, autenticação e autorização.",
  },
  {
    icon: Cloud,
    title: "Infraestrutura & Cloud",
    text: "Ambientes corporativos, bancos de dados e operação confiável.",
  },
];

export function About() {
  return (
    <Section id="sobre">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionHeader
            eyebrow="01 — Sobre"
            title={
              <>
                Engenharia de software que une{" "}
                <span className="text-gradient">produto, dados e segurança</span>.
              </>
            }
          />
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Atuo no desenvolvimento de aplicações web full stack — do design da
                interface à modelagem de dados e à construção de APIs REST — com
                foco em arquitetura clara, código sustentável e desempenho
                consistente em produção.
              </p>
              <p>
                Aplico Inteligência Artificial de forma pragmática: agentes,
                assistentes internos e integrações com OpenAI, Gemini e Claude
                conectados a processos reais de negócio. Junto a isso, desenvolvo
                automações que integram sistemas via APIs, webhooks e plataformas
                de orquestração, reduzindo trabalho manual e tempo de resposta.
              </p>
              <p>
                Segurança não é etapa final: trabalho com desenvolvimento seguro
                desde o design, considerando as falhas do OWASP Top 10, validação
                rigorosa de entrada, autenticação e autorização corretas. Em
                cibersegurança, realizo testes em aplicações web, análise de
                superfícies de ataque e reconhecimento, traduzindo achados em
                correções concretas.
              </p>
              <p>
                Também administro infraestrutura de TI, bancos de dados e
                ambientes em cloud, sustentando operações corporativas e entregando
                soluções escaláveis com documentação e padronização de processos.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2 lg:mt-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <article className="panel panel-hover h-full p-5">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border"
                  style={{
                    background:
                      "color-mix(in oklab, var(--brand) 14%, transparent)",
                  }}
                >
                  <p.icon
                    className="h-4 w-4"
                    style={{ color: "var(--cyan)" }}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-4 text-[15px]">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
