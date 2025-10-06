import NeonButton from "../components/NeonButton";
import SectionHeader from "../components/SectionHeader";
import ChromaGrid from "../components/ChromaGrid";
import type { ChromaItem } from "../components/ChromaGrid";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "ERP System for Mahapola Ports & Maritime Academy (SLPA)",
    description:
      "Backend features (auth, payments, CRUD, DB optimization) built in an Agile Scrum team; secure and scalable delivery.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "Payhere"],
    link: "https://github.com/nivethan-nirosh",
  },
  {
    title: "MotionRep – Unified Business Operations Platform",
    description:
      "Led backend and deployments using Express.js, AWS RDS, Docker, and Kubernetes; applied agile practices in a 4-member team.",
    tags: ["Next.js", "Express.js", "AWS RDS", "Docker", "Kubernetes", "Netlify", "EC2"],
    link: "https://github.com/nivethan-nirosh",
  },
  {
    title: "LearnBOT-Z – AI-powered Learning Assistant",
    description:
      "Fine-tuned Mistral models and integrated full-stack system for real-time contextual Q&A and document analysis.",
    tags: ["React", "Express", "Python", "Supabase", "Mistral AI"],
    link: "https://github.com/nivethan-nirosh",
  },
  {
    title: "Happy Events – Event Management Web App",
    description:
      "Handled UI/UX, authentication, 3D object integration, CRUD operations, and bug fixes.",
    tags: ["HTML", "Bootstrap", "Ballerina", "Three.js", "MySQL"],
    link: "https://github.com/nivethan-nirosh",
  },
  {
    title: "SafeCarry Plus – IoT Briefcase for Chemical Transport",
    description:
      "Engineered microcontroller-based system with GPS, display interface, and circuit/system design.",
    tags: ["C", "Arduino", "ESP", "Firebase", "IoT"],
    link: "https://github.com/nivethan-nirosh",
  },
  {
    title: "E-commerce & Realtime Web Apps",
    description:
      "Built and deployed multiple applications with secure auth and responsive UI; performance optimizations included.",
    tags: ["React", "Express.js", "Neon", "TailwindCSS"],
    link: "https://github.com/nivethan-nirosh",
  },
];

export default function Projects() {
  // Map projects to ChromaGrid items
  const chromaItems: ChromaItem[] = PROJECTS.map((p, i) => {
    const palettes = [
      { border: "#22D3EE", grad: "linear-gradient(145deg,#22D3EE,#000)" },
      { border: "#06B6D4", grad: "linear-gradient(210deg,#06B6D4,#000)" },
      { border: "#67E8F9", grad: "linear-gradient(165deg,#67E8F9,#000)" },
      { border: "#8B5CF6", grad: "linear-gradient(225deg,#8B5CF6,#000)" },
      { border: "#3B82F6", grad: "linear-gradient(135deg,#3B82F6,#000)" },
      { border: "#10B981", grad: "linear-gradient(180deg,#10B981,#000)" },
    ];
    const palette = palettes[i % palettes.length];
    return {
      image: `https://picsum.photos/seed/${encodeURIComponent(p.title)}/600/400`,
      title: p.title,
      description: p.description,
      subtitle: p.tags.join(" • "),
      handle: undefined,
      borderColor: palette.border,
      gradient: palette.grad,
      url: p.link || p.repo,
    };
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Projects" subtitle="Selected work that showcases my interests and skills" />

        <div className="mt-10 relative" style={{ minHeight: "620px" }}>
          <ChromaGrid items={chromaItems} className="rounded-xl" radius={320} damping={0.45} fadeOut={0.6} ease="power3.out" />
        </div>

        <div className="mt-8 flex justify-center">
          <NeonButton as="a" href="#contact" label="Get in touch" variant="ghost" />
        </div>
      </div>
    </section>
  );
}
