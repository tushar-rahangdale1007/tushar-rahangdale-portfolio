import { projects } from "@/lib/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader
          index="04"
          title="Projects"
          lead="Two builds that took me from raw JDBC to a secured Spring Boot service with a React frontend."
        />

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <article
                className={cn(
                  "print-full grid gap-8 rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/50 md:p-9",
                  project.featured && "md:grid-cols-[1.1fr_0.9fr]",
                )}
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-ink md:text-3xl">
                      {project.name}
                    </h3>
                    <span className="label-mono text-subtle">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {project.headline}
                  </p>
                  <a
                    href={project.link}
                    className="label-mono mt-5 inline-flex items-center gap-2 text-primary transition-colors hover:text-foreground"
                  >
                    View project
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <h4 className="label-mono text-subtle">Highlights</h4>
                  <ul className="mt-4 space-y-3">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-5 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-3 before:bg-primary/60"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
