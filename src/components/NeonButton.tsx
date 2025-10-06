import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a';
  href?: string;
  label: string;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export default function NeonButton({ as = 'button', href, label, variant = 'primary', className = '', ...rest }: Props) {
  const base = 'relative inline-flex items-center justify-center px-5 py-2 rounded-md transition-transform duration-200 will-change-transform';
  const neon =
    variant === 'primary'
      ? 'text-cyan-200 border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_32px_rgba(34,211,238,0.12)] hover:bg-cyan-500/15 hover:scale-[1.02]'
      : 'text-white/80 border border-white/15 bg-white/5 hover:bg-white/10 hover:text-white hover:scale-[1.02]';
  const cls = `${base} ${neon} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={cls} {...(rest as any)}>
        <span className="pointer-events-none">{label}</span>
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      <span className="pointer-events-none">{label}</span>
    </button>
  );
}
