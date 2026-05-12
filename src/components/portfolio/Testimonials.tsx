const quotes = [
  {
    quote:
      "Consistently delivers secure and scalable banking solutions. His work on loan and collateral systems significantly improved internal workflow efficiency.",
    name: "Internal Systems Team",
    role: "Commercial Bank of Ethiopia",
  },
  {
    quote:
      "Strong full-stack engineer with solid understanding of enterprise architecture. Able to translate complex business requirements into working systems quickly.",
    name: "Project Lead",
    role: "Digital Factory Division, CBE",
  },
  {
    quote:
      "Demonstrates excellent problem-solving skills and clean code practices. His systems are reliable, maintainable, and production-ready.",
    name: "Academic Colleague",
    role: "Bonga University",
  },
];

export function Testimonials() {
  return (
        <section className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border bg-surface/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            TRUST & COLLABORATION
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">
            05 // FEEDBACK
          </span>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="card-3d bg-surface border border-border rounded-xl p-8 flex flex-col gap-6"
            >
              <div className="text-accent font-display text-5xl leading-none">
                "
              </div>

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
