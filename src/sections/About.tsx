import MagicBento from "../components/MagicBento";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-white/60">Who I am and what I do</p>
        </div>
        <p className="mt-6 text-white/80 max-w-4xl mx-auto text-center text-base md:text-lg leading-relaxed">
          I’m <span className="text-cyan-300">Nivethan</span>, a <span className="text-cyan-300">B.Sc. (Hons) in Information Technology undergraduate at the University of Moratuwa</span> from Colombo, Sri Lanka — passionate about building scalable, reliable, and production-ready systems.
          I develop robust backend services with <span className="text-cyan-300">Java</span> and <span className="text-cyan-300">Spring Boot</span>, design real-time data pipelines using <span className="text-cyan-300">Kafka</span> and <span className="text-cyan-300">RabbitMQ</span>, and deliver seamless full-stack experiences with <span className="text-cyan-300">React</span> and <span className="text-cyan-300">TypeScript</span>.
          I’m comfortable working with <span className="text-cyan-300">AWS</span> (EC2, S3, RDS, Lambda) and <span className="text-cyan-300">Docker</span> for cloud deployment and container orchestration.
          My development approach emphasizes <span className="text-cyan-300">clean architecture</span>, <span className="text-cyan-300">SOLID principles</span>, and <span className="text-cyan-300">test-driven development</span>, ensuring high-quality, maintainable, and scalable code.
          I’m also experienced with <span className="text-cyan-300">CI/CD pipelines</span>, <span className="text-cyan-300">Git workflows</span>, and <span className="text-cyan-300">agile</span> methodologies.
          Currently, I’m deepening my expertise in <span className="text-cyan-300">cloud-native microservices</span> and <span className="text-cyan-300">distributed systems</span> — focusing on performance, resilience, and developer experience.
        </p>


        <div className="mt-10 flex justify-center">
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="34, 211, 238"
            cards={[
              { color: '#060010', title: 'Technical', description: 'Java • C • TypeScript/JavaScript • Python', label: 'Skills' },
              { color: '#060010', title: 'Frameworks', description: 'Spring Boot • React • Angular • HTML/CSS', label: 'Stack' },
              { color: '#060010', title: 'Cloud & Tools', description: 'Docker • AWS (EC2, S3, VPC, RDS)', label: 'Cloud' },
              { color: '#060010', title: 'Data', description: 'PostgreSQL • MySQL • MongoDB • Supabase • Neon', label: 'Databases' },
              { color: '#060010', title: 'DevOps', description: 'Git • GitHub • Netlify • RabbitMQ • Kafka', label: 'Ops' },
              { color: '#060010', title: 'Currently Learning', description: 'Cloud‑native • Testing & CI • Advanced React', label: 'Growth' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
