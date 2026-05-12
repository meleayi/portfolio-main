import { useState } from "react";
import cloudImg from "@/assets/project-cloudnexus.jpg";
import vortexImg from "@/assets/project-vortex.jpg";
import prismImg from "@/assets/project-prism.jpg";
import pulseImg from "@/assets/project-pulse.jpg";

const projects = [
  {
    title: "CloudNexus",
    year: "2024",
    image: cloudImg,
    category: "Backend",
    description:
      "A real-time distributed infrastructure monitoring tool built with Go, Rust, and React. Handles 1M+ events per second with sub-100ms latency.",
    tags: ["Go", "Rust", "WebAssembly", "React"],
  },
  {
    title: "Vortex Engine",
    year: "2023",
    image: vortexImg,
    category: "WebGL",
    description:
      "Custom WebGL rendering engine built on Three.js and GLSL shaders. Optimized for low-latency particle systems and spatial UI.",
    tags: ["Three.js", "GLSL", "TypeScript"],
  },
  {
    title: "Prism Logic",
    year: "2024",
    image: prismImg,
    category: "Frontend",
    description:
      "Holographic infrastructure suite with predictive node scaling, visual CLI, and a fully spatial command interface.",
    tags: ["Next.js", "tRPC", "GSAP", "Tailwind"],
  },
  {
    title: "Pulse Mobile",
    year: "2023",
    image: pulseImg,
    category: "Mobile",
    description:
      "Cross-platform mobile companion for engineering teams — incident response, on-call, and metrics in your pocket.",
    tags: ["React Native", "Expo", "Supabase"],
  },
];

const filters = ["All", "Frontend", "Backend", "WebGL", "Mobile"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            SELECTED <br className="md:hidden" /> ARTIFACTS
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">01 // PROJECTS</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] border transition-all ${
                active === f
                  ? "bg-accent text-accent-foreground border-accent shadow-glow"
                  : "border-border text-muted-foreground hover:text-accent hover:border-accent/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="card-3d group bg-surface p-6 md:p-8 rounded-xl border border-border cursor-pointer animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-6 overflow-hidden rounded-lg border border-border">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                  <span className="text-accent font-mono text-xs mt-2">{p.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 bg-surface-2 border border-border rounded font-mono text-muted-foreground tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <span>CASE_STUDY_0{i + 1}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→ READ</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
