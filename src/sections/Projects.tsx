import TiltCard from "../components/TiltCard";
import NeonButton from "../components/NeonButton";
import SectionHeader from "../components/SectionHeader";

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
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Projects" subtitle="Selected work that showcases my interests and skills" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <TiltCard key={p.title} className="">
              <article className="group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition glow">
                <h3 className="text-white font-semibold group-hover:text-cyan-300 transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded border border-cyan-400/40 text-cyan-200/90 bg-cyan-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  {p.link && (
                    <NeonButton as="a" href={p.link} label="View Project" className="text-sm" />
                  )}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
