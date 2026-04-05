"use client";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code2, Layers, Zap } from "lucide-react";
import type { Resume } from "@/data/resume";

const highlights = [
  {
    icon: Code2,
    title: "14+ Years Experience",
    desc: "Building scalable web apps with React, Vue, and Next.js",
  },
  {
    icon: Layers,
    title: "Team Leadership",
    desc: "Led cross-functional teams delivering complex SaaS platforms",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Reduced load times from 5s to 1.2s on production apps",
  },
];

export function About({ resume }: { resume: Resume }) {
  return (
    <Section id="about">
      <SectionLabel>About Me</SectionLabel>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Crafting digital experiences that{" "}
            <span className="text-violet-400">scale and perform</span>
          </h2>
          <p className="text-white/50 leading-relaxed mb-6">
            {resume.summary}
          </p>
          <p className="text-white/50 leading-relaxed">
            I specialize in bridging the gap between design and engineering —
            turning complex UI/UX concepts into fast, accessible, and
            maintainable frontend systems. Whether it&apos;s a headless
            e-commerce platform or a real-time SaaS dashboard, I bring both
            technical depth and design sensibility to every project.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 shrink-0">
                <Icon size={18} className="text-violet-400" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
