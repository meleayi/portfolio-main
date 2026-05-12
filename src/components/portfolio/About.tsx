import portrait from "@/assets/portrait.jpg";

const stats = [
  { value: "8+", label: "Years building" },
  { value: "60+", label: "Projects shipped" },
  { value: "12", label: "Open source repos" },
  { value: "1M+", label: "Users served" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            ABOUT
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">00 // PROFILE</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full" />
            <div className="relative card-3d rounded-xl overflow-hidden border border-border bg-surface">
              <img
                src={portrait}
                alt="Portrait of Alex Mercer"
                loading="lazy"
                width={832}
                height={1024}
                className="w-full h-auto object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>SUBJECT_ID / 4218</span>
                <span className="text-accent">VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="text-2xl md:text-3xl font-display tracking-tight leading-snug">
              I architect software at the intersection of <span className="text-accent">performance</span>,
              <span className="text-accent"> design</span>, and{" "}
              <span className="text-accent">scale</span> — turning complex systems into
              experiences that feel inevitable.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Over the last eight years I've helped early-stage startups and Fortune 500
                teams ship infrastructure, internal tooling, and consumer products used by
                millions. I care deeply about craft — both at the millisecond level of a
                render loop and the year-long arc of a product roadmap.
              </p>
              <p>
                When I'm not shipping, I write about distributed systems, contribute to
                open source, and prototype generative interfaces in WebGL.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-6 hover:bg-surface-2 transition-colors">
                  <div className="font-display text-3xl md:text-4xl font-bold text-accent glow-text tabular-nums">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
