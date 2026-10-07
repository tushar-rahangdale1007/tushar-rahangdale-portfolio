import { profile } from "@/lib/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const facts = [
  { label: "Based in", value: "Nagpur, Maharashtra" },
  { label: "Studied", value: "B.Tech CSE, GWCET" },
  { label: "Builds with", value: "Java · Spring Boot · MySQL" },
  { label: "Looking for", value: "Junior Java Developer role" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader index="01" title="About" />

        <div className="print-full grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-xl leading-relaxed text-ink md:text-2xl md:leading-[1.6]">
              I write Java that other people can read. My work so far covers
              Spring Boot services with REST APIs, Spring Security and JPA on
              top of MySQL, and React screens that talk to them.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.lookingFor}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-border border-y border-border">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="label-mono text-subtle">{fact.label}</dt>
                  <dd className="text-base text-foreground sm:text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
