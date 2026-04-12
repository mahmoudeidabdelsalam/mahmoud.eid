import type { Resume } from "@/data/resume";

export function Footer({ resume }: { resume: Resume }) {
  return (
    <footer className="relative border-t border-border py-10 px-4 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-100 h-25 bg-blue-600/8 blur-[60px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <img src="/logo.webp" alt={resume.name} className="h-6 w-auto object-contain" />
          <p className="text-sm text-muted/30">
            © {new Date().getFullYear()} {resume.name}
          </p>
        </div>

        <p className="text-xs text-muted/20 hidden sm:block">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>

        <div className="flex items-center gap-5">
          {resume.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted/30 hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
