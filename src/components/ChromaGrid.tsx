import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number; // spotlight radius
  damping?: number; // pointer follow damping
  fadeOut?: number; // fade overlay out duration on leave
  ease?: string; // gsap ease
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items = [],
  className = '',
  radius = 320,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  const handleOpenUrl = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <style>{`
        /* Hide scrollbar for mobile horizontal scroll */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        /* Local clamp helpers */
        .cg-clamp-1 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; }
        .cg-clamp-2 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
        .cg-clamp-3 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
      `}</style>
      <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onClick={() => setActive(null)}
      className={`relative w-full flex md:flex-wrap flex-nowrap md:overflow-visible overflow-x-auto no-scrollbar md:justify-center justify-start items-start gap-4 snap-x snap-mandatory px-4 py-6 md:py-4 ${className}`}
      style={{
        ['--r' as any]: `${radius}px`,
        ['--x' as any]: '50%',
        ['--y' as any]: '50%'
      , paddingTop: 'calc(1.5rem + env(safe-area-inset-top))', paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' } as React.CSSProperties}
    >
      {items.map((c, i) => {
        const isActive = active === i;
        return (
        <article
          key={i}
          ref={(el) => { cardRefs.current[i] = el; }}
          onMouseMove={handleCardMove}
          onClick={(e) => {
            e.stopPropagation();
            const next = isActive ? null : i;
            setActive(next);
            if (next !== null) {
              // Smoothly center the expanded card horizontally and vertically
              requestAnimationFrame(() => {
                cardRefs.current[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
              });
            }
          }}
          className={`group relative flex flex-col shrink-0 snap-center rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
            isActive
              ? 'w-[300px] md:w-[380px] h-[520px] md:h-[560px] z-50 border-cyan-300/60 scale-105 shadow-[0_8px_30px_rgba(34,211,238,0.25)]'
              : 'w-[280px] md:w-[320px] h-[420px] md:h-[440px] z-10 border-transparent'
          }`}
          style={{
            ['--card-border' as any]: c.borderColor || 'transparent',
            background: c.gradient,
            ['--spotlight-color' as any]: 'rgba(255,255,255,0.3)',
            scrollMargin: 'calc(3.5rem + env(safe-area-inset-top))'
          } as React.CSSProperties}
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />

          <div className="relative z-10 p-2 box-border">
            <div className={`w-full overflow-hidden rounded-xl ${isActive ? 'h-44 md:h-56' : 'h-36 md:h-44'}` }>
              <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <footer className="relative z-10 p-3 pt-1 text-white font-sans grid grid-cols-1 gap-y-2">
            <h3 className={`m-0 font-semibold ${isActive ? 'text-[1.15rem] md:text-[1.25rem]' : 'text-[1.05rem] md:text-[1.1rem] cg-clamp-1'}`}>{c.title}</h3>
            {c.description && (
              <p className={`m-0 opacity-90 leading-relaxed ${isActive ? 'text-[1rem]' : 'text-[0.95rem] cg-clamp-3'}`}>{c.description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {(c.subtitle || '')
                .split('•')
                .map((t) => t.trim())
                .filter(Boolean)
                .slice(0, 8)
                .map((t, idx) => (
                  <span
                    key={idx}
                    className={`${isActive ? 'text-[0.8rem]' : 'text-[0.75rem]'} px-2 py-1 rounded-full border border-cyan-400/40 text-cyan-200/90 bg-cyan-500/10`}
                  >
                    {t}
                  </span>
                ))}
            </div>
            {isActive && c.url && (
              <div className="pt-1">
                <a
                  href={c.url}
                  onClick={(e) => { e.stopPropagation(); handleOpenUrl(c.url); }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-cyan-300/60 text-cyan-100 bg-cyan-500/10 hover:bg-cyan-500/20 transition"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                    <path d="M5 5h5V3H3v7h2V5z" fillOpacity=".5" />
                  </svg>
                </a>
              </div>
            )}
          </footer>

          <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ border: '2px solid var(--card-border)' }} />
        </article>
      );})}

      {/* Darken everything except spotlighted area */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
        }}
      />

      {/* Initial fade overlay that disappears on first pointer move */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          opacity: 1
        }}
      />
    </div>
    </>
  );
};

export default ChromaGrid;
