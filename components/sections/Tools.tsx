"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";

const tools = [
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "Vue.js", emoji: "💚" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "Tailwind", emoji: "🎨" },
  { name: "WordPress", emoji: "🔵" },
  { name: "Figma", emoji: "🖌️" },
  { name: "Git", emoji: "🌿" },
  { name: "Docker", emoji: "🐳" },
  { name: "REST API", emoji: "🔗" },
  { name: "SASS", emoji: "💅" },
  { name: "VS Code", emoji: "💻" },
];

export function Tools() {
  return (
    <Section id="tools">
      <SectionLabel>Tools & Technologies</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        My <span className="text-violet-400">Toolkit</span>
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-200 cursor-default"
          >
            <span className="text-2xl">{tool.emoji}</span>
            <span className="text-xs text-white/50 font-medium text-center">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
