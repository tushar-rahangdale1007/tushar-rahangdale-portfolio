import { useEffect, useState } from "react";
import { sections, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function Nav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="print-hide sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
        <a
          href="#top"
          className="font-display text-base tracking-tight text-ink transition-colors hover:text-primary"
        >
          {profile.firstName}
          <span className="text-primary">.</span>
        </a>

        <nav
          aria-label="Sections"
          className="-mx-2 flex items-center gap-1 overflow-x-auto px-2 sm:gap-2"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "label-mono whitespace-nowrap rounded-full px-3 py-1.5 transition-colors",
                active === section.id
                  ? "bg-primary-soft text-primary"
                  : "text-subtle hover:text-foreground",
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
