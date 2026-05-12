import * as React from "react";

type Line = { type: "in" | "out"; text: string };

const HELP = `Available commands:
  about       — about me
  skills      — technical stack
  experience  — work history
  projects    — featured systems
  education   — academic background
  contact     — how to reach me
  social      — github / linkedin
  resume      — download CV
  theme       — toggle theme
  clear       — clear terminal
  help        — show this list`;

const RESPONSES: Record<string, string> = {
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

export function Terminal() {
  const [lines, setLines] = React.useState<Line[]>([
    {
      type: "out",
      text: "melese@portfolio shell v1.0 — type `help` to explore",
    },
  ]);

  const [input, setInput] = React.useState("");
  const endRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [...lines, { type: "in", text: raw }];

    if (!cmd) {
      setLines(next);
      return;
    }

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "help") {
      next.push({ type: "out", text: HELP });
    } else if (cmd === "resume") {
      window.open("/resume.pdf", "_blank");
      next.push({ type: "out", text: "Opening CV..." });
    } else if (cmd === "theme") {
      document.documentElement.classList.toggle("dark");
      next.push({ type: "out", text: "Theme toggled." });
    } else if (RESPONSES[cmd]) {
      next.push({ type: "out", text: RESPONSES[cmd] });
    } else {
      next.push({
        type: "out",
        text: `command not found: ${cmd} — type \`help\``,
      });
    }

    setLines(next);
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
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent outline-none caret-accent text-foreground"
                placeholder="type 'help'"
              />
            </form>

            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
