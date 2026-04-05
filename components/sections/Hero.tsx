"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Resume } from "@/data/resume";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "5x", label: "Team Lead Roles" },
];

export function Hero({ resume }: { resume: Resume }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[900px] h-[700px] rounded-full bg-violet-700/10 blur-[140px]" />
        {/* Secondary accent */}
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-indigo-600/8 blur-[90px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-purple-600/8 blur-[80px]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.35) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs font-semibold mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for new opportunities
          <Sparkles size={12} className="text-violet-400" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-[-0.03em] leading-[1.05] mb-5"
        >
          {resume.name.split(" ")[0]}{" "}
          <span className="gradient-text">
            {resume.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-violet-500/40" />
          <p className="text-base md:text-lg text-white/55 font-medium tracking-wide">
            Senior Front-End Developer &amp; Creative Designer
          </p>
          <div className="h-px w-12 bg-violet-500/40" />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-1.5 text-xs text-white/35 mb-10"
        >
          <MapPin size={12} />
          {resume.location}
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/45 text-sm md:text-base leading-[1.85] max-w-xl mx-auto mb-10"
        >
          {resume.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <Button href={`mailto:${resume.email}`} variant="primary">
            <Mail size={15} />
            Contact Me
          </Button>
          <Button href="#" variant="outline">
            <Download size={15} />
            Download CV
          </Button>
          {resume.links.map((l) => (
            <Button key={l.label} href={l.url} variant="outline" target="_blank">
              {l.label} ↗
            </Button>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-0 divide-x divide-white/10"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="px-8 text-center first:pl-0 last:pr-0">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-0.5">{value}</p>
              <p className="text-xs text-white/35 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors group"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
