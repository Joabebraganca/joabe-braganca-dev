import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { About } from "@/components/portfolio/About";
import { Specialties } from "@/components/portfolio/Specialties";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Certifications } from "@/components/portfolio/Certifications";
import { Documents } from "@/components/portfolio/Documents";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Joabe Bragança — Full Stack Developer, AI & Cybersecurity";
const description =
  "Desenvolvo aplicações modernas, automações inteligentes e soluções digitais com foco em segurança, escalabilidade, desempenho e experiência do usuário.";
const ogImage =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joabe Bragança",
          jobTitle: "Full Stack Developer, AI Engineer, Cybersecurity",
          description,
          url: "https://joabe-braganca-dev.lovable.app",
          sameAs: [
            "https://github.com/Joabebraganca",
            "https://www.linkedin.com/in/joabe-braganca",
          ],
          knowsAbout: [
            "Desenvolvimento Full Stack",
            "Inteligência Artificial",
            "Desenvolvimento Seguro",
            "Cibersegurança",
            "Automação de Processos",
            "APIs REST",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Specialties />
        <Projects />
        <Timeline />
        <Certifications />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
