import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaAws, FaDocker, FaJava, FaPython, FaReact, FaTerminal } from "react-icons/fa";
import { SiApachekafka, SiFastapi, SiKubernetes, SiPostgresql, SiSpringboot, SiTypescript } from "react-icons/si";

// Interactive Terminal commands
const TERMINAL_COMMANDS = [
  {
  cmd: "whoami",
  output: [
    "Nivethan Rajendran",
    "Information Technology Undergraduate | University of Moratuwa"
  ]
},
{
  cmd: "cat skills.json",
  output: [
    '{ "languages": ["Python", "Java", "JavaScript", "TypeScript"] }',
    '{ "frameworks": ["Spring Boot", "FastAPI", "React"] }',
    '{ "databases": ["PostgreSQL", "MongoDB"] }',
    '{ "cloud": ["AWS (EC2, RDS, VPC, Lambda)"] }',
    '{ "technologies": ["Kafka", "MCP", "RAG", "Docker", "Git", "Linux"] }'
  ]
},
{
  cmd: "cat experience.txt",
  output: [
    "→ B.Sc. (Hons) Information Technology – University of Moratuwa",
    "→ Strong understanding of core Computer Science fundamentals",
    "→ Clean Architecture & SOLID principles",
    "→ Data Structures | Algorithms | System Design Basics"
  ]
},
{
  cmd: "./run_passion.sh",
  output: [
    "▶ Learning and building real-world applications...",
    "▶ Exploring scalable system development...",
    "▶ Experimenting with cloud and AI-driven solutions...",
    "✓ Growing every day and ready for new challenges!"
  ]
}

];

function InteractiveTerminal() {
  const [history, setHistory] = useState<{ cmd: string; output: string[] }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentOutput, setCurrentOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const runCommand = async (command: typeof TERMINAL_COMMANDS[0]) => {
    if (isTyping) return;
    setIsTyping(true);
    setCurrentOutput([]);
    setHistory(prev => [...prev, { cmd: command.cmd, output: [] }]);

    for (let i = 0; i < command.output.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 150));
      setCurrentOutput(prev => [...prev, command.output[i]]);
    }

    setHistory(prev => {
      const newHistory = [...prev];
      newHistory[newHistory.length - 1].output = command.output;
      return newHistory;
    });

    setCurrentOutput([]);
    setIsTyping(false);

    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0f]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] md:text-xs text-white/40 ml-1 md:ml-2 font-mono hidden sm:inline">nivethan@portfolio ~ </span>
        </div>
        <span className="text-[9px] md:text-[10px] text-[#00d4ff]/60">Click commands below ↓</span>
      </div>

      {/* Content */}
      <div ref={terminalRef} className="p-3 md:p-4 font-mono text-xs md:text-sm h-[220px] md:h-[280px] overflow-y-auto">
        {history.map((entry, i) => (
          <div key={i} className="mb-2 md:mb-3">
            <div className="text-[#00d4ff]">$ {entry.cmd}</div>
            {entry.output.map((line, j) => (
              <div key={j} className={line.startsWith('✓') ? 'text-green-400' : line.startsWith('▶') ? 'text-yellow-400' : line.startsWith('→') ? 'text-white/70' : 'text-white/60'}>
                {line}
              </div>
            ))}
          </div>
        ))}
        {currentOutput.map((line, i) => (
          <div key={i} className={line.startsWith('✓') ? 'text-green-400' : line.startsWith('▶') ? 'text-yellow-400' : line.startsWith('→') ? 'text-white/70' : 'text-white/60'}>
            {line}
          </div>
        ))}
        {isTyping && <span className="inline-block w-2 h-3 md:h-4 bg-[#00d4ff] animate-pulse" />}
        {history.length === 0 && !isTyping && (
          <div className="text-white/30 text-xs">Click a command below to explore...</div>
        )}
      </div>

      {/* Commands */}
      <div className="p-2 md:p-3 bg-white/[0.02] border-t border-white/5 flex flex-wrap gap-1.5 md:gap-2">
        {TERMINAL_COMMANDS.map((command) => (
          <button
            key={command.cmd}
            onClick={() => runCommand(command)}
            disabled={isTyping}
            className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-mono rounded-lg border transition-all ${isTyping
                ? 'border-white/5 text-white/30 cursor-not-allowed'
                : 'border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50'
              }`}
          >
            $ {command.cmd}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Tech nodes with better Kafka color
const techNodes = [
  { id: 1, icon: <FaJava />, name: "Java", x: 12, y: 18, color: "#ED8B00", connections: [2, 3, 7] },
  { id: 2, icon: <SiSpringboot />, name: "Spring Boot", x: 32, y: 12, color: "#6DB33F", connections: [1, 3, 4] },
  { id: 3, icon: <SiApachekafka />, name: "Kafka", x: 52, y: 22, color: "#FF6B35", connections: [1, 2, 5, 12] },
  { id: 4, icon: <FaDocker />, name: "Docker", x: 72, y: 15, color: "#2496ED", connections: [2, 5, 6] },
  { id: 5, icon: <SiKubernetes />, name: "K8s", x: 88, y: 35, color: "#326CE5", connections: [3, 4, 6] },
  { id: 6, icon: <FaAws />, name: "AWS", x: 75, y: 55, color: "#FF9900", connections: [4, 5, 9] },
  { id: 7, icon: <FaReact />, name: "React", x: 22, y: 48, color: "#61DAFB", connections: [1, 8, 10] },
  { id: 8, icon: <SiTypescript />, name: "TypeScript", x: 42, y: 52, color: "#3178C6", connections: [7, 9, 10] },
  { id: 9, icon: <SiPostgresql />, name: "PostgreSQL", x: 58, y: 72, color: "#4169E1", connections: [6, 8, 11] },
  { id: 10, icon: <FaPython />, name: "Python", x: 18, y: 72, color: "#3776AB", connections: [7, 8, 11, 12] },
  { id: 11, icon: <FaTerminal />, name: "RAG/MCP", x: 38, y: 85, color: "#00d4ff", connections: [9, 10] },
  { id: 12, icon: <SiFastapi />, name: "FastAPI", x: 82, y: 78, color: "#009688", connections: [3, 10] },
];

function TechConstellation() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const getConnectedNodes = (nodeId: number) => {
    const node = techNodes.find(n => n.id === nodeId);
    return node?.connections || [];
  };

  return (
    <motion.div
      className="relative w-full h-[300px] md:h-[400px] rounded-xl md:rounded-2xl border border-white/10 bg-[#050508] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-32 md:w-64 h-32 md:h-64 bg-[#00d4ff]/20 rounded-full blur-[60px] md:blur-[100px] -top-16 md:-top-32 -left-16 md:-left-32" />
        <div className="absolute w-24 md:w-48 h-24 md:h-48 bg-[#6366f1]/20 rounded-full blur-[50px] md:blur-[80px] -bottom-12 md:-bottom-24 -right-12 md:-right-24" />
      </div>

      {/* Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {techNodes.map(node =>
          node.connections.map(targetId => {
            const target = techNodes.find(n => n.id === targetId);
            if (!target || targetId < node.id) return null;
            const isActive = hoveredNode === node.id || hoveredNode === targetId || activeNode === node.id || activeNode === targetId;
            return (
              <motion.line
                key={`line-${node.id}-${targetId}`}
                x1={`${node.x}%`} y1={`${node.y}%`}
                x2={`${target.x}%`} y2={`${target.y}%`}
                stroke={isActive ? "#00d4ff" : "rgba(255,255,255,0.08)"}
                strokeWidth={isActive ? 1.5 : 0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            );
          })
        )}
      </svg>

      {/* Nodes */}
      {techNodes.map((node, index) => {
        const isConnected = hoveredNode ? getConnectedNodes(hoveredNode).includes(node.id) : false;
        const isActive = hoveredNode === node.id || activeNode === node.id || isConnected;

        return (
          <motion.div
            key={node.id}
            className="absolute cursor-pointer"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.08, type: "spring" }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onTouchStart={() => setActiveNode(activeNode === node.id ? null : node.id)}
          >
            <motion.div
              className="relative"
              animate={{ scale: isActive ? 1.15 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                style={{ background: node.color }}
                animate={{ opacity: isActive ? 0.5 : 0, scale: isActive ? 1.5 : 1 }}
              />
              <div
                className="relative w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-xl transition-all duration-300"
                style={{
                  background: isActive ? `${node.color}30` : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${isActive ? node.color : 'rgba(255,255,255,0.1)'}`,
                  color: isActive ? node.color : 'rgba(255,255,255,0.6)',
                  boxShadow: isActive ? `0 0 15px ${node.color}40` : 'none',
                }}
              >
                {node.icon}
              </div>
              <motion.div
                className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                animate={{ opacity: isActive ? 1 : 0 }}
              >
                <span className="text-[8px] md:text-[10px] font-medium px-1.5 md:px-2 py-0.5 rounded-full"
                  style={{ background: `${node.color}20`, color: node.color }}>
                  {node.name}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-[9px] md:text-[10px] text-white/30">
        Tap to explore connections
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="text-[#00d4ff]">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building systems that scale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <InteractiveTerminal />
          <motion.div
            className="glass-card p-5 md:p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-white/70 leading-relaxed">
              <p>
                I'm <span className="text-[#00d4ff] font-medium">Nivethan</span>, a{" "}
                <span className="text-white/90">B.Sc. (Hons) in Information Technology</span> undergraduate
                at the University of Moratuwa from Colombo, Sri Lanka — passionate about building
                scalable, reliable, and production-ready systems.
              </p>
              <p>
                I develop robust backend services with <span className="text-[#00d4ff]">Java</span>,{" "}
                <span className="text-[#00d4ff]">Spring Boot</span>, and <span className="text-[#00d4ff]">FastAPI</span>,
                design real-time data pipelines using <span className="text-[#00d4ff]">Kafka</span> and{" "}
                <span className="text-[#00d4ff]">RabbitMQ</span>, and deliver seamless full-stack experiences
                with <span className="text-[#00d4ff]">React</span> and <span className="text-[#00d4ff]">TypeScript</span>.
              </p>
              <p>
                I'm comfortable working with <span className="text-white/90">AWS</span> (EC2, S3, RDS, Lambda)
                and <span className="text-white/90">Docker</span> for cloud deployment. I also have experience
                with <span className="text-[#00d4ff]">RAG</span> pipelines and <span className="text-[#00d4ff]">MCP</span> for AI-powered applications.
              </p>
              <p className="text-white/50 text-xs md:text-sm">
                Clean architecture • SOLID principles • Test-driven development • CI/CD • Agile
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 mb-4 md:mb-6">
            Tech Constellation
          </p>
          <TechConstellation />
        </motion.div>
      </div>
    </section>
  );
}
