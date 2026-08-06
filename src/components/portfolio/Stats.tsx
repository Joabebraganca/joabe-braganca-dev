import { STATS } from "@/data/portfolio";
import { useCountUp } from "@/hooks/use-count-up";
import { Reveal } from "./primitives";

export function Stats() {
  return (
    <section aria-label="Estatísticas" className="relative py-14 md:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dotgrid opacity-40" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="divider-glow" />
        <dl className="grid grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div>
                <dd className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-[12.5px] leading-snug text-muted-foreground">
                  {s.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
        <div className="divider-glow" />
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <span ref={ref} className="text-gradient">
      {current.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
