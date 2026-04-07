"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = "", hover = false, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.015 } : undefined}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={[
        "relative bg-bg-card border border-white/6 rounded-xs p-6",
        "transition-all duration-300",
        hover && "cursor-pointer hover:border-blue-500/40 hover:bg-bg-card-hover hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)]",
        glow && "shadow-[0_0_30px_rgba(37,99,235,0.08)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Subtle inner top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent rounded-t-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}
