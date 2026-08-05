import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SOCIAL } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./primitives";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SOCIAL.whatsappLabel,
    href: SOCIAL.whatsapp,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: SOCIAL.linkedinLabel,
    href: SOCIAL.linkedin,
  },
  { icon: Github, label: "GitHub", value: SOCIAL.githubLabel, href: SOCIAL.github },
  {
    icon: Mail,
    label: "E-mail",
    value: SOCIAL.email,
    href: `mailto:${SOCIAL.email}`,
  },
];

export function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }
    setError("");
    setSending(true);

    const texto =
      `Olá, Joabe! Meu nome é ${form.nome}.\n` +
      `E-mail: ${form.email}\n` +
      (form.assunto ? `Assunto: ${form.assunto}\n\n` : "\n") +
      form.mensagem;

    const a = document.createElement("a");
    a.href = `${SOCIAL.whatsapp}?text=${encodeURIComponent(texto)}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.setTimeout(() => setSending(false), 900);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--brand)_60%,transparent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand)_25%,transparent)]";

  return (
    <Section id="contato">
      <SectionHeader
        eyebrow="07 — Contato"
        title={
          <>
            Vamos construir algo <span className="text-gradient">sólido</span>.
          </>
        }
        description="Envie sua mensagem pelo formulário ou fale diretamente por um dos canais abaixo."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="panel p-6 md:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" htmlFor="c-nome">
                <input
                  id="c-nome"
                  type="text"
                  autoComplete="name"
                  value={form.nome}
                  onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </Field>
              <Field label="E-mail" htmlFor="c-email">
                <input
                  id="c-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                  placeholder="voce@email.com"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Assunto" htmlFor="c-assunto">
                <input
                  id="c-assunto"
                  type="text"
                  value={form.assunto}
                  onChange={(e) => setForm((f) => ({ ...f, assunto: e.target.value }))}
                  className={inputClass}
                  placeholder="Como posso ajudar?"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Mensagem" htmlFor="c-mensagem">
                <textarea
                  id="c-mensagem"
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                  className={`${inputClass} resize-none`}
                  placeholder="Descreva seu projeto ou oportunidade..."
                />
              </Field>
            </div>

            <p aria-live="polite" className="mt-4 min-h-5 font-mono text-[11px] text-destructive">
              {error}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                style={{
                  background: "linear-gradient(100deg, var(--brand), var(--violet))",
                }}
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Abrindo WhatsApp
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              <p className="label-mono">O WhatsApp abrirá com a mensagem preenchida</p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid content-start gap-4">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover group flex items-center justify-between gap-4 p-5"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border"
                    style={{
                      background: "color-mix(in oklab, var(--brand) 14%, transparent)",
                    }}
                  >
                    <c.icon className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="label-mono block">{c.label}</span>
                    <span className="mt-1 block truncate text-sm">{c.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label-mono mb-2 block">
        {label}
      </label>
      {children}
    </div>
  );
}
