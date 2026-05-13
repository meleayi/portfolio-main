import { useRef, useState, useEffect } from "react";

const services = [
  {
    n: "01",
    title: "Enterprise Backend Systems",
    category: "System Architecture",
    desc: "Designing secure, scalable backend systems for banking and enterprise platforms at Commercial Bank of Ethiopia. Focused on reliability, performance, and transactional integrity.",
    bullets: ["Microservices", "Clean Architecture", "High Availability"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    n: "02",
    title: "Frontend Engineering",
    category: "User Experience",
    desc: "Building modern, responsive web applications using React and Next.js with strong focus on usability, accessibility, and performance optimization.",
    bullets: ["React / Next.js", "Design Systems", "Performance Tuning"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Z" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /></svg>
    ),
  },
  {
    n: "03",
    title: "Financial & Business Systems",
    category: "Banking Solutions",
    desc: "Developing internal banking solutions such as loan origination, collateral management, and approval workflows used in real enterprise operations.",
    bullets: ["Workflow Systems", "Role-Based Access", "Secure APIs"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
  },
  {
    n: "04",
    title: "Cloud, DevOps & Deployment",
    category: "Infrastructure",
    desc: "Implementing CI/CD pipelines and deployment strategies to ensure fast, reliable delivery across production and enterprise environments.",
    bullets: ["Docker", "CI/CD Pipelines", "Vercel / IIS"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
    ),
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 400;
      const index = Math.round(scrollLeft / (cardWidth + 24));
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : 360;
    el.scrollTo({ left: index * w, behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end border-b border-border pb-8 px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            Expertise
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">02 // SERVICES</span>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* edge fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-[max(1rem,calc((100vw-72rem)/2+5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((s, i) => (
              <article
                key={s.n}
                data-card
                className="group bg-surface/50 rounded-2xl border border-border/50 snap-center shrink-0 w-[90%] sm:w-[450px] transition-all hover:bg-surface"
              >
                <div className="p-6 md:p-8 space-y-6">
                  {/* Header Badge & Icon */}
                  <div className="flex justify-between items-center">
                    <span className="bg-accent/10 text-accent text-[9px] font-bold px-2.5 py-1 rounded-full border border-accent/20 uppercase tracking-wider">
                      {s.category}
                    </span>
                    <button className="text-muted-foreground hover:text-accent transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                    </button>
                  </div>

                  {/* Icon & Title Group */}
                  <div className="flex gap-5 items-center">
                    <div className="size-16 rounded-xl border border-border shrink-0 bg-background/50 grid place-items-center text-accent group-hover:scale-110 transition-transform duration-500 shadow-glow/10">
                      {s.icon}
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h3 className="font-display text-2xl font-bold group-hover:text-accent transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-xs font-mono uppercase tracking-tighter">
                        Solution // Professional
                      </p>
                    </div>
                  </div>

                  {/* Status/Index Line */}
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-accent font-bold">ACTIVE</span>
                    <span className="text-border">|</span>
                    <span className="text-muted-foreground">Expertise ID: {s.n}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {s.desc}
                  </p>

                  {/* Bullets as Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {s.bullets.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] px-2.5 py-1 bg-surface-2 border border-border rounded-lg font-mono text-muted-foreground tracking-tight"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Footer Decoration */}
                  <div className="pt-4 mt-2 border-t border-border flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <span>Expertise_Field_{s.n}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→ DISCOVER</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeIndex === i ? "bg-accent w-8" : "bg-border w-2 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* nav arrows */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex justify-end gap-2 relative z-20">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous service"
              className="size-11 grid place-items-center rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next service"
              className="size-11 grid place-items-center rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
