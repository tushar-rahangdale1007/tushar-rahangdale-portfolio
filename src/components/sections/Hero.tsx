import { profile } from "@/lib/portfolio";
import { CodeCard } from "@/components/CodeCard";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";

function PrimaryLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="label-mono rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
    >
      {children}
    </a>
  );
}

function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="label-mono rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="print-full mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label-mono flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {profile.availability}
              </span>
              <span className="label-mono text-subtle">{profile.location}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {profile.role} building dependable backends in{" "}
              <span className="text-foreground">Java and Spring Boot</span> —
              from JDBC consoles to full-stack Spring Boot APIs with React
              frontends.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryLink href={profile.emailHref}>Get in touch</PrimaryLink>
              <GhostLink href="#projects">See my projects</GhostLink>
              <button
                type="button"
                onClick={() => window.print()}
                className="label-mono print-hide rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Save as PDF
              </button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href={profile.phoneHref}
                className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                +91 {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <CodeCard />
        </Reveal>
      </div>
    </section>
  );
}
