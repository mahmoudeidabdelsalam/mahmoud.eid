import type { Resume } from "@/data/resume";

export function Footer({ resume }: { resume: Resume }) {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <p>
          © {new Date().getFullYear()} {resume.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {resume.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
