import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-triggered fade + rise. */
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : undefined}>
      <div
        className={
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
        }
      >
        <span className="chip">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--brand)" }}
          />
          {eyebrow}
        </span>
        <h2 className="mt-5 text-3xl leading-[1.12] md:text-[2.75rem]">{title}</h2>
        {description && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}
