export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
      {children}
    </span>
  );
}
