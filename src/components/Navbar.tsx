import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intersection observer for active link
  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''));
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.15, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Close menu on route change
  const handleNavClick = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Toggle mobile menu with body scroll lock
  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = !open ? 'hidden' : 'auto';
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
              NR
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Nivethan Rajendran
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                  active === link.href 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
                {active === link.href && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active === link.href
                      ? 'bg-gray-800 text-cyan-400'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
