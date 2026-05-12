import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/hooks/use-theme";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Faq } from "@/components/portfolio/Faq";
import { Contact } from "@/components/portfolio/Contact";
import { Terminal } from "@/components/portfolio/Terminal";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Mercer — Full Stack Architect & Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Mercer, a full stack architect building high-performance distributed systems and immersive web experiences.",
      },
      { property: "og:title", content: "Alex Mercer — Full Stack Architect" },
      {
        property: "og:description",
        content:
          "Selected works in distributed systems, WebGL engines, and spatial interfaces.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <ParticleBackground />
        <CursorGlow />
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Stack />
          <Services />
          <Experience />
          <Education />
          <Testimonials />
          <Terminal />
          <Faq />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
