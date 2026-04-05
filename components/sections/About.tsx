"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code2, Layers, Zap, Users } from "lucide-react";
import type { Resume } from "@/data/resume";

const highlights = [
  {
    icon: Code2,
    title: "14+ Years of Code",
    desc: "React, Vue, Next.js — building scalable, high-performance web apps since 2011.",
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc: "Led cross-functional teams across KSA, Kuwait & Egypt delivering complex SaaS platforms.",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    desc: "Reduced production load times from 5s → 1.2s through code splitting & lazy loading.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Layers,
    title: "Design + Engineering",
    desc: "Bridging UI/UX design and frontend architecture — Figma to pixel-perfect code.",
    color: "from-fuchsia-500/20 to-fuchsia-500/5",
  },
];

export function About({ resume }: { resume: Resume }) {
  return (
    <Section id="about">
      <SectionLabel>About Me</SectionLabel>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.15] mb-6">
            Crafting digital experiences that{" "}
            <span className="gradient-text">scale and perform</span>
          </h2>
          <p className="text-white/50 leading-[1.9] mb-5 text-sm md:text-base">
            {resume.summary}
          </p>
          <p className="text-white/40 leading-[1.9] text-sm">
            I specialize in bridging the gap between design and engineering —
            turning complex UI/UX concepts into fast, accessible, and
            maintainable frontend systems. Whether it&apos;s a headless
            e-commerce platform or a real-time SaaS dashboard, I bring both
            technical depth and design sensibility to every project.
          </p>

          {/* Quick facts */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[resume.location, "Open to Remote", "14+ Years Exp."].map((f) => (
              <span
                key={f}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50 bg-white/[0.03]"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Right — highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col gap-3 group hover:border-violet-500/30 transition-colors duration-300">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${color} flex items-center justify-center border border-white/[0.06]`}>
                  <Icon size={18} className="text-violet-300" />
                </div>
                <p className="font-bold text-sm leading-snug">{title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
