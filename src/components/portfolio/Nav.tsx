import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/data/portfolio";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.01, 0.2, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-6 lg:px-10">
        <a href="#top" className="min-w-0" aria-label="Início">
          <Logo />
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                aria-current={active === n.href ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 text-[13px] transition-colors ${
                  active === n.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="group hidden items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-[13px] font-medium transition-colors hover:border-[color-mix(in_oklab,var(--brand)_50%,transparent)] hover:bg-secondary sm:inline-flex"
          >
            Fale comigo
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass border-t lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-sm text-muted-foreground last:border-0 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
