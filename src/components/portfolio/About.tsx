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
                Engenharia de software, infraestrutura e{" "}
                <span className="text-gradient">segurança</span>.
              </>
            }
          />
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Profissional de Tecnologia da Informação com experiência em
                suporte técnico N1, N2 e N3, atendendo colaboradores e sustentando
                a operação de ambientes corporativos, incluindo administração de
                toda a infraestrutura de TI, gestão de acessos e documentação
                técnica.
              </p>
              <p>
                Atuo também no desenvolvimento de sistemas internos e de
                aplicações web, utilizando JavaScript, TypeScript, React, PHP,
                HTML e CSS, além da construção e consumo de APIs REST para
                integrar sistemas e eliminar lançamentos manuais.
              </p>
              <p>
                Desenvolvo automações de processos com n8n, Dify, webhooks e
                integrações, aplicando Inteligência Artificial com OpenAI, Google
                Gemini e Anthropic em fluxos de atendimento e apoio operacional.
                Na camada de dados, administro e dou suporte a bases em Supabase.
              </p>
              <p>
                Trabalho com desenvolvimento seguro — validação de entrada,
                autenticação e controle de acesso — apoiado por conhecimento em
                cibersegurança: testes em aplicações web, análise de
                vulnerabilidades e reconhecimento de ambientes com ferramentas
                como OWASP ZAP, Google Dorking, Folder Finder e Postman.
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
