type Props = {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeader({ title, subtitle, align = 'center', className = '' }: Props) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-200 to-white">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
      <div className="relative mt-4 h-[2px] w-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/80 via-cyan-300/70 to-transparent" />
        <div className="absolute -inset-x-2 -inset-y-1 blur-md bg-cyan-400/20" />
      </div>
    </div>
  );
}
