import type { Resume } from "@/data/resume";

export function Footer({ resume }: { resume: Resume }) {
  return (
    <footer className="relative border-t border-white/6 py-10 px-4 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-blue-600/8 blur-[60px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <img src="/logo-white.webp" alt={resume.name} className="h-6 w-auto object-contain" />
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} {resume.name}
          </p>
        </div>

        <p className="text-xs text-white/20 hidden sm:block">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>

        <div className="flex items-center gap-5">
          {resume.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-blue-400 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
