import * as React from "react";

type Line = { type: "in" | "out"; text: string };

const HELP = `Available commands:
  about       — short bio
  skills      — primary stack
  projects    — featured work
  contact     — how to reach me
  social      — github / linkedin
  resume      — download resume
  theme       — toggle theme
  clear       — clear the terminal
  help        — show this list`;

const RESPONSES: Record<string, string> = {
  about: "Alex Mercer — full stack architect. 8+ years building distributed systems, WebGL engines, and spatial UIs.",
  skills: "TypeScript · React · Next.js · Rust · Go · Postgres · Docker · AWS · WebGL · Three.js",
  projects: "1) CloudNexus  2) Vortex Engine  3) Prism Logic  4) Pulse Mobile  →  scroll to #work",
  contact: "hello@alex.dev · +1 (415) 555-0182 · San Francisco, CA",
  social: "github.com/alexmercer · linkedin.com/in/alexmercer",
};

export function Terminal() {
  const [lines, setLines] = React.useState<Line[]>([
    { type: "out", text: "alex.dev shell v4.21 — type `help` to begin." },
  ]);
  const [input, setInput] = React.useState("");
  const endRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [...lines, { type: "in", text: raw }];
    if (!cmd) { setLines(next); return; }
    if (cmd === "clear") { setLines([]); return; }
    if (cmd === "help") next.push({ type: "out", text: HELP });
    else if (cmd === "resume") { window.open("/resume.pdf", "_blank"); next.push({ type: "out", text: "Opening resume..." }); }
    else if (cmd === "theme") {
      document.documentElement.classList.toggle("light");
      document.documentElement.classList.toggle("dark");
      next.push({ type: "out", text: "Theme toggled." });
    }
    else if (RESPONSES[cmd]) next.push({ type: "out", text: RESPONSES[cmd] });
    else next.push({ type: "out", text: `command not found: ${cmd} — try \`help\`` });
    setLines(next);
  };

  return (
    <section id="terminal" className="relative py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex justify-between items-end border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            INTERACTIVE <br className="md:hidden" /> SHELL
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">07 // TERMINAL</span>
        </div>

        <div
          onClick={() => inputRef.current?.focus()}
          className="card-3d rounded-xl border border-border bg-surface overflow-hidden font-mono text-sm shadow-glow"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-yellow-500/70" />
            <span className="size-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-[11px] text-muted-foreground tracking-widest uppercase">alex@dev — zsh</span>
          </div>
          <div className="p-4 md:p-6 h-[360px] overflow-y-auto space-y-1.5 leading-relaxed">
            {lines.map((l, i) => (
              <div key={i} className={l.type === "in" ? "text-foreground" : "text-muted-foreground whitespace-pre-wrap"}>
                {l.type === "in" ? <><span className="text-accent">➜</span> <span className="text-primary">~</span> {l.text}</> : l.text}
              </div>
            ))}
            <form onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }} className="flex items-center gap-2">
              <span className="text-accent">➜</span>
              <span className="text-primary">~</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent outline-none caret-accent text-foreground"
                placeholder="type `help`"
              />
            </form>
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
