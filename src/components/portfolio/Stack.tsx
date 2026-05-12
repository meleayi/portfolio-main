const items = [
  "TYPESCRIPT", "REACT", "NEXT.JS", "RUST", "GO",
  "POSTGRES", "DOCKER", "AWS", "WEBGL", "TAILWIND",
];

export function Stack() {
  const loop = [...items, ...items];
  return (
    <section id="stack" className="py-20 border-y border-border bg-surface/30 overflow-hidden">
      <div className="flex whitespace-nowrap gap-16 animate-marquee">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-foreground/60">
              {t}
            </span>
            <span className="text-accent text-4xl md:text-6xl">●</span>
          </div>
        ))}
      </div>
    </section>
  );
}
