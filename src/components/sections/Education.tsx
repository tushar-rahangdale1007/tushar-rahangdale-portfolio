import { education } from "@/lib/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader index="05" title="Education" />

        <div className="divide-y divide-border border-y border-border">
          {education.map((entry, i) => (
            <Reveal key={entry.degree} delay={i * 70}>
              <div className="print-full grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
                <div>
                  <h3 className="font-display text-xl text-ink md:text-2xl">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">
                    {entry.school}
                  </p>
                </div>
                <div className="flex items-baseline gap-5 md:flex-col md:items-end md:gap-1">
                  <span className="label-mono text-subtle">{entry.period}</span>
                  <span className="text-sm text-primary">{entry.result}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
