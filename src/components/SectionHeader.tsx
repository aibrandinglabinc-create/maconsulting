interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

const SectionHeader = ({ eyebrow, title, subtitle }: SectionHeaderProps) => (
  <div className="mb-8">
    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary mb-[6px] flex items-center gap-[10px]">
      <span className="w-[18px] h-[2px] bg-primary inline-block" />
      {eyebrow}
    </p>
    <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold text-ink leading-[1.1] mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[13px] text-ash leading-[1.8] max-w-[640px]">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
