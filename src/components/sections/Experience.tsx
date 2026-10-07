import { experience } from "@/lib/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader index="03" title="Experience" />

        <div className="space-y-12">
          {experience.map((job) => (
            <Reveal key={`${job.org}-${job.period}`}>
              <article className="print-full grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <p className="label-mono text-subtle">{job.period}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {job.place}
                  </p>
                </div>
                <div className="border-l border-border pl-6 md:pl-10">
                  <h3 className="font-display text-2xl text-ink">{job.role}</h3>
                  <p className="mt-1 text-base text-primary">
                    {job.org}
                    <span className="text-muted-foreground">
                      {" · "}
                      <a
                        href={job.link}
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                      >
                        {job.linkLabel}
                      </a>
                    </span>
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-5 text-base leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-3 before:bg-primary/60"
                      >
                        {bullet}
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
