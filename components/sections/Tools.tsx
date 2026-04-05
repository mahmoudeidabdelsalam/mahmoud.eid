"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";

const tools = [
  { name: "React", emoji: "⚛️", color: "hover:border-cyan-500/40 hover:bg-cyan-500/5" },
  { name: "Next.js", emoji: "▲", color: "hover:border-white/30 hover:bg-white/5" },
  { name: "Vue.js", emoji: "💚", color: "hover:border-green-500/40 hover:bg-green-500/5" },
  { name: "TypeScript", emoji: "🔷", color: "hover:border-blue-500/40 hover:bg-blue-500/5" },
  { name: "Tailwind", emoji: "🎨", color: "hover:border-sky-500/40 hover:bg-sky-500/5" },
  { name: "WordPress", emoji: "🔵", color: "hover:border-blue-400/40 hover:bg-blue-400/5" },
  { name: "Figma", emoji: "🖌️", color: "hover:border-pink-500/40 hover:bg-pink-500/5" },
  { name: "Git", emoji: "🌿", color: "hover:border-orange-500/40 hover:bg-orange-500/5" },
  { name: "Docker", emoji: "🐳", color: "hover:border-blue-500/40 hover:bg-blue-500/5" },
  { name: "REST API", emoji: "🔗", color: "hover:border-violet-500/40 hover:bg-violet-500/5" },
  { name: "SASS", emoji: "💅", color: "hover:border-pink-400/40 hover:bg-pink-400/5" },
  { name: "VS Code", emoji: "💻", color: "hover:border-indigo-500/40 hover:bg-indigo-500/5" },
];

export function Tools() {
  return (
    <Section id="tools">
      <SectionLabel>Tools & Technologies</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
        My <span className="gradient-text">Toolkit</span>
      </h2>
      <p className="text-white/40 text-sm mb-12">
        The tools and technologies I reach for every day.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, scale: 1.06 }}
            className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-bg-card border border-white/[0.06] transition-all duration-200 cursor-default ${tool.color}`}
          >
            <span className="text-2xl leading-none">{tool.emoji}</span>
            <span className="text-[11px] text-white/45 font-medium text-center leading-tight">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
