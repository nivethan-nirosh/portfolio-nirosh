import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ParticleField from "../components/ParticleField";
import PixelTransition from "../components/PixelTransition";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
    });
  }, [controls]);

  const [text] = useTypewriter({
    words: [
      "Tech Explorer",
      "Full Stack Development Practitioner",
      "AI Enthusiast",
      "Turning Ideas Into Impact",
      "Curiosity-Fueled Creator"
    ],
    loop: true,
    deleteSpeed: 40,
    delaySpeed: 2500,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-start md:items-center overflow-hidden">
      <ParticleField />

      <div className="container relative z-10 pt-40 sm:pt-32 pb-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Profile Photo - Show first on mobile */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow */}
              <motion.div
                className="absolute -inset-6 md:-inset-8 rounded-3xl opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
                }}
                animate={controls}
              />

              {/* Photo Card */}
              <div className="relative glass-card-strong p-1.5 md:p-2 rounded-xl md:rounded-2xl">
                <PixelTransition
                  firstContent={
                    <img
                      src="/nirosh.jpg"
                      alt="Nivethan Rajendran"
                      className="w-full h-full object-cover"
                    />
                  }
                  secondContent={
                    <div className="w-full h-full bg-gradient-to-br from-[#00d4ff]/20 to-[#6366f1]/20 flex items-center justify-center p-6 md:p-8">
                      <div className="text-center">
                        <p className="text-[#00d4ff] text-xs md:text-sm font-medium mb-2 md:mb-3 tracking-widest uppercase">Undergraduate</p>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Nivethan</h3>
                        <h3 className="text-lg md:text-xl font-bold text-[#00d4ff] mb-2">Rajendran</h3>
                        <p className="text-white/60 text-xs md:text-sm">University of Moratuwa</p>
                        <div className="flex justify-center gap-3 mt-4 md:mt-6">
                          <a
                            href="https://github.com/nivethan-nirosh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/10 hover:bg-[#00d4ff]/20 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </a>
                          <a
                            href="https://linkedin.com/in/nivethan-rajendran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/10 hover:bg-[#00d4ff]/20 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaLinkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  }
                  gridSize={10}
                  pixelColor="rgba(0, 212, 255, 0.8)"
                  className="w-[220px] h-[280px] sm:w-[280px] sm:h-[350px] md:w-[320px] md:h-[400px] rounded-lg md:rounded-xl overflow-hidden"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="status-badge text-xs md:text-sm">Open to Work</span>
            </motion.div>

            {/* Name */}
            <div>
              <motion.p
                className="text-white/60 text-base md:text-lg mb-1 md:mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Nivethan
                <br />
                <span className="text-[#00d4ff]">Rajendran</span>
              </motion.h1>
            </div>

            {/* Typewriter */}
            <motion.div
              className="h-7 md:h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="text-lg sm:text-xl md:text-2xl text-[#00d4ff] font-medium">
                {text}
                <Cursor cursorColor="#00d4ff" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-white/50 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              B.Sc. (Hons) Information Technology undergraduate, Faculty of Information Technology, University of Moratuwa.
            </motion.p>


            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <a href="#contact" className="btn-primary text-sm md:text-base">
                Get in Touch
              </a>
              <a href="#projects" className="btn-secondary text-sm md:text-base">
                View Work
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-2 md:pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="https://github.com/nivethan-nirosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-lg border border-white/10 text-white/50 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
              >
                <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nivethan-rajendran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-lg border border-white/10 text-white/50 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
              >
                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
