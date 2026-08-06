import { ArrowUpRight, Download, FileText, ScrollText } from "lucide-react";
import curriculoAsset from "@/assets/curriculo.pdf.asset.json";
import tabelaAsset from "@/assets/tabela-servicos.pdf.asset.json";
import { Reveal, Section, SectionHeader } from "./primitives";

export function Documents() {
  return (
    <Section id="documentos">
      <SectionHeader
        eyebrow="07 — Documentos"
        title={
          <>
            Currículo e <span className="text-gradient">tabela de serviços</span>.
          </>
        }
        description="Materiais para processos seletivos, propostas comerciais e orçamentos."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="panel panel-hover flex h-full flex-col p-6 md:p-8">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border"
              style={{
                background: "color-mix(in oklab, var(--brand) 16%, transparent)",
              }}
            >
              <ScrollText className="h-5 w-5" style={{ color: "var(--cyan)" }} aria-hidden />
            </span>
            <h3 className="mt-5 text-lg">Currículo — Joabe Bragança</h3>
            <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
              Desenvolvimento full stack, Inteligência Artificial, automações,
              desenvolvimento seguro e cibersegurança. Documento completo em PDF
              com formação, certificações e experiências.
            </p>
            <div className="mt-7">
              <a
                href={curriculoAsset.url}
                download="Joabe_Pereira_Braganca_2026.pdf"
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(100deg, var(--brand), var(--violet))",
                }}
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="panel panel-hover flex h-full flex-col p-6 md:p-8">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border"
              style={{
                background: "color-mix(in oklab, var(--violet) 16%, transparent)",
              }}
            >
              <FileText className="h-5 w-5" style={{ color: "var(--violet)" }} aria-hidden />
            </span>
            <h3 className="mt-5 text-lg">Tabela de Serviços de TI</h3>
            <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
              Relação de serviços prestados, valores de referência e modelo de
              ordem de serviço para orçamento.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={tabelaAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
              >
                Visualizar <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={tabelaAsset.url}
                download="Tabela_de_Servicos_de_TI.pdf"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-3 text-sm font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
              >
                <Download className="h-4 w-4" /> Baixar tabela
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
