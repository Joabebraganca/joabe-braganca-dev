import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SOCIAL } from "@/data/portfolio";
import { Logo } from "./Logo";

const LINKS = [
  { icon: Github, href: SOCIAL.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: SOCIAL.whatsapp, label: "WhatsApp" },
  { icon: Mail, href: `mailto:${SOCIAL.email}`, label: "E-mail" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-techgrid opacity-30" />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="min-w-0">
            <Logo />
            <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
              Construindo soluções digitais seguras, inteligentes e escaláveis.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)] hover:text-foreground"
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="label-mono">
            © {new Date().getFullYear()} Joabe Bragança — Todos os direitos reservados
          </p>
          <a href="#top" className="label-mono transition-colors hover:text-foreground">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
