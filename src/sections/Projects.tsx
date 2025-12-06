import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  color: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ERP System for Mahapola Ports & Maritime Academy",
    description: "Full-stack ERP with PayHere payment gateway, JWT authentication, and CRUD operations. Built with Agile Scrum.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
    image: "/erp.png",
    link: "https://github.com/nivethan-nirosh/MPMA-ERP",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "MotionRep – Business Operations Platform",
    description: "Live platform with text SMS API integration, AWS (RDS, EC2, VPC), Docker & Kubernetes deployments.",
    tags: ["Next.js", "Express.js", "AWS", "Docker"],
    image: "/motionrep.png",
    link: "https://github.com/nivethan-nirosh/MotionRep",
    color: "#6366f1",
  },
  {
    id: 3,
    title: "LearnBOT-Z – AI Learning Assistant",
    description: "Fine-tuned Mistral models with RAG pipelines for real-time contextual Q&A.",
    tags: ["React", "Python", "Mistral", "RAG"],
    image: "/learnbot.png",
    color: "#10b981",
  },
  {
    id: 4,
    title: "MindMesh – Real-Time Collaborative Learning",
    description: "Chat, voice & collaborative drawing platform with WebSockets, UDP heartbeat, and Spring Security JWT auth.",
    tags: ["Spring Boot", "Next.js", "MongoDB", "WebSockets"],
    image: "https://mbqpiysownpbwgdkuhgf.supabase.co/storage/v1/object/public/axzell/mindmesh.jpg",
    link: "https://github.com/NPSketchFlow",
    color: "#a855f7",
  },
  {
    id: 5,
    title: "Happy Events – Event Management",
    description: "UI/UX, authentication, 3D object integration, and CRUD operations.",
    tags: ["HTML,CSS & js", "Ballerina", "Three.js", "MySQL"],
    image: "https://mbqpiysownpbwgdkuhgf.supabase.co/storage/v1/object/public/axzell/ballerina.jpg",
    link: "https://github.com/thushanth24/iwb479-coding-ninjas",
    color: "#ec4899",
  },
  {
    id: 6,
    title: "SafeCarry Plus – IoT Smart Suitcase",
    description: "IoT-based smart chemical-carrying suitcase with ESP32, fingerprint lock, GPS tracking, real-time monitoring, and remote unlock.",
    tags: ["ESP32", "NEO M9N", "Firebase", "R307 FS"],
    image: "https://mbqpiysownpbwgdkuhgf.supabase.co/storage/v1/object/public/axzell/IoTproject.jpg",
    color: "#f59e0b",
  },
  {
    id: 7,
    title: "AI-Powered Automobile Service Management",
    description: "Custom ML model for appointment prediction, Kafka-driven polyglot microservices monitoring, containerized deployment.",
    tags: ["Spring Boot", "FastAPI", "Kafka", "Docker", "K8s"],
    image: "https://mbqpiysownpbwgdkuhgf.supabase.co/storage/v1/object/public/axzell/EAD.jpg",
    link: "https://github.com/nivethan-nirosh/Automobile-Service-Management-System",
    color: "#ef4444",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all project images for faster display
  useEffect(() => {
    PROJECTS.forEach((project) => {
      if (project.image.startsWith('http')) {
        const img = new Image();
        img.src = project.image;
      }
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      zIndex: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = PROJECTS.length - 1;
      if (next >= PROJECTS.length) next = 0;
      return next;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeProject = PROJECTS[activeIndex];

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container">
        <motion.div
          className="section-header relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            Featured <span className="text-[#00d4ff]">Projects</span>
          </h2>
          <p className="section-subtitle text-sm md:text-base">
            Swipe through my work
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Display */}
          <div className="relative h-[420px] sm:h-[450px] md:h-[480px] flex items-center justify-center px-2 sm:px-8 md:px-12">
            {/* Glow - simplified */}
            <div
              className="absolute inset-0 opacity-15 blur-2xl transition-colors duration-300"
              style={{ background: `radial-gradient(circle, ${activeProject.color}40 0%, transparent 60%)` }}
            />

            {/* Arrows - Hidden on very small screens */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 z-20 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-colors duration-150 hidden sm:flex"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 z-20 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-colors duration-150 hidden sm:flex"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Card with Swipe Support */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -50) {
                    paginate(1);
                  } else if (offset.x > 50) {
                    paginate(-1);
                  }
                }}
                onDragStart={() => setIsPaused(true)}
                transition={{
                  x: { type: "tween", duration: 0.25, ease: "easeOut" },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full max-w-lg md:max-w-2xl will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                <div
                  className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f]"
                >
                  {/* Badge */}
                  <div
                    className="absolute top-3 md:top-4 left-3 md:left-4 z-10 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-mono font-bold"
                    style={{
                      background: `${activeProject.color}20`,
                      color: activeProject.color,
                      border: `1px solid ${activeProject.color}40`
                    }}
                  >
                    0{activeProject.id} / 0{PROJECTS.length}
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 lg:p-8">
                    <h3
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 line-clamp-2"
                      style={{ textShadow: `0 0 20px ${activeProject.color}30` }}
                    >
                      {activeProject.title}
                    </h3>

                    <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-5 line-clamp-2 md:line-clamp-3">
                      {activeProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {activeProject.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full border"
                          style={{
                            borderColor: `${activeProject.color}40`,
                            color: activeProject.color,
                            background: `${activeProject.color}10`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {activeProject.link && (
                      <motion.a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all"
                        style={{
                          background: `${activeProject.color}20`,
                          color: activeProject.color,
                          border: `1px solid ${activeProject.color}40`,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Project
                        <FaExternalLinkAlt className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-8">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${i === activeIndex
                  ? 'w-5 md:w-6 bg-[#00d4ff]'
                  : 'w-1.5 md:w-2 bg-white/20 hover:bg-white/40'
                  }`}
                style={i === activeIndex ? { boxShadow: '0 0 8px #00d4ff' } : {}}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnails - Hidden on mobile */}
        <motion.div
          className="mt-8 md:mt-12 hidden sm:grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => goToSlide(i)}
              className={`relative aspect-video rounded-lg overflow-hidden border transition-all ${i === activeIndex
                ? 'border-[#00d4ff] ring-2 ring-[#00d4ff]/30'
                : 'border-white/10 hover:border-white/30'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${i === activeIndex ? '' : 'bg-black/50'}`} />
            </motion.button>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/nivethan-nirosh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#00d4ff] transition-colors text-xs md:text-sm"
          >
            <FaGithub className="w-3.5 h-3.5 md:w-4 md:h-4" />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
