const info = [
  {
    label: "Email",
    value: "meleayi2021@gmail.com",
    href: "mailto:meleayi2021@gmail.com",
    icon: (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
    ),
  },
  {
    label: "Phone",
    value: "+251 930 707 411",
    href: "tel:+251930707411",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "https://www.openstreetmap.org/search?query=Addis%20Ababa",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "GPS",
    value: "9.02° N, 38.75° E",
    href: "https://maps.google.com/?q=9.016878789458866,38.754170753855256",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </>
    ),
  },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative py-24 md:py-32 px-4 sm:px-6 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-accent/15 blur-[120px] rounded-full animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto space-y-12 md:space-y-16">

        {/* Header */}
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-full text-[10px] font-bold tracking-[0.22em] text-accent uppercase bg-accent/5">
            <span className="size-1.5 rounded-full bg-accent animate-blink" />
            Let's collaborate
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter glow-text">
            READY TO START <br />
            A <span className="text-gradient italic">PROJECT</span>?
          </h2>

          <p className="text-muted-foreground max-w-md mx-auto px-4">
            Available for enterprise engineering work, banking systems development,
            and select collaboration opportunities.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

          <div className="grid sm:grid-cols-2 gap-4">
            {info.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group card-3d bg-surface border border-border rounded-xl p-5 md:p-6 flex flex-col gap-3 hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <div className="size-9 rounded-md border border-border grid place-items-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      {i.icon}
                    </svg>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {i.label}
                  </span>
                </div>

                <div className="font-display text-base md:text-lg font-bold tracking-tight break-words">
                  {i.value}
                </div>
              </a>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border bg-surface card-3d relative min-h-[320px] md:min-h-full">
            <iframe
              title="Addis Ababa location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.65%2C8.85%2C38.85%2C9.10&layer=mapnik&marker=9.03%2C38.74"
              loading="lazy"
              className="w-full h-full min-h-[320px] grayscale-[35%] contrast-110"
              style={{ border: 0 }}
            />

            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/20" />

            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-background/80 backdrop-blur text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/30">
              ● LIVE / ETHIOPIA
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <a href="https://github.com" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-2 justify-between items-center text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.3em]">
          <span>© 2026 Melese Ayichlie</span>
          <span>Built for enterprise systems</span>
        </div>
      </div>
    </footer>
  );
}