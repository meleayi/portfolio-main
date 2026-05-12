const faqs = [
  {
    q: "What kind of engagements do you take on?",
    a: "Senior IC roles, fractional staff engineering, and 8–12 week sprints to architect or rescue a critical system. I prefer high-trust, async-first teams.",
  },
  {
    q: "What's your typical stack?",
    a: "TypeScript across the frontend, Rust or Go on the backend, Postgres for the source of truth. I match tools to the problem, not the other way around.",
  },
  {
    q: "Do you work with design teams?",
    a: "Yes — I love working directly with designers in Figma, prototyping in code, and treating the design system as a first-class product surface.",
  },
  {
    q: "Where are you based?",
    a: "Berlin, working with teams across EU and US time zones. Open to short on-site sprints when it matters.",
  },
];

export function Faq() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">FAQ</h2>
          <span className="text-muted-foreground font-display italic text-sm">05 // ANSWERS</span>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-6 px-2 cursor-pointer">
              <summary className="flex justify-between items-center gap-6 list-none">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent tracking-widest">
                    0{i + 1}
                  </span>
                  <dt className="font-display text-lg md:text-xl font-bold tracking-tight">
                    {f.q}
                  </dt>
                </div>
                <span className="size-8 rounded-full border border-border grid place-items-center text-accent group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <dd className="mt-4 ml-10 text-muted-foreground leading-relaxed max-w-2xl">
                {f.a}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
