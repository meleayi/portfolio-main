const roles = [
  {
    company: "Commercial Bank of Ethiopia",
    title: "Software Developer",
    period: "2023 — Present",
    location: "Addis Ababa, Ethiopia",
    blurb:
      "Developing and maintaining secure, scalable enterprise web applications for core banking operations. Working with modern full-stack technologies to build systems such as loan management, collateral evaluation, authentication, and internal banking workflows.",
  },
  {
    company: "Bonga University",
    title: "Lecturer",
    period: "2020 — 2023",
    location: "Bonga, Ethiopia",
    blurb:
      "Taught core computer science courses including Algorithms, Operating Systems, Databases, and Emerging Technologies. Delivered practical programming instruction using C#, C++, and PHP with focus on real-world application development.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            EXPERIENCE
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">
            02 // CAREER
          </span>
        </div>

        {/* Timeline */}
        <div className="space-y-14">
          {roles.map((r, i) => (
            <div
              key={r.company}
              className="relative pl-8 border-l border-border group"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-background shadow-[0_0_16px_rgba(0,245,255,0.6)]" />

              {/* Header row */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    {r.title}
                  </h3>
                  <p className="text-accent font-mono text-xs tracking-widest mt-1">
                    {r.company} • {r.location}
                  </p>
                </div>

                <span className="text-xs font-mono text-muted-foreground tabular-nums">
                  {r.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {r.blurb}
              </p>

              {/* Role index */}
              <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                ROLE_0{roles.length - i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
