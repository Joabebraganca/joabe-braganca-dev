import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Code2,
  Headphones,
  Database,
  Workflow,
  FileText,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import curriculoAsset from "@/assets/curriculo.pdf.asset.json";
import tabelaAsset from "@/assets/tabela-servicos.pdf.asset.json";
import logoAsset from "@/assets/logo-joabe.png.asset.json";
import fotoAsset from "@/assets/joabe-foto.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop",
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------- Data ------------------------------- */

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#competencias", label: "Competências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#valores", label: "Valores" },
  { href: "#contato", label: "Contato" },
];

const EXPERIENCES = [
  {
    company: "4P Capital Investment Holding",
    role: "Suporte Técnico PJ",
    period: "Jul/2026 – Atual",
    items: [
      "Suporte técnico N1, N2 e N3 aos usuários das empresas do grupo",
      "Administração e manutenção de toda a infraestrutura de TI",
      "Instalação, configuração e atualização de computadores, servidores, softwares e periféricos",
      "Desenvolvimento, manutenção e evolução de sistemas internos (requisitos, features, bugs, testes e homologação)",
      "Integração entre sistemas e APIs e automação de processos corporativos",
      "Administração e suporte a bancos de dados",
      "Gestão de usuários, acessos, permissões e ativos de TI",
      "Documentação técnica, padronização de processos e implantação de novas soluções",
      "Atendimento, treinamento de usuários finais e resolução de incidentes",
      "Participação em projetos de inovação e transformação digital da holding",
    ],
  },
  {
    company: "Central IT",
    role: "Técnico de Operação e Serviços",
    items: [
      "Suporte Técnico N2 e atendimento corporativo",
      "Diagnóstico e resolução de incidentes",
      "Hardware, Software, Microsoft 365 e Active Directory",
      "Service Desk — atendimento presencial e remoto",
    ],
  },
  {
    company: "Aliança Assessoria",
    role: "Técnico de Suporte",
    items: [
      "Manutenção preventiva e corretiva",
      "Backup, upgrades e instalação de sistemas",
      "Suporte remoto a usuários",
    ],
  },
  {
    company: "SábioADV",
    role: "Analista de Suporte Técnico",
    items: [
      "Atendimento aos usuários e suporte técnico",
      "Ajustes e suporte em Supabase",
      "Análise de tickets",
    ],
  },
  {
    company: "Dunice e Marcon Advogados",
    role: "Estagiário de TI",
    items: [
      "Suporte aos usuários",
      "Configuração de equipamentos e manutenção",
      "Instalação de softwares",
    ],
  },
  {
    company: "Light Comunicações",
    role: "Suporte Técnico / Desenvolvimento Web",
    items: [
      "Manutenção de websites em WordPress e React",
      "HTML, CSS e JavaScript",
      "Automações com N8N e Dify",
      "E-commerce em Shopify e WooCommerce",
    ],
  },
];

const SKILLS: { title: string; icon: ReactNode; items: string[] }[] = [
  {
    title: "Suporte Técnico",
    icon: <Headphones className="h-4 w-4" />,
    items: [
      "Windows",
      "Microsoft 365",
      "Active Directory",
      "GLPI",
      "AnyDesk",
      "Hardware",
      "Software",
      "Troubleshooting",
    ],
  },
  {
    title: "Desenvolvimento",
    icon: <Code2 className="h-4 w-4" />,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "WordPress",
      "Git",
      "GitHub",
      "Node.js (conhecimento)",
      "Python (conhecimento)",
    ],
  },
  {
    title: "Banco de Dados",
    icon: <Database className="h-4 w-4" />,
    items: ["Supabase", "SQL (conhecimento)"],
  },
  {
    title: "Automação",
    icon: <Workflow className="h-4 w-4" />,
    items: ["N8N", "Dify", "Integrações de APIs", "Engenharia de Prompts"],
  },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Mota Farias Advocacia",
    description:
      "Site institucional para escritório de advocacia em Brasília — identidade sóbria, foco em conversão via WhatsApp e apresentação de especialidades.",
    tech: ["React", "TypeScript", "Tailwind"],
    demo: "https://teste-joabe.lovable.app",
  },
  {
    title: "Projeto em breve",
    description:
      "Espaço reservado para automações desenvolvidas com N8N, Dify e integrações de APIs.",
    tech: ["N8N", "Dify", "APIs"],
  },
  {
    title: "Projeto em breve",
    description:
      "Espaço reservado para trabalhos com WordPress, Shopify e WooCommerce.",
    tech: ["WordPress", "Shopify", "WooCommerce"],
  },
];

const CERTIFICATIONS = [
  { name: "Python Development", org: "FIAP" },
  { name: "Desenvolvedor Full Stack", org: "UniCEUB" },
  { name: "Cybersecurity", org: "FIAP" },
  { name: "Segurança da Informação", org: "Fundação Bradesco" },
  { name: "Cisco Networking Academy", org: "Cisco" },
  { name: "Engenharia de Prompts", org: "" },
  { name: "Automações No-Code", org: "" },
  { name: "CRM", org: "" },
  { name: "E-commerce", org: "FGV" },
];

/* ------------------------------- UI ------------------------------- */

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-sm font-medium tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden border border-border bg-card">
            <img src={logoAsset.url} alt="Logo Joabe Bragança" className="h-full w-full object-contain" />
          </span>
          <span className="hidden sm:inline">Joabe Bragança</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden items-center gap-2 border border-foreground bg-foreground px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground md:inline-flex"
        >
          Falar comigo
        </a>
        <button
          className="border border-border p-2 text-muted-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className="space-y-1">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted-foreground last:border-0 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <FadeUp>
          <div className="grid gap-6 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
            <div>
              {eyebrow && <div className="label-mono">{eyebrow}</div>}
            </div>
            <div>
              <h2 className="max-w-2xl text-2xl leading-[1.15] md:text-4xl">{title}</h2>
              {description && (
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>
        </FadeUp>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------- Sections ------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hairgrid opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:px-10">
        <FadeUp>
          <div className="label-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-foreground" />
            Disponível para novas oportunidades
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <FadeUp delay={0.05}>
              <h1 className="max-w-3xl text-[2.75rem] leading-[1.02] md:text-[4.5rem]">
                Tecnologia da Informação com
                <span className="text-muted-foreground"> operação, código e automação.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Joabe Bragança — Analista de TI formado em Análise e Desenvolvimento
                de Sistemas, com experiência em suporte técnico corporativo (N1–N3),
                desenvolvimento web e automação de processos.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Ver projetos
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#curriculo"
                  className="inline-flex items-center gap-2 border border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground"
                >
                  <Download className="h-3.5 w-3.5" /> Currículo
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-1 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" /> Contato
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.26}>
            <figure className="border border-border bg-card">
              <img
                src={fotoAsset.url}
                alt="Joabe Bragança"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
              <figcaption className="label-mono border-t border-border px-4 py-3">
                Joabe Bragança · Analista de TI
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              { k: "Formação", v: "ADS" },
              { k: "Atuação", v: "Suporte N1–N3" },
              { k: "Foco", v: "Dev & Automação" },
              { k: "Stack", v: "React · N8N · Supabase" },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`py-6 md:py-8 ${i > 0 ? "md:border-l md:border-border md:pl-6" : ""} ${i % 2 ? "border-l border-border pl-6 md:pl-6" : ""}`}
              >
                <dt className="label-mono">{s.k}</dt>
                <dd className="mt-2 text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="sobre"
      eyebrow="01 — Sobre"
      title="Uma trajetória construída na prática."
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
        <div className="space-y-6">
          {[
            { k: "Formação", v: "Análise e Desenvolvimento de Sistemas" },
            { k: "Atuação atual", v: "Suporte Técnico PJ — 4P Capital" },
            { k: "Interesse", v: "Suporte, Desenvolvimento e Automação" },
          ].map((m) => (
            <div key={m.k} className="border-t border-border pt-4">
              <div className="label-mono">{m.k}</div>
              <div className="mt-1.5 text-sm">{m.v}</div>
            </div>
          ))}
        </div>
        <FadeUp>
          <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e atuo em suporte
              técnico corporativo, atendendo usuários e ambientes com Microsoft 365,
              Active Directory e ferramentas de Service Desk.
            </p>
            <p>
              Ao longo da carreira passei por diferentes empresas atendendo demandas de
              manutenção, configuração de equipamentos, instalação de sistemas e
              atendimento remoto. Em paralelo, desenvolvi projetos web em WordPress,
              React, HTML, CSS e JavaScript, e trabalhei com automações usando N8N,
              Dify e integrações de APIs.
            </p>
            <p>
              Busco desenvolvimento contínuo, aprofundando conhecimentos em
              desenvolvimento, banco de dados e automação — sempre com atenção à
              organização e à qualidade do atendimento.
            </p>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="02 — Experiência"
      title="Empresas e projetos por onde passei."
    >
      <div className="border-t border-border">
        {EXPERIENCES.map((exp, i) => (
          <FadeUp key={exp.company} delay={i * 0.04}>
            <article className="group grid gap-6 border-b border-border py-8 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
              <div>
                <div className="label-mono">{exp.period ?? "Anterior"}</div>
                <h3 className="mt-2 text-base leading-snug">{exp.company}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{exp.role}</p>
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {exp.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-foreground/30" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="competencias"
      eyebrow="03 — Competências"
      title="Ferramentas e tecnologias que utilizo."
    >
      <div className="grid border-t border-l border-border md:grid-cols-2">
        {SKILLS.map((cat, i) => (
          <FadeUp key={cat.title} delay={i * 0.04}>
            <div className="h-full border-r border-b border-border p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="text-foreground">{cat.icon}</span>
                <h3 className="text-base">{cat.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {cat.items.map((s) => (
                  <span key={s} className="font-mono text-[12px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="04 — Projetos"
      title="Uma seleção do que estou construindo."
    >
      <div className="grid border-t border-l border-border md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div className="flex h-full flex-col border-r border-b border-border">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
                <div className="absolute inset-0 bg-hairgrid opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                {(p.repo || p.demo) && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] underline decoration-border underline-offset-4 hover:decoration-foreground"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] underline decoration-border underline-offset-4 hover:decoration-foreground"
                      >
                        Demonstração <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certificacoes" eyebrow="05 — Certificações" title="Formação complementar.">
      <div className="border-t border-border">
        {CERTIFICATIONS.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.02}>
            <div className="flex items-baseline justify-between gap-6 border-b border-border py-4">
              <div className="flex items-baseline gap-6">
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{c.name}</span>
              </div>
              {c.org && <span className="font-mono text-[11px] text-muted-foreground">{c.org}</span>}
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section id="curriculo" eyebrow="06 — Currículo" title="Um resumo da minha carreira.">
      <FadeUp>
        <div className="flex flex-col items-start justify-between gap-8 border border-border p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-xl">
            <h3 className="text-lg">Joabe Bragança — Analista de TI</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Suporte técnico corporativo (N1–N3), desenvolvimento web e automação de
              processos. Formado em Análise e Desenvolvimento de Sistemas.
            </p>
          </div>
          <a
            href={curriculoAsset.url}
            download="Joabe_Pereira_Braganca_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" /> Download em PDF
          </a>
        </div>
      </FadeUp>
    </Section>
  );
}

function PriceTable() {
  return (
    <Section
      id="valores"
      eyebrow="07 — Tabela de Valores"
      title="Serviços de TI e Ordem de Serviço."
      description="Baixe a tabela completa com valores de manutenção, suporte técnico, instalação de sistemas e demais serviços."
    >
      <FadeUp>
        <div className="flex flex-col items-start justify-between gap-8 border border-border p-8 md:flex-row md:items-center md:p-10">
          <div className="flex items-start gap-5">
            <FileText className="mt-1 h-5 w-5 shrink-0" />
            <div className="max-w-xl">
              <h3 className="text-lg">Tabela de Serviços de TI</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Documento em PDF com a relação de serviços prestados, valores de
                referência e modelo de ordem de serviço para orçamento.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={tabelaAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:border-foreground"
            >
              Visualizar <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={tabelaAsset.url}
              download="Tabela_de_Servicos_de_TI.pdf"
              className="inline-flex items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              <Download className="h-3.5 w-3.5" /> Baixar tabela
            </a>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [status, setStatus] = useState<"idle" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setStatus("error");
      return;
    }
    setStatus("idle");
    const texto =
      `Olá, Joabe! Meu nome é ${form.nome}.\n` +
      `E-mail: ${form.email}\n` +
      (form.assunto ? `Assunto: ${form.assunto}\n\n` : "\n") +
      form.mensagem;
    const url = `https://wa.me/5561996430533?text=${encodeURIComponent(texto)}`;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const inputClass =
    "w-full border-b border-border bg-transparent px-0 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground";

  return (
    <Section
      id="contato"
      eyebrow="08 — Contato"
      title="Vamos conversar."
      description="Preencha o formulário ou fale por qualquer um dos canais abaixo."
    >
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <FadeUp>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Nome">
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </Field>
              <Field label="E-mail">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                  placeholder="voce@email.com"
                />
              </Field>
            </div>
            <Field label="Assunto">
              <input
                type="text"
                value={form.assunto}
                onChange={(e) => setForm((f) => ({ ...f, assunto: e.target.value }))}
                className={inputClass}
                placeholder="Como posso ajudar?"
              />
            </Field>
            <Field label="Mensagem">
              <textarea
                rows={4}
                required
                value={form.mensagem}
                onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                className={`${inputClass} resize-none`}
                placeholder="Escreva sua mensagem..."
              />
            </Field>
            {status === "error" && (
              <p className="font-mono text-[11px] text-destructive">
                Preencha nome, e-mail e mensagem.
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
              >
                Enviar via WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <p className="label-mono">O WhatsApp abrirá com a mensagem preenchida</p>
            </div>
          </form>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="border-t border-border">
            <ContactLink icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="(61) 99643-0533" href="https://wa.me/5561996430533" />
            <ContactLink icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="/in/joabe-braganca" href="https://www.linkedin.com/in/joabe-braganca" />
            <ContactLink icon={<Github className="h-4 w-4" />} label="GitHub" value="@Joabebraganca" href="https://github.com/Joabebraganca" />
            <ContactLink icon={<Mail className="h-4 w-4" />} label="E-mail" value="joabebraganca77@gmail.com" href="mailto:joabebraganca77@gmail.com" />
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="label-mono mb-2 block">{label}</span>
      {children}
    </label>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors hover:bg-secondary"
    >
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground group-hover:text-foreground">{icon}</span>
        <div>
          <div className="label-mono">{label}</div>
          <div className="mt-1 text-sm">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-10 lg:px-10 md:flex-row md:items-center">
        <div className="label-mono">
          © {new Date().getFullYear()} Joabe Bragança — Todos os direitos reservados
        </div>
        <a href="#top" className="label-mono hover:text-foreground">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <PriceTable />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
