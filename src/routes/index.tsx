import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Code2,
  Headphones,
  Database,
  Workflow,
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  Sparkles,
  FileText,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import curriculoAsset from "@/assets/curriculo.pdf.asset.json";
import tabelaAsset from "@/assets/tabela-servicos.pdf.asset.json";
import logoAsset from "@/assets/logo-joabe.png.asset.json";

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
    company: "Central IT",
    role: "Técnico de Operação e Serviços",
    period: "Atual",
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
    icon: <Headphones className="h-5 w-5" />,
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
    icon: <Code2 className="h-5 w-5" />,
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
    icon: <Database className="h-5 w-5" />,
    items: ["Supabase", "SQL (conhecimento)"],
  },
  {
    title: "Automação",
    icon: <Workflow className="h-5 w-5" />,
    items: ["N8N", "Dify", "Integrações de APIs", "Engenharia de Prompts"],
  },
];

const PROJECTS = [
  {
    title: "Projeto em breve",
    description:
      "Espaço reservado para futuros projetos de desenvolvimento web e automação.",
    tech: ["React", "TypeScript", "Tailwind"],
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

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_60%)]" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-primary/15 blur-[140px]" />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-border">
            <img src={logoAsset.url} alt="Logo Joabe Bragança" className="h-full w-full object-contain" />
          </span>
          <span className="hidden sm:inline">Joabe Bragança</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Falar comigo <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <button
          className="md:hidden rounded-md border border-border p-2 text-muted-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
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
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <FadeUp>
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        )}
      </FadeUp>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- Sections ------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-36">
      <FadeUp>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          Disponível para novas oportunidades
        </div>
      </FadeUp>

      <div className="mt-8 grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Joabe <span className="text-gradient">Bragança</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-4 text-lg text-foreground/90 md:text-xl">
              Analista de Tecnologia da Informação
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Formado em Análise e Desenvolvimento de Sistemas, com experiência em
              suporte técnico corporativo, desenvolvimento web e automação de
              processos.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.58_0.22_260/0.6)] transition-transform hover:scale-[1.02]"
              >
                Ver Projetos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#curriculo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
              >
                <Download className="h-4 w-4" /> Download do Currículo
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> Entrar em Contato
              </a>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-cyan/20 to-transparent blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-border glass md:h-72 md:w-72">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-transparent to-cyan/20">
                <span className="font-display text-6xl font-semibold text-gradient">JB</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-background/60 px-3 py-2 text-[11px] text-muted-foreground backdrop-blur">
                Foto profissional — placeholder
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.35}>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "Formação", v: "ADS" },
            { k: "Atuação", v: "Suporte N2" },
            { k: "Foco", v: "Dev & Automação" },
            { k: "Stack", v: "React · N8N · Supabase" },
          ].map((s) => (
            <div key={s.k} className="bg-card/60 px-5 py-4 backdrop-blur">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-display text-sm font-medium">{s.v}</div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title="Uma trajetória construída na prática."
      description="Comecei na Tecnologia da Informação com foco em suporte técnico e, ao longo do tempo, ampliei minha atuação para desenvolvimento web e automação de processos."
    >
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <FadeUp>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e atuo como
              Técnico de Operação e Serviços (Suporte N2), prestando suporte técnico
              corporativo a usuários e ambientes com Microsoft 365, Active Directory
              e ferramentas de Service Desk.
            </p>
            <p>
              Ao longo da carreira passei por diferentes empresas atendendo demandas
              de manutenção, configuração de equipamentos, instalação de sistemas e
              atendimento remoto. Em paralelo, desenvolvi projetos web em WordPress,
              React, HTML, CSS e JavaScript, e trabalhei com automações usando N8N,
              Dify e integrações de APIs.
            </p>
            <p>
              Busco desenvolvimento contínuo, aprendendo novas ferramentas e
              aprofundando conhecimentos em desenvolvimento, banco de dados e
              automação — sempre com atenção à organização e à qualidade do
              atendimento.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-medium">Formação</div>
                <div className="text-xs text-muted-foreground">Análise e Desenvolvimento de Sistemas</div>
              </div>
            </div>
            <div className="my-5 h-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan ring-1 ring-cyan/30">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-medium">Atuação atual</div>
                <div className="text-xs text-muted-foreground">Técnico de Operação e Serviços (N2)</div>
              </div>
            </div>
            <div className="my-5 h-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-medium">Interesse</div>
                <div className="text-xs text-muted-foreground">Suporte, Desenvolvimento e Automação</div>
              </div>
            </div>
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
      eyebrow="Experiência"
      title="Empresas e projetos por onde passei."
      description="Uma linha do tempo com as principais atuações profissionais."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <FadeUp key={exp.company} delay={i * 0.05}>
              <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                  <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/20 md:left-1/2" />
                  <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 md:justify-end md:gap-4">
                      <h3 className="font-display text-lg font-semibold">{exp.company}</h3>
                      {exp.period && (
                        <span className="rounded-full border border-border bg-card/60 px-2 py-0.5 text-[11px] text-muted-foreground">
                          {exp.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-primary">{exp.role}</p>
                    <ul className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${i % 2 ? "" : "md:text-right"}`}>
                      {exp.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 md:justify-end">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan md:order-2" />
                          <span className="md:order-1">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="competencias"
      eyebrow="Competências"
      title="Ferramentas e tecnologias que utilizo."
      description="Organizadas por área de atuação."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((cat, i) => (
          <FadeUp key={cat.title} delay={i * 0.05}>
            <div className="glass group h-full rounded-2xl p-6 transition-all hover:border-primary/40">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-primary/25">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-medium">{cat.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-foreground/85"
                  >
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
      eyebrow="Projetos"
      title="Uma seleção do que estou construindo."
      description="Espaços reservados para futuros projetos — em breve com casos reais."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <FadeUp key={i} delay={i * 0.05}>
            <div className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-0.5 hover:border-primary/40">
              <div className="relative h-40 overflow-hidden border-b border-border bg-gradient-to-br from-primary/25 via-background to-cyan/20">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                    Placeholder
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-medium">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-card"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demonstração
                  </a>
                </div>
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
    <Section
      id="certificacoes"
      eyebrow="Certificações"
      title="Formação complementar."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.03}>
            <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:border-primary/40">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan ring-1 ring-cyan/30">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-medium">{c.name}</div>
                {c.org && <div className="mt-0.5 text-xs text-muted-foreground">{c.org}</div>}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section
      id="curriculo"
      eyebrow="Currículo"
      title="Um resumo da minha carreira."
      description="Baixe o currículo em PDF para conhecer minha trajetória em detalhes."
    >
      <FadeUp>
        <div className="glass flex flex-col items-start justify-between gap-6 rounded-2xl p-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h3 className="font-display text-xl font-medium">Joabe Bragança — Analista de TI</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Suporte técnico corporativo (N1/N2), desenvolvimento web e automação de
              processos. Formado em Análise e Desenvolvimento de Sistemas.
            </p>
          </div>
          <a
            href={curriculoAsset.url}
            download="Joabe_Pereira_Braganca_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.58_0.22_260/0.6)] transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" /> Download em PDF
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
      eyebrow="Tabela de Valores"
      title="Serviços de TI e Ordem de Serviço."
      description="Baixe a tabela completa com valores de manutenção, suporte técnico, instalação de sistemas e demais serviços."
    >
      <FadeUp>
        <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <FileText className="h-6 w-6" />
              </div>
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-medium">
                  Tabela de Serviços de TI
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Documento em PDF com a relação de serviços prestados, valores
                  de referência e modelo de ordem de serviço para orçamento.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={tabelaAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" /> Visualizar
              </a>
              <a
                href={tabelaAsset.url}
                download="Tabela_de_Servicos_de_TI.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.58_0.22_260/0.6)] transition-transform hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" /> Baixar tabela
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}


function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar."
      description="Preencha o formulário ou fale por qualquer um dos canais abaixo."
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <FadeUp>
          <form
            className="glass space-y-4 rounded-2xl p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome">
                <input
                  type="text"
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Seu nome"
                />
              </Field>
              <Field label="E-mail">
                <input
                  type="email"
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="voce@email.com"
                />
              </Field>
            </div>
            <Field label="Assunto">
              <input
                type="text"
                className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Como posso ajudar?"
              />
            </Field>
            <Field label="Mensagem">
              <textarea
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Escreva sua mensagem..."
              />
            </Field>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
            >
              Enviar mensagem <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-3">
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
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
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
      className="glass group flex items-center justify-between rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
    >
      <div className="flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
          {icon}
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="text-sm text-foreground">{value}</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Joabe Bragança. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4">
          <a href="#top" className="hover:text-foreground">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
