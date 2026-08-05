import markSrc from "@/assets/jb-mark.png";

/** Horizontal lockup: symbol + wordmark. Works on light and dark surfaces. */
export function Logo({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8" />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Joabe Bragança
          </span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Full Stack · AI · Security
          </span>
        </span>
      )}
    </span>
  );
}

/** Reduced symbol-only version. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={markSrc}
      alt="Símbolo JB — Joabe Bragança"
      width={1024}
      height={1024}
      className={`${className} shrink-0 object-contain`}
    />
  );
}
