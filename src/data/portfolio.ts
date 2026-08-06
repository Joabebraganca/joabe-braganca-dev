import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Code2,
  Database,
  ShieldCheck,
  ShieldAlert,
  Workflow,
} from "lucide-react";

export const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#competencias", label: "Competências" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#contato", label: "Contato" },
];

export const SOCIAL = {
  whatsapp: "https://wa.me/5561996430533",
  whatsappLabel: "(61) 99643-0533",
  linkedin: "https://www.linkedin.com/in/joabe-braganca",
  linkedinLabel: "/in/joabe-braganca",
  github: "https://github.com/Joabebraganca",
  githubLabel: "@Joabebraganca",
  email: "joabebraganca77@gmail.com",
};

/* ------------------------------ Especialidades ------------------------------ */

export type Specialty = {
  title: string;
  icon: LucideIcon;
  description: string;
  tech: string[];
  accent: "brand" | "violet" | "cyan";
};

export const SPECIALTIES: Specialty[] = [
  {
    title: "Desenvolvimento Full Stack",
    icon: Code2,
    accent: "brand",
    description:
      "Desenvolvimento de aplicações e sistemas web, do front-end à camada de serviços, com componentização e integração via APIs REST.",
    tech: ["JavaScript", "HTML", "CSS", "PHP", "React", "TypeScript", "APIs REST"],
  },
  {
    title: "Inteligência Artificial",
    icon: Bot,
    accent: "violet",
    description:
      "Uso de modelos de linguagem em fluxos de trabalho reais: assistentes, agentes e apoio à automação de atendimento e processos.",
    tech: [
      "OpenAI",
      "Google Gemini",
      "Anthropic",
      "Engenharia de Prompts",
      "Agentes de IA",
    ],
  },
  {
    title: "Automações",
    icon: Workflow,
    accent: "cyan",
    description:
      "Orquestração de fluxos que eliminam tarefas manuais, conectando sistemas internos e serviços externos.",
    tech: ["n8n", "Dify", "APIs", "Webhooks", "Integrações"],
  },
  {
    title: "Desenvolvimento Seguro",
    icon: ShieldCheck,
    accent: "brand",
    description:
      "Segurança considerada desde o desenvolvimento: validação de entrada, autenticação e controle de acesso adequados.",
    tech: [
      "Secure Coding",
      "Boas práticas de desenvolvimento",
      "Validação",
      "Autenticação",
      "Controle de acesso",
    ],
  },
  {
    title: "Cibersegurança",
    icon: ShieldAlert,
    accent: "violet",
    description:
      "Conhecimento em testes de aplicações web, análise de vulnerabilidades e reconhecimento de ambientes.",
    tech: [
      "OWASP ZAP (Zed Attack Proxy)",
      "Google Dorking",
      "Folder Finder",
      "Postman",
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    accent: "cyan",
    description:
      "Administração e suporte a bases de dados utilizadas pelos sistemas internos e aplicações web.",
    tech: ["Supabase"],
  },
];

/* --------------------------- Competências técnicas --------------------------- */

export const COMPETENCIES: { group: string; items: string[] }[] = [
  { group: "Linguagens", items: ["JavaScript", "Python", "PHP", "HTML", "CSS"] },
  {
    group: "Ferramentas",
    items: [
      "GitHub",
      "WordPress",
      "Lovable",
      "n8n",
      "Active Directory",
      "GLPI",
      "AnyDesk",
      "Google Workspace",
      "Microsoft 365",
    ],
  },
  { group: "Banco de Dados", items: ["Supabase"] },
  {
    group: "Inteligência Artificial",
    items: ["OpenAI", "Google Gemini", "Anthropic"],
  },
  {
    group: "Automações",
    items: ["n8n", "Dify", "APIs", "Integrações", "Webhooks"],
  },
];

/* --------------------------------- Projetos -------------------------------- */

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  demo?: string;
  repo?: string;
  status?: "privado" | "desenvolvimento";
};

export const PROJECTS: Project[] = [
  {
    title: "Portfólio Yasmin Bragança",
    subtitle: "Website institucional",
    description:
      "Website institucional desenvolvido para apresentar serviços profissionais, utilizando design moderno, responsividade e boas práticas de desenvolvimento web.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
    features: [
      "Apresentação de serviços profissionais",
      "Design moderno e responsivo",
      "Navegação fluida entre as seções",
      "Boas práticas de desenvolvimento web",
    ],
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=760&fit=crop",
    demo: "https://yasmin-braganca.lovable.app",
  },
  {
    title: "Mota Farias Advocacia",
    subtitle: "Website institucional jurídico",
    description:
      "Website institucional desenvolvido para um escritório de advocacia, priorizando credibilidade, identidade visual profissional, navegação intuitiva, responsividade e excelente experiência do usuário.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
    features: [
      "Identidade visual profissional e sóbria",
      "Apresentação das áreas de atuação",
      "Navegação intuitiva e responsiva",
      "Contato direto por WhatsApp",
    ],
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=760&fit=crop",
    demo: "https://teste-joabe.lovable.app",
  },
];

/* ------------------------------- Certificações ------------------------------ */

export const CERTIFICATIONS = [
  { name: "Desenvolvedor Full Stack", org: "UniCEUB" },
  { name: "Python Development", org: "FIAP" },
  { name: "Cybersecurity", org: "FIAP" },
  { name: "Introdução à Cibersegurança", org: "Cisco Networking Academy" },
  { name: "Segurança da Informação", org: "Fundação Bradesco" },
  { name: "E-commerce", org: "FGV" },
  { name: "Engenharia de Prompts", org: "Formação complementar" },
  { name: "Automações No-Code", org: "Formação complementar" },
  { name: "CRM", org: "Formação complementar" },
];

/* --------------------------------- Timeline -------------------------------- */

export type TimelineKind = "experiencia" | "formacao" | "certificacao" | "projeto";

export type TimelineEntry = {
  kind: TimelineKind;
  period: string;
  title: string;
  org: string;
  highlight?: boolean;
  items?: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    kind: "experiencia",
    period: "Jul/2026 — Atual",
    title: "Suporte Técnico PJ",
    org: "4P Capital Investment Holding",
    highlight: true,
    items: [
      "Suporte técnico N1, N2 e N3 aos colaboradores das empresas do grupo",
      "Administração da infraestrutura de TI",
      "Desenvolvimento e manutenção de sistemas internos",
      "Integração entre sistemas e APIs",
      "Automação de processos corporativos",
      "Administração de bancos de dados",
      "Documentação técnica e padronização de processos",
      "Implantação de soluções e participação em projetos de transformação digital",
    ],
  },
  {
    kind: "experiencia",
    period: "Anterior",
    title: "Técnico de Operação e Serviços",
    org: "Central IT",
    items: [
      "Suporte técnico N2 e atendimento corporativo",
      "Hardware, software, Microsoft 365 e Active Directory",
      "Service Desk presencial e remoto",
    ],
  },
  {
    kind: "experiencia",
    period: "Anterior",
    title: "Analista de Suporte Técnico",
    org: "SábioADV",
    items: [
      "Atendimento aos usuários e análise de tickets",
      "Ajustes e suporte em Supabase",
    ],
  },
  {
    kind: "experiencia",
    period: "Anterior",
    title: "Suporte Técnico / Desenvolvimento Web",
    org: "Light Comunicações",
    items: [
      "Manutenção de websites em WordPress e React",
      "Automações com n8n e Dify",
      "Suporte a lojas de e-commerce",
    ],
  },
  {
    kind: "experiencia",
    period: "Anterior",
    title: "Técnico de Suporte",
    org: "Aliança Assessoria",
    items: [
      "Manutenção preventiva e corretiva",
      "Backup, upgrades e instalação de sistemas",
    ],
  },
  {
    kind: "experiencia",
    period: "Anterior",
    title: "Estagiário de TI",
    org: "Dunice e Marcon Advogados Associados",
    items: ["Suporte aos usuários e configuração de equipamentos"],
  },
  {
    kind: "experiencia",
    period: "Anterior",
    title: "Suporte Técnico",
    org: "Edições CNBB",
    items: ["Atendimento aos usuários e suporte a equipamentos e sistemas"],
  },
  {
    kind: "formacao",
    period: "Concluído",
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Graduação",
  },
];

/* -------------------------------- Estatísticas ------------------------------ */

const TECHNOLOGIES = new Set(
  SPECIALTIES.flatMap((s) => s.tech).concat(PROJECTS.flatMap((p) => p.tech)),
);
const TOOLS = new Set(
  COMPETENCIES.find((c) => c.group === "Ferramentas")?.items ?? [],
);

export const STATS = [
  {
    label: "Experiências profissionais",
    value: TIMELINE.filter((t) => t.kind === "experiencia").length,
    suffix: "",
  },
  { label: "Projetos publicados", value: PROJECTS.length, suffix: "" },
  { label: "Certificações", value: CERTIFICATIONS.length, suffix: "" },
  { label: "Tecnologias", value: TECHNOLOGIES.size, suffix: "" },
  { label: "Ferramentas", value: TOOLS.size, suffix: "" },
];
