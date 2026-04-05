interface TagProps {
  children: string;
  variant?: "default" | "green" | "blue";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20",
    green: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  };
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
