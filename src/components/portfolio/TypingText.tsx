import * as React from "react";

export function TypingText({ words, className }: { words: string[]; className?: string }) {
  const [i, setI] = React.useState(0);
  const [text, setText] = React.useState("");
  const [del, setDel] = React.useState(false);

  React.useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((n) => n + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-accent ml-1 align-middle animate-blink" />
    </span>
  );
}
