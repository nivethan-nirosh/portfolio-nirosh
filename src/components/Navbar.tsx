import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#details", label: "Details" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''));
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px", // earlier activation
        threshold: [0.15, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-cyan-500/20 border border-cyan-400/30 grid place-items-center text-cyan-300 font-bold">NR</span>
          <span className="text-white/90 font-semibold tracking-wide">Nivethan Rajendran</span>
        </a>

        <button className="md:hidden p-2 rounded glow border border-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white/80">
            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25A.75.75 0 0 1 4.5 11h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-white/70 hover:text-white transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all ${active===l.href ? 'text-white after:w-full' : 'after:w-0'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <ul className="px-4 py-3 space-y-3 bg-black/60 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-white/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
