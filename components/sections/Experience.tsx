"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { MapPin, Calendar } from "lucide-react";
import type { Resume } from "@/data/resume";

export function Experience({ resume }: { resume: Resume }) {
  return (
    <Section id="experience">
      <SectionLabel>Experience</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-14">
        Work <span className="gradient-text">History</span>
      </h2>

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-linear-to-b from-violet-500/60 via-violet-500/15 to-transparent" />

        <div className="flex flex-col gap-8">
          {resume.experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-10 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-[18px] flex items-center justify-center w-[18px] h-[18px]">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500 border-2 border-bg shadow-[0_0_12px_rgba(124,58,237,0.7)] group-hover:scale-125 transition-transform duration-200" />
              </div>

              {/* Card */}
              <div className="relative bg-bg-card border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/25 hover:bg-bg-card-hover transition-all duration-300 overflow-hidden">
                {/* Top highlight line */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-base font-bold mb-1 group-hover:text-violet-300 transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-white/60">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="flex items-center gap-1.5 text-xs text-violet-400 font-semibold bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/35">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-violet-400/60 shrink-0" />
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
