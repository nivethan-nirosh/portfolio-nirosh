import React, { useRef } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  maxTilt?: number; // degrees
  shine?: boolean;
};

export default function TiltCard({ className = '', children, maxTilt = 12, shine = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    const rx = (py - 0.5) * -2 * maxTilt; // invert so up tilt when hover top
    const ry = (px - 0.5) * 2 * maxTilt;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    if (shine) {
      el.style.setProperty('--shine-x', `${px * 100}%`);
      el.style.setProperty('--shine-y', `${py * 100}%`);
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative [transform-style:preserve-3d] transition-transform duration-200 ${className}`}
    >
      <div
        ref={ref}
        className="relative rounded-xl will-change-transform"
        style={{
          background:
            shine
              ? 'radial-gradient(400px circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(34,211,238,0.12), transparent 40%)'
              : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
