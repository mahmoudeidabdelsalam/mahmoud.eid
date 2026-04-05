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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-4 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}
