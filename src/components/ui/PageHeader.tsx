interface PageHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ number, title, subtitle }: PageHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
      <div className="animate-fade-up">
        <p className="section-number mb-3">{number}</p>
        <h1 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-[#6B6B6B] text-lg max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-[#F5C518]" />
      </div>
    </div>
  );
}
