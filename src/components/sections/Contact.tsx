import { profile } from "@/lib/portfolio";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader
          index="06"
          title="Contact"
          tone="dark"
          lead="Happy to talk about junior Java developer openings, internships or a project review."
        />

        <div className="print-full grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <a
              href={profile.emailHref}
              className="font-display text-lg leading-snug break-all text-background underline decoration-primary decoration-2 underline-offset-6 transition-colors hover:text-primary md:text-4xl"
            >
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-background/70">
              <a
                href={profile.phoneHref}
                className="transition-colors hover:text-primary"
              >
                +91 {profile.phone}
              </a>
              <span>{profile.location}</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-3">
              <CopyEmail className="border-background/25 text-background/80 hover:border-primary hover:text-primary" />
              <a
                href={profile.linkedin}
                className="label-mono rounded-full border border-background/25 px-4 py-2 text-background/80 transition-colors hover:border-primary hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="label-mono rounded-full border border-background/25 px-4 py-2 text-background/80 transition-colors hover:border-primary hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
