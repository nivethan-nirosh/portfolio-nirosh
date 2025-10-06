export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Nivethan Rajendran. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="text-white/60 hover:text-cyan-300">Home</a>
          <a href="#about" className="text-white/60 hover:text-cyan-300">About</a>
          <a href="#projects" className="text-white/60 hover:text-cyan-300">Projects</a>
          <a href="#contact" className="text-white/60 hover:text-cyan-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
