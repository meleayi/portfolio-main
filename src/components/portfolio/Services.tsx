const services = [
  {
    n: "01",
    title: "Distributed Systems",
    desc: "Designing fault-tolerant backend architectures, event-driven pipelines, and APIs built to scale to millions of requests.",
    bullets: ["Microservices", "Event sourcing", "Observability"],
  },
  {
    n: "02",
    title: "Frontend Engineering",
    desc: "Production-grade web apps with React, Next.js, and TypeScript — fast, accessible, and pixel-faithful to design.",
    bullets: ["React / Next.js", "Design systems", "Performance"],
  },
  {
    n: "03",
    title: "Spatial & WebGL",
    desc: "Custom rendering, shaders, and immersive interfaces that turn data into something you can feel.",
    bullets: ["Three.js", "GLSL", "Motion design"],
  },
  {
    n: "04",
    title: "Cloud & DevOps",
    desc: "Pragmatic CI/CD, infrastructure as code, and observability that make teams ship faster with fewer pages.",
    bullets: ["AWS / GCP", "Terraform", "GitHub Actions"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            EXPERTISE
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">03 // SERVICES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.n}
              className="group bg-surface p-8 md:p-10 hover:bg-surface-2 transition-colors relative"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-accent tracking-widest">{s.n}</span>
                <div className="size-10 rounded-md border border-border grid place-items-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                  <div className="size-3 bg-accent rounded-sm shadow-[0_0_12px_rgba(0,245,255,0.7)]" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 rounded"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
