type PhotoCodeProps = {
  code: string;
  tone?: "light" | "dark";
};

export function PhotoCode({ code, tone = "light" }: PhotoCodeProps) {
  const toneClass =
    tone === "dark"
      ? "bg-ink/8 text-ink/45 ring-ink/8"
      : "bg-white/58 text-ink/54 ring-white/45";

  return (
    <span
      className={`pointer-events-none absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ring-1 backdrop-blur-md ${toneClass}`}
      aria-hidden="true"
    >
      {code}
    </span>
  );
}
