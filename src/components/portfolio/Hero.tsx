import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import fotoAsset from "@/assets/joabe-foto.png.asset.json";
import curriculoAsset from "@/assets/curriculo.pdf.asset.json";
import { SOCIAL } from "@/data/portfolio";
import { Reveal } from "./primitives";

const HIGHLIGHTS = [
  "React · Angular · TypeScript",
  "Node.js · NestJS · APIs REST",
  "OpenAI · Gemini · Claude",
  "OWASP · Secure Coding",
  "n8n · Make · Dify",
  "Supabase · PostgreSQL",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Technological backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-techgrid opacity-60" />
        <div className="absolute -top-40 left-0 right-0 h-[46rem] glow-aurora opacity-70" />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand) 60%, transparent), transparent)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                    style={{ background: "var(--cyan)" }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--cyan)" }}
                  />
                </span>
                Disponível para novos projetos
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                <span className="text-gradient">Joabe Bragança</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.14em] text-muted-foreground sm:text-sm">
                Full Stack Developer
                <span className="mx-2 text-[color-mix(in_oklab,var(--brand)_70%,transparent)]">•</span>
                AI Engineer
                <span className="mx-2 text-[color-mix(in_oklab,var(--violet)_70%,transparent)]">•</span>
                Cybersecurity
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                Desenvolvo aplicações modernas, automações inteligentes e soluções
                digitais com foco em segurança, escalabilidade, desempenho e
                experiência do usuário.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(100deg, var(--brand), var(--violet))",
                    boxShadow:
                      "0 14px 40px -18px color-mix(in oklab, var(--brand) 80%, transparent)",
                  }}
                >
                  Ver projetos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={curriculoAsset.url}
                  download="Joabe_Pereira_Braganca_2026.pdf"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-3 text-sm font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <IconLink href={SOCIAL.github} label="GitHub">
                  <Github className="h-4 w-4" />
                </IconLink>
                <IconLink href={SOCIAL.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </IconLink>
                <IconLink href={SOCIAL.whatsapp} label="WhatsApp">
                  <MessageCircle className="h-4 w-4" />
                </IconLink>
                <IconLink href={`mailto:${SOCIAL.email}`} label="E-mail">
                  <Mail className="h-4 w-4" />
                </IconLink>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.3}>
            <motion.figure
              className="panel relative mx-auto max-w-sm overflow-hidden"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--background) 88%, transparent))",
                }}
              />
              <img
                src={fotoAsset.url}
                alt="Retrato de Joabe Bragança"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-20 p-5">
                <div className="label-mono">Brasília · DF — Brasil</div>
                <div className="mt-1 font-display text-base font-semibold text-foreground">
                  Engenharia de software com foco em segurança
                </div>
              </figcaption>
            </motion.figure>
          </Reveal>
        </div>

        {/* Marquee of technologies */}
        <Reveal delay={0.36}>
          <div className="mt-16 flex flex-wrap items-center gap-2 border-t border-border pt-8">
            {HIGHLIGHTS.map((h) => (
              <span key={h} className="chip">
                {h}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)] hover:text-foreground"
    >
      {children}
    </a>
  );
}
