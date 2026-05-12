import portrait from "@/assets/portrait.jpg";

const stats = [
  { value: "3+", label: "Years Building" },
  { value: "15+", label: "Applications Developed" },
  { value: "5+", label: "Production Systems" },
  { value: "24/7", label: "Learning Mindset" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            ABOUT
          </h2>
          {/* <span className="text-muted-foreground font-display italic text-sm">00 // PROFILE</span> */}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full" />
            <div className="relative card-3d rounded-xl overflow-hidden border border-border bg-surface">
              <img
                src={portrait}
                alt="Portrait of Melese"
                loading="lazy"
                width={832}
                height={1024}
                className="w-full h-auto object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span></span>
                <span className="text-accent">VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-display tracking-tight leading-snug text-justify">
                I'm a full-stack software engineer building secure and scalable
                digital products at the intersection of{" "}
                <span className="text-accent">performance</span>,
                <span className="text-accent"> design</span>, and{" "}
                <span className="text-accent">reliability</span>.
              </p>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] md:text-base  text-justify">
                <p className="text-justify">
                  Currently working at the Commercial Bank of Ethiopia, I develop
                  modern enterprise applications focused on security, scalability,
                  and seamless user experiences. My work involves building reliable
                  systems that support real-world financial and business operations.
                </p>

                <p className="text-justify">
                  I enjoy working across the full development lifecycle — from
                  crafting responsive frontend interfaces to designing backend APIs,
                  databases, and scalable architectures using modern technologies
                  like React, Next.js, Node.js, Django, ASP.NET, PostgreSQL,
                  and MongoDB.
                </p>

                <p className="text-justify">
                  Beyond coding, I'm passionate about clean design systems,
                  performance optimization, AI-powered experiences, and building
                  products that solve meaningful real-world problems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group bg-surface p-6 md:p-7 hover:bg-surface-2 transition-all duration-300"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-accent glow-text tabular-nums">
                    {s.value}
                  </div>

                  <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </div>

                  <div className="mt-4 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
