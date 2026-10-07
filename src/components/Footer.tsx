import { profile } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-ink text-background">
      <div className="print-hide mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-background/60 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
