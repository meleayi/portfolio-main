import heroImg from "@/assets/hero-3d.jpg";
import { TypingText } from "./TypingText";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-accent/15 blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-full text-[10px] font-bold tracking-[0.22em] text-accent uppercase bg-accent/5">
            <span className="size-1.5 rounded-full bg-accent animate-blink" />
            Full Stack Architect
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter glow-text">
            BUILDING <br />
            DIGITAL <br />
            <span className="text-gradient italic">DIMENSIONS</span>
          </h1>
          <div className="font-mono text-sm md:text-base text-accent">
            &gt; <TypingText words={["building distributed systems", "shipping immersive UIs", "writing rust & typescript", "designing spatial interfaces"]} />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            I'm Alex Mercer — engineering high-performance distributed systems and immersive web experiences that push the boundaries of what's possible in the browser.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="magnetic-btn px-8 py-4 bg-accent text-accent-foreground font-bold tracking-wide rounded-sm text-sm"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="magnetic-btn px-8 py-4 border border-border font-bold tracking-wide rounded-sm text-sm hover:bg-surface"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-8 bg-accent/30 blur-[100px] rounded-full animate-pulse-glow" />
          <div className="relative rounded-2xl border border-border bg-surface overflow-hidden card-3d">
            <img
              src={heroImg}
              alt="3D visualization of interconnected glowing data nodes"
              width={1024}
              height={1024}
              className="w-full h-full object-cover animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
              <span>NODE.RENDER</span>
              <span className="text-accent">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
