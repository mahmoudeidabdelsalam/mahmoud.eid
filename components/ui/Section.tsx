"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`py-24 px-4 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400/80">
        {children}
      </span>
      <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
    </div>
  );
}
