"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Briefcase } from "lucide-react";
import type { Resume } from "@/data/resume";

export function Experience({ resume }: { resume: Resume }) {
  return (
    <Section id="experience">
      <SectionLabel>Experience</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Work <span className="text-violet-400">History</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-linear-to-b from-violet-500/50 via-violet-500/20 to-transparent" />

        <div className="flex flex-col gap-10">
          {resume.experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-[11px] md:left-[19px] top-1.5 w-3 h-3 rounded-full bg-violet-500 border-2 border-bg shadow-[0_0_10px_rgba(124,58,237,0.6)]" />

              <div className="bg-bg-card border border-white/[0.07] rounded-2xl p-6 hover:border-violet-500/20 transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-violet-400" />
                      <span className="text-xs text-violet-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-white/50 text-sm">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
