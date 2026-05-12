const roles = [
  {
    company: "Stratos AI",
    title: "Senior Software Engineer",
    period: "2022 — Present",
    blurb: "Leading the infrastructure team optimizing training clusters and data pipelines for large language models at scale.",
  },
  {
    company: "Linear Flux",
    title: "Full Stack Engineer",
    period: "2020 — 2022",
    blurb: "Shipped internal tooling, automated deployment workflows, and design systems across hybrid cloud environments.",
  },
  {
    company: "Core Protocol",
    title: "Systems Engineer",
    period: "2019 — 2020",
    blurb: "Implemented peer-to-peer networking protocols for decentralized storage and content addressable systems.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">EXPERIENCE</h2>
          <span className="text-muted-foreground font-display italic text-sm">02 // CAREER</span>
        </div>
        <div className="space-y-12">
          {roles.map((r, i) => (
            <div key={r.company} className="relative pl-8 border-l border-border group">
              <div className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-background shadow-[0_0_16px_rgba(0,245,255,0.6)]" />
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="font-display text-xl font-bold">
                  {r.title} <span className="text-accent">— {r.company}</span>
                </h3>
                <span className="text-xs font-mono text-muted-foreground tabular-nums">{r.period}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{r.blurb}</p>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                ROLE_0{roles.length - i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
