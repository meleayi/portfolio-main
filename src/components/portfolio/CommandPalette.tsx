import * as React from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useTheme } from "@/hooks/use-theme";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "terminal", label: "Terminal" },
  { id: "contact", label: "Contact" },
];

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const { toggle } = useTheme();

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-accent/50 text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
        aria-label="Open command palette"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        Search
        <kbd className="ml-1 px-1.5 py-0.5 rounded bg-surface-2 border border-border text-[9px]">⌘K</kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {sections.map((s) => (
              <CommandItem key={s.id} onSelect={() => go(s.id)}>
                <span className="font-mono text-accent mr-2">→</span> {s.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => { toggle(); setOpen(false); }}>
              <span className="font-mono text-accent mr-2">☼</span> Toggle theme
            </CommandItem>
            <CommandItem onSelect={() => { window.open("/resume.pdf", "_blank"); setOpen(false); }}>
              <span className="font-mono text-accent mr-2">↓</span> Download resume
            </CommandItem>
            <CommandItem onSelect={() => { window.open("https://github.com", "_blank"); setOpen(false); }}>
              <span className="font-mono text-accent mr-2">⌥</span> Open GitHub
            </CommandItem>
            <CommandItem onSelect={() => { window.open("https://linkedin.com", "_blank"); setOpen(false); }}>
              <span className="font-mono text-accent mr-2">⌥</span> Open LinkedIn
            </CommandItem>
            <CommandItem onSelect={() => { window.location.href = "mailto:meleayi2021@gmmail.com"; setOpen(false); }}>
              <span className="font-mono text-accent mr-2">@</span> Email me
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
