const faqs = [
  {
    q: "What kind of systems do you work on?",
    a: "I specialize in enterprise financial systems, including loan management platforms, collateral evaluation systems, authentication services, and internal banking workflows at Commercial Bank of Ethiopia.",
  },
  {
    q: "What is your primary tech stack?",
    a: "I work across React, Next.js, TypeScript on the frontend, and ASP.NET, Django, NestJS, and Node.js on the backend. Databases include PostgreSQL, SQL Server, and MongoDB.",
  },
  {
    q: "Do you work across full-stack or specialize in backend?",
    a: "I work as a full-stack engineer, but I often focus on backend systems, APIs, and secure enterprise architecture for banking and internal platforms.",
  },
  {
    q: "Where are you based?",
    a: "Based in Addis Ababa, Ethiopia, working on enterprise banking systems and academic-related software engineering projects.",
  },
];

export function Faq() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            FAQ
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">
            05 // ANSWERS
          </span>
        </div>

        {/* FAQ List */}
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group py-6 px-2 cursor-pointer"
            >
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