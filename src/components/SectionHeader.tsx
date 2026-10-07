import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({
  index,
  title,
  lead,
  tone = "light",
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-4">
        <span
          className={cn("label-mono", dark ? "text-primary-on-dark" : "text-primary")}
        >
          {index}
        </span>
        <h2
          className={cn(
            "font-display text-3xl md:text-4xl",
            dark ? "text-background" : "text-ink",
          )}
        >
          {title}
        </h2>
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "rule-ink mt-5 w-full",
          dark && "[--rule:var(--color-on-dark-muted)]",
        )}
      />
      {lead ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
            dark ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
