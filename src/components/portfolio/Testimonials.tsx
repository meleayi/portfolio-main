const quotes = [
  {
    quote:
      "Alex rebuilt our ingestion pipeline and cut p99 latency by 80%. He thinks about systems the way most engineers think about code.",
    name: "Maya Chen",
    role: "VP Engineering, Stratos AI",
  },
  {
    quote:
      "One of the rare engineers who can move from a Figma file to a Rust service without dropping the thread. Genuine craftsman.",
    name: "Jordan Pillai",
    role: "Co-founder, Linear Flux",
  },
  {
    quote:
      "He shipped our entire spatial UI in six weeks. It still feels like the future every time I open it.",
    name: "Sasha Iverson",
    role: "Design Lead, Prism Logic",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            TRUSTED BY <br className="md:hidden" /> BUILDERS
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">04 // VOICES</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="card-3d bg-surface border border-border rounded-xl p-8 flex flex-col gap-6"
            >
              <div className="text-accent font-display text-5xl leading-none">"</div>
              <blockquote className="text-foreground/90 leading-relaxed flex-1">
                {q.quote}
              </blockquote>
              <figcaption className="pt-6 border-t border-border">
                <div className="font-display font-bold">{q.name}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">
                  {q.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
