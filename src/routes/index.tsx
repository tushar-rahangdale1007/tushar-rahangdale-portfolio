import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Tushar Rahangdale — Java & Spring Boot Developer",
      },
      {
        name: "description",
        content:
          "Portfolio of Tushar Rahangdale, a B.Tech Computer Science graduate in Nagpur building Java, Spring Boot and React applications. Projects, skills, internship experience and education.",
      },
      { property: "og:title", content: "Tushar Rahangdale — Java & Spring Boot Developer" },
      {
        property: "og:description",
        content:
          "Junior Java developer portfolio: Spring Boot REST APIs, Spring Security, JPA and MySQL, with React frontends.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
