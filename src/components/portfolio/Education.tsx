import { link } from "fs";

const education = [
  {
    school: "Bahir Dar University",
    degree: "M.Sc. Computer Science",
    period: "2021 — 2023",
    location: "Bahir Dar, Ethiopia",
    blurb:
      "Master’s research focused on detecting hate speech in Amharic using multimodal analysis of social media content, including memes and text. Research contributed to publication in Torino, Italy.",
    thesis: "multimodal hate speech detection",
    link: "https://scholar.google.com/scholar?q=M.%20Ayichlie%20Jigar%2C%20A.A.%20Ayele%2C%20S.M.%20Yimam%2C%20and%20C.%20Biemann%2C%20%E2%80%9CDetecting%20hate%20speech%20in%20Amharic%20using%20multimodal%20analysis%20of%20social%20Media%20memes.%E2%80%9D%20%5BOnline%5D.%20Available%3A%20https%3A%2F%2Ft.me%2FhateSpeech_image_data_c."
  },
  {
    school: "University of Gondar",
    degree: "B.Sc. Computer Science",
    period: "2015 — 2019",
    location: "Gondar, Ethiopia",
    blurb:
      "Focused on core computer science fundamentals including Data Structures, Algorithms, Database Systems, and Software Engineering. Developed a Student Management System as a final-year project.",
  },
];

const certs = [
  "Certified Full-Stack Developer — Udacity",
  "React Native & ICT4D Certification",
  "Teaching and Curriculum Design Certification — Bonga University",
  "Full-Stack Web Development (React, Node.js, .NET)",
  "Secure Authentication Systems (JWT, OAuth, LDAP)",
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end border-b border-border pb-8 mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            EDUCATION
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">
            04 // LEARNING
          </span>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((e) => (
            <article
              key={e.school}
              className="card-3d bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
                  {e.period}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground tracking-widest">
                  {e.location}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                {e.school}
              </h3>

              <p className="text-accent text-sm font-medium">{e.degree}</p>

              {/* Thesis Badge (ONLY for Masters) */}
              {"thesis" in e && (
                <a 
                target="_blank"
                href={e.link}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent text-[11px] font-mono tracking-wider">
                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                    THESIS: {e.thesis}
                  </div>
                </a>

              )}

              <p className="text-muted-foreground text-sm leading-relaxed">
                {e.blurb}
              </p>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14 p-6 md:p-8 rounded-xl border border-border bg-surface/60">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-2 rounded-full bg-accent animate-blink" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
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
