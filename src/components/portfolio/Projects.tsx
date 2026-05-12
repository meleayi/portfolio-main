import { useState } from "react";
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
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            SELECTED <br className="md:hidden" /> PROJECTS
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
<a
  href={p.href}
  target="_blank"
  rel="noreferrer"
  className="font-display text-2xl md:text-3xl font-bold tracking-tight hover:text-accent transition-colors inline-block"
  style={{ animationDelay: `${i * 80}ms` }}

>
  {p.title}
</a>                  <span className="text-accent font-mono text-xs mt-2">{p.year}</span>
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
                <span>VIEW_PROJECT{i + 1}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→ VIEW PROJECT</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
