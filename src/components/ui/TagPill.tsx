interface TagPillProps {
  tag: string;
  variant?: "royal" | "dark" | "outline";
}

export function TagPill({ tag, variant = "royal" }: TagPillProps) {
  const variants = {
    royal: "bg-[#4169E1] text-[#0D0D0D]",
    dark: "bg-[#0D0D0D] text-[#FAF7F2]",
    outline: "border border-[#E8E0D0] text-[#6B6B6B] bg-transparent",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {tag}
    </span>
  );
}
