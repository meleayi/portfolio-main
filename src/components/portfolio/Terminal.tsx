import * as React from "react";

type Line = { type: "in" | "out"; text: string };

const HELP = `Available commands:
 about         — short bio
  whoami        — current user
  skills        — primary stack
  projects      — featured work
  experience    — work history
  education     — schools & certs
  contact       — how to reach me
  social        — github / linkedin
  resume        — download resume
  date          — current timestamp
  echo <text>   — print text
  open <url>    — open a url
  goto <#id>    — scroll to section
  theme         — toggle dark / light
  accent <name> — cyan|violet|emerald|amber|rose|sky
  banner        — print ascii banner
  history       — show command history
  clear         — clear the terminal
  help          — show this list`;

const RESPONSES: Record<string, string> = {
   whoami: "alex — full stack architect @ /dev",
  about:
    "Full-Stack Software Engineer at Commercial Bank of Ethiopia. Specialized in secure enterprise systems, banking platforms, and scalable web applications.",
  
  skills:
    "React · Next.js · TypeScript · ASP.NET · Django · NestJS · Node.js · PostgreSQL · SQL Server · MongoDB · Docker · JWT · OAuth · WSO2",

  experience:
    "CBE (2023–Present): Loan systems, collateral management, enterprise workflows\nBonga University (2020–2023): Lecturer in CS (Algorithms, OS, DBMS)",

  education:
    "M.Sc. Computer Science — Bahir Dar University\nB.Sc. Computer Science — University of Gondar",

  projects:
    "CBE Loan Management System\nCollateral Evaluation System\nLoan Origination Platform\nAI Quiz Generator\nStudent Management System",

  contact:
    "Email: meleayi2021@gmail.com\nLocation: Addis Ababa, Ethiopia",

  social:
    "GitHub: https://github.com/meleayi\nLinkedIn: linkedin.com/in/meleseayichlie",
};


const ACCENTS: Record<string, string> = {
  cyan: "oklch(0.85 0.18 200)",
  violet: "oklch(0.72 0.22 295)",
  emerald: "oklch(0.78 0.18 160)",
  amber: "oklch(0.82 0.17 70)",
  rose: "oklch(0.72 0.20 15)",
  sky: "oklch(0.78 0.14 235)",
};

const BANNER = String.raw`
  __  ___    _
 /  |/  /__ | |___  ___ ___
/ /|_/ / -_)| / -_)(_-</ -_)
/_/  /_/\__/|_\___/___/\___/   shell v4.21
`;

export function Terminal() {
  const [lines, setLines] = React.useState<Line[]>([
    {
      type: "out",
      text: "melese@portfolio shell v1.0 — type `help` to explore",
    },
  ]);

  const [input, setInput] = React.useState("");

   const [history, setHistory] = React.useState<string[]>([]);
  const [hIdx, setHIdx] = React.useState(-1);

  const endRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

 const run = (raw: string) => {
    const trimmed = raw.trim();
    const next: Line[] = [...lines, { type: "in", text: raw }];
    if (!trimmed) { setLines(next); return; }
    const [cmd, ...rest] = trimmed.split(/\s+/);
    const arg = rest.join(" ");
    const lower = cmd.toLowerCase();

    setHistory((h) => [...h, trimmed]);
    setHIdx(-1);

    if (lower === "clear") { setLines([]); return; }
    if (lower === "help") next.push({ type: "out", text: HELP });
    else if (lower === "banner") next.push({ type: "out", text: BANNER });
    else if (lower === "date") next.push({ type: "out", text: new Date().toString() });
    else if (lower === "echo") next.push({ type: "out", text: arg });
    else if (lower === "history") next.push({ type: "out", text: history.map((c, i) => `${i + 1}  ${c}`).join("\n") || "(empty)" });
    else if (lower === "open") {
      if (!arg) next.push({ type: "out", text: "usage: open <url>" });
      else { window.open(arg.startsWith("http") ? arg : `https://${arg}`, "_blank"); next.push({ type: "out", text: `Opening ${arg}…` }); }
    }
    else if (lower === "goto") {
      const id = arg.replace(/^#/, "");
      const el = id && document.getElementById(id);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); next.push({ type: "out", text: `→ #${id}` }); }
      else next.push({ type: "out", text: `section not found: ${arg}` });
    }
    else if (lower === "resume") { window.open("/resume.pdf", "_blank"); next.push({ type: "out", text: "Opening resume…" }); }
    else if (lower === "theme") {
      document.documentElement.classList.toggle("light");
      document.documentElement.classList.toggle("dark");
      next.push({ type: "out", text: "Theme toggled." });
    }
    else if (lower === "accent") {
      const v = ACCENTS[arg.toLowerCase()];
      if (!v) next.push({ type: "out", text: `usage: accent <${Object.keys(ACCENTS).join("|")}>` });
      else {
        document.documentElement.style.setProperty("--accent", v);
        document.documentElement.style.setProperty("--primary", v);
        document.documentElement.style.setProperty("--ring", v);
        try { localStorage.setItem("theme-preset", arg.toLowerCase()); } catch {}
        next.push({ type: "out", text: `Accent → ${arg}` });
      }
    }
    else if (RESPONSES[lower]) next.push({ type: "out", text: RESPONSES[lower] });
    else next.push({ type: "out", text: `command not found: ${cmd} — try \`help\`` });

    setLines(next);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const i = hIdx < 0 ? history.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(i); setInput(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx < 0) return;
      const i = hIdx + 1;
      if (i >= history.length) { setHIdx(-1); setInput(""); }
      else { setHIdx(i); setInput(history[i]); }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const all = ["about","whoami","skills","projects","experience","education","contact","social","resume","date","echo","open","goto","theme","accent","banner","history","clear","help"];
      const m = all.find((c) => c.startsWith(input.toLowerCase()));
      if (m) setInput(m);
    } else if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault(); setLines([]);
    }
  };

  return (
    <section id="terminal" className="relative py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex justify-between items-end border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            INTERACTIVE SHELL
          </h2>
          <span className="text-muted-foreground font-display italic text-sm">
            07 // TERMINAL
          </span>
        </div>

        {/* Terminal */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="card-3d rounded-xl border border-border bg-surface overflow-hidden font-mono text-sm shadow-glow"
        >
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
            <span className="size-3 rounded-full bg-red-500/70" />
            <span className="size-3 rounded-full bg-yellow-500/70" />
            <span className="size-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-[11px] text-muted-foreground tracking-widest uppercase">
              melese@cbe-dev — zsh
            </span>
          </div>

          {/* Body */}
          <div className="p-4 md:p-6 h-[380px] overflow-y-auto space-y-2 leading-relaxed">
            {lines.map((l, i) => (
              <div
                key={i}
                className={
                  l.type === "in"
                    ? "text-foreground"
                    : "text-muted-foreground whitespace-pre-wrap"
                }
              >
                {l.type === "in" ? (
                  <>
                    <span className="text-accent">➜</span>{" "}
                    <span className="text-primary">~</span> {l.text}
                  </>
                ) : (
                  l.text
                )}
              </div>
            ))}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                run(input);
                setInput("");
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-accent">➜</span>
              <span className="text-primary">~</span>
              <input
               ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
                className="flex-1 bg-transparent outline-none caret-accent text-foreground"
                placeholder="type `help` — ↑↓ history, Tab to complete"
              
              />
            </form>

            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
