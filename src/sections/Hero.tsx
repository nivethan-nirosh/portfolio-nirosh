import { motion, useAnimation } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";

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
                whileHover={{ y: -2 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all w-full sm:w-auto text-center"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                className="px-6 py-3 rounded-lg border border-cyan-400/30 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all w-full sm:w-auto text-center"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
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
              <motion.div 
                className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
                style={{
                  width: '320px',
                  height: '320px'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/nirosh.jpg" 
                  alt="Nivethan Rajendran" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
