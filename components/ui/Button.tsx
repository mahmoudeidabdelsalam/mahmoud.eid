"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  target?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200";
  const styles = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]",
    outline:
      "border border-white/20 hover:border-violet-500/60 text-white/80 hover:text-white hover:bg-white/5",
  };

  const props = {
    className: `${base} ${styles[variant]} ${className}`,
    onClick,
  };

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.97 }} {...props}>
      {children}
    </motion.button>
  );
}
