"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import type { Resume } from "@/data/resume";

interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
  accent: string;
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-white/60 w-28 shrink-0">{name}</span>
      <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full rounded-full bg-linear-to-r from-violet-500 to-indigo-400"
        />
      </div>
      <span className="text-[10px] text-white/30 w-8 text-right">{level}%</span>
    </div>
  );
}

const coreSkills = [
  { name: "React / Next.js", level: 95 },
  { name: "Vue / Nuxt.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind / CSS", level: 95 },
  { name: "WordPress", level: 92 },
  { name: "UI/UX & Figma", level: 85 },
  { name: "REST APIs", level: 88 },
  { name: "Performance Opt.", level: 90 },
];

export function Skills({ resume }: { resume: Resume }) {
  const groups: SkillGroup[] = [
    {
      label: "Frontend",
      icon: "⚛️",
      skills: resume.skills.frontend,
      accent: "border-violet-500/30 bg-violet-500/5",
    },
    {
      label: "Styling & UI",
      icon: "🎨",
      skills: resume.skills.styling,
      accent: "border-indigo-500/30 bg-indigo-500/5",
    },
    {
      label: "CMS & Backend",
      icon: "🔧",
      skills: resume.skills.cmsBackend,
      accent: "border-blue-500/30 bg-blue-500/5",
    },
    {
      label: "Tools",
      icon: "🛠️",
      skills: resume.skills.tools,
      accent: "border-purple-500/30 bg-purple-500/5",
    },
    {
      label: "Performance",
      icon: "⚡",
      skills: resume.skills.performance,
      accent: "border-fuchsia-500/30 bg-fuchsia-500/5",
    },
    {
      label: "Design",
      icon: "✏️",
      skills: ["UI/UX Design", "Figma", "Adobe XD", "Design Systems", "Prototyping"],
      accent: "border-pink-500/30 bg-pink-500/5",
    },
  ];

  return (
    <Section id="skills">
      <SectionLabel>Skills</SectionLabel>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left — skill bars */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-white/40 text-sm mb-10">
            Core skills ranked by depth of experience and daily usage.
          </p>
          <div className="flex flex-col gap-5">
            {coreSkills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Right — tag groups */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Full <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/40 text-sm mb-10">
            Technologies and tools I work with across the stack.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {groups.map(({ label, icon, skills, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`rounded-2xl border p-4 ${accent}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{icon}</span>
                  <span className="text-xs font-bold tracking-wider uppercase text-white/50">
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.06] text-white/60 border border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
