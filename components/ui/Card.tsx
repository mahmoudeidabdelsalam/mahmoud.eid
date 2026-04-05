"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        bg-[#111118] border border-white/[0.07] rounded-2xl p-6
        ${hover ? "cursor-pointer hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]" : ""}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
