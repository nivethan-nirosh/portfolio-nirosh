import { FaGithub, FaHeart, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <a href="#home" className="text-white/80 hover:text-[#00d4ff] transition-colors font-medium">
            Nivethan Rajendran<span className="text-[#00d4ff]">.</span>
          </a>

          <p className="flex items-center gap-1 text-white/40">
            Made with <FaHeart className="w-3 h-3 text-[#00d4ff]" /> in Sri Lanka
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nivethan-nirosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#00d4ff] transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/nivethan-rajendran15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#00d4ff] transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://medium.com/@nivethanrajendran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#00d4ff] transition-colors"
            >
              <FaMedium className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
