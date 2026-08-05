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
      "Construção de aplicações web completas — do front-end à camada de serviços — com componentização, tipagem estática e APIs bem documentadas.",
    tech: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "NestJS",
      "APIs REST",
    ],
  },
  {
    title: "Inteligência Artificial",
    icon: Bot,
    accent: "violet",
    description:
      "Integração de modelos de linguagem em produtos reais: agentes, assistentes internos, classificação e geração de conteúdo com controle de custo e qualidade.",
    tech: [
      "OpenAI",
      "Google Gemini",
      "Anthropic Claude",
      "Prompt Engineering",
      "AI Agents",
    ],
  },
  {
    title: "Desenvolvimento Seguro",
    icon: ShieldCheck,
    accent: "cyan",
    description:
      "Segurança aplicada desde o design: validação rigorosa de entrada, autenticação e autorização corretas e mitigação das falhas mais exploradas.",
    tech: [
      "Secure Coding",
      "OWASP Top 10",
      "Validação de Entrada",
      "Autenticação",
      "Autorização",
      "Boas práticas de desenvolvimento",
    ],
  },
  {
    title: "Cibersegurança",
    icon: ShieldAlert,
    accent: "brand",
    description:
      "Testes em aplicações web, análise de superfícies de ataque e reconhecimento — traduzindo achados em correções concretas no código.",
    tech: [
      "OWASP ZAP",
      "Google Dorking",
      "Folder Finder",
      "Burp Suite Community",
      "Nmap",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Automações",
    icon: Workflow,
    accent: "violet",
    description:
      "Orquestração de fluxos que eliminam trabalho manual: integrações entre sistemas, webhooks, notificações e atendimento automatizado.",
    tech: [
      "n8n",
      "Make",
      "Dify",
      "OpenAI",
      "Gemini",
      "Anthropic",
      "APIs REST",
      "Webhooks",
      "WhatsApp API",
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    accent: "cyan",
    description:
      "Modelagem relacional, políticas de acesso, consultas eficientes e administração de bases em ambientes corporativos.",
    tech: ["Supabase", "PostgreSQL", "MySQL"],
  },
];

/* --------------------------------- Projetos -------------------------------- */

export type ProjectCategory =
  | "Full Stack"
  | "IA"
  | "Automação"
  | "Websites"
  | "Cibersegurança";

export type Project = {
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  description: string;
  tech: string[];
  features: string[];
  challenge: string;
  solution: string;
  image: string;
  demo?: string;
  repo?: string;
};

export const PROJECT_FILTERS = [
  "Todos",
  "Full Stack",
  "IA",
  "Automação",
  "Websites",
  "Cibersegurança",
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Mota Farias Advocacia",
    subtitle: "Site institucional jurídico",
    category: ["Websites", "Full Stack"],
    description:
      "Presença digital para escritório de advocacia em Brasília, com identidade sóbria, apresentação de áreas de atuação e foco em conversão direta por WhatsApp.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      "Apresentação de áreas de atuação",
      "Conversão via WhatsApp com mensagem pré-preenchida",
      "Layout responsivo e SEO otimizado",
    ],
    challenge:
      "Transmitir credibilidade institucional sem cair em templates genéricos de advocacia, mantendo carregamento rápido em conexões móveis.",
    solution:
      "Design system próprio com tipografia sóbria, imagens otimizadas, componentes reutilizáveis e CTA único e persistente ao longo da página.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=760&fit=crop",
    demo: "https://teste-joabe.lovable.app",
  },
  {
    title: "Portfólio Yasmin Bragança",
    subtitle: "Portfólio pessoal sob medida",
    category: ["Websites", "Full Stack"],
    description:
      "Portfólio digital elegante desenvolvido para apresentar trajetória, competências e trabalhos, com foco em leitura confortável e navegação fluida.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Seções de trajetória e competências",
      "Animações de scroll reveal leves",
      "Totalmente responsivo",
    ],
    challenge:
      "Criar uma identidade visual autoral e memorável mantendo desempenho alto e animações que não atrapalhem a leitura.",
    solution:
      "Paleta e tipografia personalizadas, animações discretas com respeito a `prefers-reduced-motion` e componentes enxutos e reaproveitáveis.",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=760&fit=crop",
    demo: "https://yasmin-braganca.lovable.app",
  },
  {
    title: "Agentes de Atendimento com IA",
    subtitle: "Automação conversacional",
    category: ["IA", "Automação"],
    description:
      "Fluxos de atendimento automatizado integrando WhatsApp, modelos de linguagem e base de conhecimento interna para triagem e resposta de solicitações.",
    tech: ["n8n", "Dify", "OpenAI", "WhatsApp API", "Webhooks"],
    features: [
      "Triagem automática de solicitações",
      "Respostas com base em conhecimento interno",
      "Escalonamento para atendimento humano",
      "Registro e histórico das conversas",
    ],
    challenge:
      "Garantir respostas confiáveis sem alucinações e controlar o custo por conversa em um volume alto de mensagens.",
    solution:
      "Prompts com contexto restrito, validação de intenção antes da chamada ao modelo e regras determinísticas para os casos mais frequentes.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=760&fit=crop",
  },
  {
    title: "Integrações e APIs Corporativas",
    subtitle: "Backoffice conectado",
    category: ["Full Stack", "Automação"],
    description:
      "Integrações entre sistemas internos de um grupo de empresas, sincronizando dados, disparando notificações e eliminando lançamentos manuais.",
    tech: ["Node.js", "APIs REST", "PostgreSQL", "Supabase", "Webhooks"],
    features: [
      "Sincronização de dados entre sistemas",
      "Webhooks com reprocessamento em falhas",
      "Notificações automáticas para os times",
      "Logs e rastreabilidade das execuções",
    ],
    challenge:
      "Lidar com APIs de terceiros instáveis e evitar duplicidade de registros em execuções concorrentes.",
    solution:
      "Idempotência por chave de negócio, fila de reprocessamento com backoff e monitoramento das execuções com alertas.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=760&fit=crop",
  },
  {
    title: "Análise de Superfície de Ataque",
    subtitle: "Avaliação de segurança web",
    category: ["Cibersegurança"],
    description:
      "Avaliações de segurança em aplicações web: reconhecimento, mapeamento de endpoints expostos e verificação das falhas do OWASP Top 10.",
    tech: ["OWASP ZAP", "Burp Suite", "Nmap", "Google Dorking", "Postman"],
    features: [
      "Reconhecimento e enumeração de diretórios",
      "Testes de autenticação e autorização",
      "Verificação de validação de entrada",
      "Relatório com severidade e correção sugerida",
    ],
    challenge:
      "Transformar achados técnicos em ações priorizadas e compreensíveis para times de desenvolvimento e gestão.",
    solution:
      "Relatórios com classificação de risco, prova de conceito reprodutível e recomendação de correção no nível do código.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=760&fit=crop",
  },
];

/* ------------------------------- Certificações ------------------------------ */

export const CERTIFICATIONS = [
  { name: "Desenvolvedor Full Stack", org: "UniCEUB" },
  { name: "Python Development", org: "FIAP" },
  { name: "Cybersecurity", org: "FIAP" },
  {
    name: "Introdução à Cibersegurança",
    org: "Cisco Networking Academy",
  },
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
  items?: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    kind: "experiencia",
    period: "Jul/2026 — Atual",
    title: "Suporte Técnico PJ",
    org: "4P Capital Investment Holding",
    items: [
      "Suporte técnico N1, N2 e N3 aos usuários das empresas do grupo",
      "Administração e manutenção de toda a infraestrutura de TI",
      "Desenvolvimento, manutenção e evolução de sistemas internos",
      "Integração entre sistemas e APIs e automação de processos corporativos",
      "Administração e suporte a bancos de dados",
      "Gestão de usuários, acessos, permissões e ativos de TI",
      "Documentação técnica e padronização de processos",
    ],
  },
  {
    kind: "projeto",
    period: "2026",
    title: "Portfólio Yasmin Bragança",
    org: "Projeto autoral",
    items: ["React, TypeScript e Tailwind CSS com animações leves"],
  },
  {
    kind: "certificacao",
    period: "2025",
    title: "Introdução à Cibersegurança",
    org: "Cisco Networking Academy",
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
      "E-commerce em Shopify e WooCommerce",
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
    org: "Dunice e Marcon Advogados",
    items: ["Suporte aos usuários e configuração de equipamentos"],
  },
  {
    kind: "formacao",
    period: "Concluído",
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Graduação",
  },
];

/* -------------------------------- Estatísticas ------------------------------ */

export const STATS = [
  { label: "Projetos desenvolvidos", value: 24, suffix: "+" },
  { label: "Certificações", value: 9, suffix: "" },
  { label: "Tecnologias", value: 35, suffix: "+" },
  { label: "Ferramentas", value: 20, suffix: "+" },
  { label: "Horas de estudo", value: 2500, suffix: "+" },
  { label: "Soluções entregues", value: 60, suffix: "+" },
];
