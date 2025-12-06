import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''));
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = !open ? 'hidden' : 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-4 bg-transparent'
        }`}
    >
      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-[#00d4ff]"
        style={{ width: progressWidth, boxShadow: '0 0 10px #00d4ff' }}
      />

      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-lg font-semibold text-white hover:text-[#00d4ff] transition-colors">
            Nivethan<span className="text-[#00d4ff]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${active === link.href
                  ? 'text-[#00d4ff]'
                  : 'text-white/60 hover:text-white'
                  }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className="h-[2px] bg-[#00d4ff] mt-1 rounded-full"
                    style={{ boxShadow: '0 0 8px #00d4ff' }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              className="w-5 h-[2px] bg-white rounded-full"
              animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }}
            />
            <motion.span
              className="w-5 h-[2px] bg-white rounded-full"
              animate={{ opacity: open ? 0 : 1 }}
            />
            <motion.span
              className="w-5 h-[2px] bg-white rounded-full"
              animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden fixed inset-0 top-14 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                    className={`text-2xl font-medium ${active === link.href ? 'text-[#00d4ff]' : 'text-white/70'
                      }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
