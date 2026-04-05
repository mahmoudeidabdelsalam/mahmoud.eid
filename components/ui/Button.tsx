"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
  className?: string;
  target?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
}: ButtonProps) {
  const sizes = { sm: "px-4 py-2 text-xs", md: "px-6 py-3 text-sm" };
  const base = `inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200 ${sizes[size]}`;

  const styles = {
    primary: [
      "bg-violet-600 text-white",
      "hover:bg-violet-500",
      "shadow-[0_0_0_1px_rgba(124,58,237,0.5),0_4px_24px_rgba(124,58,237,0.35)]",
      "hover:shadow-[0_0_0_1px_rgba(124,58,237,0.8),0_4px_32px_rgba(124,58,237,0.55)]",
    ].join(" "),
    outline: [
      "border border-white/15 text-white/75",
      "hover:border-violet-500/50 hover:text-white hover:bg-violet-500/8",
    ].join(" "),
    ghost: "text-white/50 hover:text-white hover:bg-white/5",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
