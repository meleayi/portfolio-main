import { useRef, useState, useEffect } from "react";

const stacks = [
  {
    title: "Frontend",
    category: "User Interface",
    description: "Developing modern, high-performance web interfaces with focus on accessibility, state management, and responsive design systems.",
    items: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "MATERIAL UI", "ANT DESIGN", "SHADCN/UI"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
    ),
  },
  {
    title: "Backend",
    category: "System Logic",
    description: "Architecting robust, scalable server-side solutions for enterprise-grade applications, ensuring reliability and high performance.",
    items: ["ASP.NET CORE", "NEST.JS", "DJANGO", "NODE.JS", "EXPRESS", "ENTITY FRAMEWORK"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>
    ),
  },
  {
    title: "Databases",
    category: "Data Storage",
    description: "Designing and optimizing complex database schemas, implementing efficient queries and ensuring data integrity for large-scale operations.",
    items: ["POSTGRESQL", "SQL SERVER", "MONGODB"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
    ),
  },
  {
    title: "Security & APIs",
    category: "Integrations",
    description: "Implementing industry-standard security protocols and designing clean, well-documented REST APIs for secure data exchange.",
    items: ["JWT", "OAUTH", "LDAP", "REST APIs", "WSO2"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    ),
  },
  {
    title: "DevOps & Deployment",
    category: "Cloud Operations",
    description: "Streamlining development lifecycles with automated CI/CD pipelines, containerization, and optimized cloud hosting solutions.",
    items: ["DOCKER", "CI/CD", "VERCEL", "NETLIFY", "IIS", "GIT", "GITHUB", "GITLAB"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
    ),
  },
  {
    title: "ORM & Data Layer",
    category: "Infrastructure",
    description: "Leveraging powerful Object-Relational Mappers to bridge the gap between application logic and persistent data storage efficiently.",
    items: ["PRISMA", "TYPEORM", "DRIZZLE ORM", "ENTITY FRAMEWORK"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg>
    ),
  },
];

export function Stack() {
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
    <section id="stack" className="py-24 border-y border-border bg-surface/30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="px-4 sm:px-6 space-y-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl font-mono text-sm">
            A structured overview of the technologies I use to build scalable
            enterprise and banking systems.
          </p>
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
            {stacks.map((group, i) => (
              <article
                key={group.title}
                data-card
                className="group bg-surface/50 rounded-2xl border border-border/50 snap-center shrink-0 w-[90%] sm:w-[450px] transition-all hover:bg-surface"
              >
                <div className="p-6 md:p-8 space-y-6">
                  {/* Header Badge & Icon */}
                  <div className="flex justify-between items-center">
                    <span className="bg-accent/10 text-accent text-[9px] font-bold px-2.5 py-1 rounded-full border border-accent/20 uppercase tracking-wider">
                      {group.category}
                    </span>
                    <button className="text-muted-foreground hover:text-accent transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                    </button>
                  </div>

                  {/* Icon & Title Group */}
                  <div className="flex gap-5 items-center">
                    <div className="size-16 rounded-xl border border-border shrink-0 bg-background/50 grid place-items-center text-accent group-hover:scale-110 transition-transform duration-500 shadow-glow/10">
                      {group.icon}
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h3 className="font-display text-2xl font-bold group-hover:text-accent transition-colors">
                        {group.title}
                      </h3>
                      <p className="text-muted-foreground text-xs font-mono uppercase tracking-tighter">
                        Stack // Architecture
                      </p>
                    </div>
                  </div>

                  {/* Items / Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2.5 py-1 bg-surface-2 border border-border rounded-lg font-mono text-muted-foreground tracking-tight"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {group.description}
                  </p>

                  {/* Footer Decoration */}
                  <div className="pt-4 mt-2 border-t border-border flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <span>Tech_Layer_{String(i + 1).padStart(2, "0")}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→ DETAILS</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {stacks.map((_, i) => (
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
              aria-label="Previous stack"
              className="size-11 grid place-items-center rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next stack"
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
