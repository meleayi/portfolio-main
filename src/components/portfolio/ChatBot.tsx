import * as React from "react";

// ─── API KEYS ────────────────────────────────────────────────────────────────
const GEMINI_KEYS = [
  process.env.NEXT_PUBLIC_GEMINI_KEY_1!,
  process.env.NEXT_PUBLIC_GEMINI_KEY_2!,
].filter(Boolean);

const GROQ_KEYS = [
  process.env.NEXT_PUBLIC_GROQ_KEY!,
].filter(Boolean);

// ─── MODELS ──────────────────────────────────────────────────────────────────
const GEMINI_MODEL = "gemini-2.5-flash"; // only this one for Gemini
const GROQ_MODELS = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"];

// ─── SYSTEM PROMPT ───────────────────────────────────────────────────────────
const SYSTEM = `
You are MeleseBot, an AI assistant integrated into Melese Ayichlie's portfolio website.

About Melese:
- Full-Stack Software Engineer based in Addis Ababa, Ethiopia
- Currently working at the Commercial Bank of Ethiopia (CBE)
- Experienced in building enterprise banking systems, secure authentication platforms, and scalable web applications
- Specialized in React.js, Next.js, TypeScript, ASP.NET Core, NestJS, Django, PostgreSQL, SQL Server, MongoDB, Tailwind CSS, and enterprise integrations
- Experienced with JWT, OAuth, LDAP, WSO2, REST APIs, Docker, CI/CD, IIS deployment, and modern system architecture
- Former Lecturer at Bonga University teaching Algorithms, Databases, Operating Systems, and Emerging Technologies
- Master's Degree in Computer Science from Bahir Dar University
- Research thesis: Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes

Built enterprise systems:
  • CBE Wholesale Loan Management System — manages wholesale lending lifecycle end-to-end
  • Loan Origination Management System — digitizes the full loan application and approval process
  • Collateral Management & Evaluation System — tracks and evaluates collateral assets for loans
  • CBE 2FA Mobile Authenticator — secure two-factor authentication app for CBE staff and customers
  • AI-Powered Quiz Generator — generates quizzes automatically using AI for educational use
  • Student Management System — full academic records and administration platform

Skills Detail:
- Frontend: React.js, Next.js, TypeScript, Tailwind CSS
- Backend: ASP.NET Core, NestJS, Django
- Databases: PostgreSQL, SQL Server, MongoDB
- Auth & Security: JWT, OAuth, LDAP, WSO2
- DevOps: Docker, CI/CD pipelines, IIS deployment
- Integrations: REST APIs, enterprise system integrations

Portfolio Sections: #about #work #stack #services #experience #education #terminal #contact

Contact:
- Email: meleayi2021@gmail.com
- Phone: +251930707411

Why Hire Me?
• Expertise in DSA: Proficient in explaining and implementing complex algorithms with realworld applications.
• Technical Proficiency: Hands-on experience building scalable, secure applications with modern
tech stacks.
• Reliable Delivery: Track record of meeting deadlines while maintaining high standards of
quality.
• Passion for Education: Committed to empowering learners through innovative and practical
teaching methods.

Behavior Rules:
- Be concise, professional, and friendly
- Keep responses short and clear
- Suggest scrolling to relevant sections when appropriate
- Never invent fake experience, companies, or achievements
- If information is unavailable, politely say so
- If asked about availability, say Melese is open to freelance and consulting opportunities
- Speak naturally like a modern AI portfolio assistant
- When asked about the Amharic hate speech research, explain it involves detecting hate in Amharic social media memes using both text and image (multimodal) analysis

AI/ML:
  • Thesis: Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes
  • Published in Torino, Italia,
`;

// ─── TYPES ───────────────────────────────────────────────────────────────────
type Msg = { role: "user" | "model"; text: string };

// ─── GEMINI CALLER ───────────────────────────────────────────────────────────
async function tryGemini(messages: Msg[]): Promise<string | null> {
  const body = {
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    })),
    generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
  };

  for (const key of GEMINI_KEYS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (!res.ok) continue; // quota/rate-limit → try next key
      const data = await res.json();
      const text =
        data?.candidates?.[0]?.content?.parts
          ?.map((p: { text?: string }) => p.text)
          .join("") ?? "";
      if (text) return text;
    } catch {
      /* network error → try next key */
    }
  }
  return null; // all Gemini keys exhausted
}

// ─── GROQ CALLER ─────────────────────────────────────────────────────────────
async function tryGroq(messages: Msg[]): Promise<string | null> {
  const groqMessages = [
    { role: "system", content: SYSTEM },
    ...messages.map((m) => ({
      role: m.role === "model" ? "assistant" : "user",
      content: m.text,
    })),
  ];

  for (const model of GROQ_MODELS) {
    for (const key of GROQ_KEYS) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
          body: JSON.stringify({
            model,
            messages: groqMessages,
            temperature: 0.7,
            max_tokens: 512,
          }),
        });
        if (!res.ok) continue;
        const data = await res.json();
        const text = data?.choices?.[0]?.message?.content ?? "";
        if (text) return text;
      } catch {
        /* try next */
      }
    }
  }
  return null;
}

// ─── MAIN AI CALLER — Gemini first, Groq as fallback ─────────────────────────
async function callAI(messages: Msg[]): Promise<string> {
  const geminiResult = await tryGemini(messages);
  if (geminiResult) return geminiResult;

  const groqResult = await tryGroq(messages);
  if (groqResult) return groqResult;

  throw new Error("All AI providers exhausted");
}

// ─── SUGGESTIONS ─────────────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What projects has Melese built?",
  "Tell me about the banking systems",
  "What's Melese's tech stack?",
  "How can I contact Melese?",
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function ChatBot() {
  const [open, setOpen] = React.useState(false);

  const [msgs, setMsgs] = React.useState<Msg[]>([
    {
      role: "model",
      text: "Hi 👋 I'm MeleseBot. Ask me about Melese's projects, experience, tech stack, or enterprise systems.",
    },
  ]);

  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const endRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  const send = async (text: string) => {
    const t = text.trim();
    if (!t || loading) return;

    const next: Msg[] = [...msgs, { role: "user", text: t }];
    setMsgs(next);
    setInput("");
    setLoading(true);

    try {
      const reply = await callAI(next);
      setMsgs([...next, { role: "model", text: reply }]);
    } catch {
      setMsgs([
        ...next,
        {
          role: "model",
          text: "I'm unable to connect to the AI service right now. Please try again later or contact Melese directly at meleayi2021@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-20 z-40 size-12 grid place-items-center rounded-full border border-accent/40 bg-gradient-to-br from-primary to-accent text-accent-foreground shadow-glow hover:scale-105 transition-transform"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 14 8l6 2-6 2-2 6-2-6-6-2 6-2z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-5 z-40 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col rounded-2xl border border-border bg-surface shadow-glow overflow-hidden animate-fade-up">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              <div>
                <div className="font-display font-bold text-sm">MeleseBot</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  AI Assistant
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-accent"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${m.role === "user"
                    ? "bg-accent text-accent-foreground rounded-br-sm"
                    : "bg-surface-2 border border-border rounded-bl-sm"
                    }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface-2 border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="size-1.5 rounded-full bg-accent animate-blink" />
                  <span className="size-1.5 rounded-full bg-accent animate-blink" style={{ animationDelay: "0.2s" }} />
                  <span className="size-1.5 rounded-full bg-accent animate-blink" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            )}

            {/* Suggestion chips — only shown on first message */}
            {msgs.length <= 1 && !loading && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Melese..."
              aria-label="Chat input"
              className="flex-1 bg-surface-2 border border-border rounded-full px-4 py-2 text-sm outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="size-9 grid place-items-center rounded-full bg-accent text-accent-foreground disabled:opacity-40 hover:scale-105 transition-transform"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}