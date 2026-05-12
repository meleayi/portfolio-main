const education = [
  {
    school: "Massachusetts Institute of Technology",
    degree: "M.S. Computer Science — Distributed Systems",
    period: "2017 — 2019",
    blurb: "Thesis on consensus protocols for geo-replicated databases. Teaching assistant for 6.824 Distributed Systems.",
  },
  {
    school: "Carnegie Mellon University",
    degree: "B.S. Computer Science, Minor in Design",
    period: "2013 — 2017",
    blurb: "Graduated with honors. Focus on systems programming, computer graphics, and human-computer interaction.",
  },
  {
    school: "Recurse Center",
    degree: "Programmer-in-Residence",
    period: "Summer 2020",
    blurb: "12-week self-directed retreat exploring compilers, language design, and low-level rendering.",
  },
];

const certs = [
  "AWS Certified Solutions Architect — Professional",
  "Google Cloud Professional Cloud Architect",
  "CKAD — Certified Kubernetes Application Developer",
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-6 md:pb-8 mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            EDUCATION
          </h2>
          <span className="text-muted-foreground font-display italic text-xs sm:text-sm">04 // LEARNING</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {education.map((e, i) => (
            <article
              key={e.school}
              className="card-3d bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-accent tracking-widest">EDU_0{i + 1}</span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{e.period}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-2">{e.school}</h3>
              <p className="text-accent text-sm font-medium mb-4">{e.degree}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{e.blurb}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 p-6 md:p-8 rounded-xl border border-border bg-surface/60">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-2 rounded-full bg-accent animate-blink" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Certifications
            </span>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certs.map((c) => (
              <li
                key={c}
                className="text-sm text-foreground/90 border-l-2 border-accent/50 pl-3 leading-snug"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
