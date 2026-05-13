import * as React from "react";
import { useTheme } from "@/hooks/use-theme";

type Preset = { id: string; label: string; accent: string; primary: string; ring: string };

const PRESETS: Preset[] = [
  { id: "cyan",    label: "Cyan",    accent: "oklch(0.85 0.18 200)", primary: "oklch(0.85 0.18 200)", ring: "oklch(0.85 0.18 200)" },
  { id: "violet",  label: "Violet",  accent: "oklch(0.72 0.22 295)", primary: "oklch(0.72 0.22 295)", ring: "oklch(0.72 0.22 295)" },
  { id: "emerald", label: "Emerald", accent: "oklch(0.78 0.18 160)", primary: "oklch(0.78 0.18 160)", ring: "oklch(0.78 0.18 160)" },
  { id: "amber",   label: "Amber",   accent: "oklch(0.82 0.17 70)",  primary: "oklch(0.82 0.17 70)",  ring: "oklch(0.82 0.17 70)" },
  { id: "rose",    label: "Rose",    accent: "oklch(0.72 0.20 15)",  primary: "oklch(0.72 0.20 15)",  ring: "oklch(0.72 0.20 15)" },
  { id: "sky",     label: "Sky",     accent: "oklch(0.78 0.14 235)", primary: "oklch(0.78 0.14 235)", ring: "oklch(0.78 0.14 235)" },
];

const SWATCHES: Record<string, string> = {
  cyan: "#7dd3fc", violet: "#c084fc", emerald: "#6ee7b7",
  amber: "#fcd34d", rose: "#fda4af", sky: "#93c5fd",
};

export function ThemeCustomizer() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>(() => {
    if (typeof window === "undefined") return "cyan";
    return localStorage.getItem("theme-preset") || "cyan";
  });

  const apply = React.useCallback((id: string) => {
    const p = PRESETS.find((x) => x.id === id) ?? PRESETS[0];
    const root = document.documentElement;
    root.style.setProperty("--accent", p.accent);
    root.style.setProperty("--primary", p.primary);
    root.style.setProperty("--ring", p.ring);
    setActive(id);
    try { localStorage.setItem("theme-preset", id); } catch {}
  }, []);

  React.useEffect(() => { apply(active); }, [apply, active]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Customize theme"
        className="fixed bottom-5 right-5 z-40 size-12 grid place-items-center rounded-full border border-border bg-surface/90 backdrop-blur-xl hover:border-accent/60 hover:text-accent shadow-glow transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2a10 10 0 0 0 0 20 4 4 0 0 0 0-8 2 2 0 0 1 0-4h1.5a4.5 4.5 0 0 0 0-9z" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Theme customizer"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-4 bg-background/60 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-sm rounded-2xl border border-border bg-surface shadow-glow p-6 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold tracking-tight">Customize</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="size-8 grid place-items-center rounded-md border border-border hover:border-accent/50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Accent color</div>
              <div className="grid grid-cols-3 gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => apply(p.id)}
                    aria-pressed={active === p.id}
                    className={`group flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                      active === p.id ? "border-accent bg-accent/10" : "border-border hover:border-accent/40"
                    }`}
                  >
                    <span className="size-8 rounded-full ring-2 ring-border" style={{ background: SWATCHES[p.id] }} />
                    <span className="text-[10px] font-mono uppercase tracking-wider">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Mode</div>
              <button
                onClick={toggle}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-border hover:border-accent/40 transition-colors"
              >
                <span className="text-sm font-medium">{theme === "dark" ? "Dark" : "Light"} mode</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent">Switch →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}