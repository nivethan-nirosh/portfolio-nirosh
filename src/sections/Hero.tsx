import { motion, useAnimation } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";
import PixelTransition from "../components/PixelTransition";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: [0, -15, 0],
        transition: {
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      });
    };
    sequence();
  }, [controls]);

  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "Problem Solver"
    ],
    loop: true,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
              <span className="h-2 w-2 rounded-full bg-cyan-400 mr-2" />
              Available for new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Nivethan Rajendran
              </span>
              <div className="h-6 mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-xl sm:text-2xl">
                  {text}
                  <Cursor cursorColor="#06b6d4" />
                </span>
              </div>
            </h1>

            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              I'm a Software Engineering Undergraduate at University of Moratuwa, passionate about
              creating elegant solutions to complex problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-all w-full sm:w-auto text-center text-sm tracking-wide border border-cyan-500/30"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-md border border-cyan-400/30 text-white font-medium hover:bg-cyan-500/10 transition-all w-full sm:w-auto text-center text-sm tracking-wide"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }
            }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-70"
                animate={controls}
              />
              <PixelTransition
                firstContent={
                  <img
                    src="/nirosh.jpg"
                    alt="Nivethan Rajendran"
                    className="w-full h-full object-cover"
                  />
                }
                secondContent={
                  <div className="w-full h-full bg-gradient-to-br from-cyan-900/90 to-blue-900/90 flex items-center justify-center p-6">
                    <div className="text-center">
                      <p className="text-cyan-300 text-sm font-mono mb-2">Hello, I'm</p>
                      <h3 className="text-2xl font-bold text-white mb-2">Nivethan</h3>
                      <p className="text-cyan-100 text-sm">IT Undergraduate</p>
                      <div className="mt-4 flex justify-center space-x-3">
                        <a 
                          href="https://github.com/nivethan-nirosh" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="sr-only">GitHub</span>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a 
                          href="https://linkedin.com/in/nivethan-rajendran" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                }
                gridSize={8}
                pixelColor="rgba(8, 145, 178, 0.7)"
                className="w-[320px] h-[400px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
