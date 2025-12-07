import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#highlights", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''));
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Close menu when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  const handleNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };

  const toggleMenu = () => {
    const newOpen = !open;
    setOpen(newOpen);
    if (newOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  };

  return (
    <>
      {/* Mobile Menu - Pure CSS for buttery smooth animation */}
      <div
        className={`md:hidden fixed inset-0 z-[100] bg-[#030305] transition-opacity duration-200 ease-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ transform: 'translateZ(0)', touchAction: 'none' }}
        onTouchMove={(e) => e.preventDefault()}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center z-[101]"
          aria-label="Close menu"
        >
          <div className="relative w-6 h-6">
            <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#00d4ff] rounded-full transform -translate-y-1/2 rotate-45" />
            <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#00d4ff] rounded-full transform -translate-y-1/2 -rotate-45" />
          </div>
        </button>

        <nav className="flex flex-col items-center justify-center h-full gap-7 px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-2xl font-semibold transition-colors duration-150 ${active === link.href
                ? 'text-[#00d4ff]'
                : 'text-white/50 active:text-white'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'py-3 bg-black/90 backdrop-blur-md border-b border-white/5' : 'py-4 bg-transparent'
          }`}
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-[#00d4ff]"
          style={{ width: progressWidth, boxShadow: '0 0 10px #00d4ff' }}
        />

        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="text-lg font-semibold text-white hover:text-[#00d4ff] transition-colors duration-150">
              Nivethan<span className="text-[#00d4ff]">.</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative text-sm font-medium transition-colors duration-150 ${active === link.href
                    ? 'text-[#00d4ff]'
                    : 'text-white/60 hover:text-white'
                    }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00d4ff] rounded-full"
                      style={{ boxShadow: '0 0 8px #00d4ff' }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className="w-5 h-[2px] bg-white rounded-full" />
              <span className="w-5 h-[2px] bg-white rounded-full" />
              <span className="w-5 h-[2px] bg-white rounded-full" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
