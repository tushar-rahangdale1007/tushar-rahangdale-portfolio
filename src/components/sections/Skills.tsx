import { skillGroups } from "@/lib/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader
          index="02"
          title="Skills"
          lead="What I reach for, and how deep I can go on each."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              className="h-full bg-background"
            >
              <div className="h-full p-6">
                <h3 className="label-mono text-primary">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
