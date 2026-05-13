import { useMemo, useRef, useState, useEffect } from "react";
import cloudImg from "@/assets/project-cloudnexus.jpg";
import vortexImg from "@/assets/project-vortex.jpg";
import prismImg from "@/assets/project-prism.jpg";
import pulseImg from "@/assets/project-pulse.jpg";

const projects = [
  {
    title: "CBE Wholesale Loan Management System",
    year: "2026",
    image: cloudImg,
    category: "Enterprise",
    href: "https://cbewholesale.cbe.com.et/",
    description:
      "Enterprise-grade wholesale loan management platform developed for the Commercial Bank of Ethiopia. Built to streamline loan processing, approval workflows, customer management, and operational reporting for large-scale banking operations.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Enterprise Systems"],
    featured: true,
  },

  {
    title: "Loan Origination Management System",
    year: "2025",
    image: vortexImg,
    category: "Enterprise",
    href: "#",
    description:
      "Internal banking platform for managing loan origination workflows, document verification, approval pipelines, and customer onboarding with role-based access control.",
    tags: ["Next.js", "Node.js", "REST API", "Authentication"],
    featured: true,
  },

  {
    title: "Collateral Management & Evaluation System",
    year: "2025",
    image: prismImg,
    category: "Enterprise",
    href: "#",
    description:
      "Collateral evaluation system for mechanical asset assessment in banking operations, improving valuation accuracy and workflow efficiency.",
    tags: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    featured: false,
  },

  {
    title: "AI-Powered Quiz Generator",
    year: "2024",
    image: pulseImg,
    category: "AI",
    href: "https://your-demo-link.com",
    description:
      "AI-driven quiz generator using OpenAI APIs with adaptive difficulty, PDF export, and instant feedback.",
    tags: ["MERN", "OpenAI API", "TypeScript", "Vercel"],
    featured: false,
  },

  {
    title: "CBE 2FA Mobile Authenticator",
    year: "2026",
    image: pulseImg,
    category: "Mobile",
    href: "#",
    description:
      "Secure mobile 2FA system with QR-based TOTP, biometric authentication, and encrypted storage for enterprise banking security.",
    tags: ["React Native", "Expo", "TypeScript", "TOTP"],
    featured: true,
  },

  {
    title: "Student Management System",
    year: "2024",
    image: cloudImg,
    category: "Backend",
    href: "#",
    description:
      "Academic management system with multi-role dashboards, JWT authentication, and performance tracking.",
    tags: ["React.js", "NestJS", "PostgreSQL", "JWT"],
    featured: false,
  },
];

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Enterprise",
  "Mobile",
  "AI",
] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCat = active === "All" || p.category === active;
      if (!inCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [active, query]);

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
  }, [visible]);

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
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6">
        <div className="flex justify-between items-end border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            SELECTED <br className="md:hidden" /> PROJECTS
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">01 // PROJECTS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] border transition-all ${active === f
                  ? "bg-accent text-accent-foreground border-accent shadow-glow"
                  : "border-border text-muted-foreground hover:text-accent hover:border-accent/50"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative md:w-72">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by tag, title…"
              aria-label="Search projects"
              className="w-full pl-9 pr-3 py-2 rounded-full bg-surface border border-border text-sm font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-10">
        {/* edge fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-[max(1rem,calc((100vw-72rem)/2+5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visible.length === 0 && (
            <div className="text-muted-foreground font-mono text-sm py-20 px-6">No projects match your filters.</div>
          )}
          {visible.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              data-card
              tabIndex={0}
              role="article"
              aria-label={`${p.title}, ${p.category} project from ${p.year}`}
              className="card-3d group bg-surface/50 rounded-2xl border border-border/50 cursor-pointer animate-fade-up snap-center shrink-0 w-[90%] sm:w-[450px] outline-none focus-visible:border-accent transition-all hover:bg-surface"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="p-6 md:p-8 space-y-6">
                {/* Header: Featured & Bookmark */}
                <div className="flex justify-between items-center">
                  {p.featured ? (
                    <span className="bg-accent/10 text-accent text-[9px] font-bold px-2.5 py-1 rounded-full border border-accent/20 flex items-center gap-1.5 uppercase tracking-wider">
                      <span className="size-1.5 bg-accent rounded-full animate-pulse" />
                      Featured
                    </span>
                  ) : (
                    <span className="text-[9px] text-muted-foreground font-mono uppercase tracking-wider">Case Study</span>
                  )}
                  <button className="text-muted-foreground hover:text-accent transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                  </button>
                </div>

                {/* Main Content Header */}
                <div className="flex gap-5 items-center">
                  <div className="size-16 md:size-20 rounded-xl overflow-hidden border border-border shrink-0 bg-background/50">
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold truncate group-hover:text-accent transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                      <span>{p.category}</span>
                      <span className="size-1 bg-border rounded-full" />
                      <span>{p.year}</span>
                    </div>
                  </div>
                </div>

                {/* Status/Details Row */}
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="text-accent font-bold">COMPLETED</span>
                  <span className="text-border">|</span>
                  <span className="text-muted-foreground">Delivered in {p.year}</span>
                  <span className="ml-auto flex items-center gap-1 text-muted-foreground/60">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Addis Ababa
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                  {p.description}
                </p>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] px-2.5 py-1 bg-surface-2 border border-border rounded-lg font-mono text-muted-foreground tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="text-[10px] px-2 py-1 text-muted-foreground/60 font-mono">+{p.tags.length - 3}</span>
                  )}
                </div>

                {/* Action Link */}
                <div className="pt-4 mt-2 border-t border-border flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {visible.map((_, i) => (
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
            aria-label="Previous project"
            className="size-11 grid place-items-center rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next project"
            className="size-11 grid place-items-center rounded-full border border-border bg-surface hover:border-accent hover:text-accent transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
