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
          Software Engineering Intern from Hatton, Sri Lanka. I build reliable backend services with
          <span className="text-cyan-300"> Java</span> & <span className="text-cyan-300">Spring Boot</span> and ship full‑stack features with
          <span className="text-cyan-300"> React</span> & <span className="text-cyan-300">TypeScript</span>. Comfortable with cloud on
          <span className="text-cyan-300"> AWS</span> (EC2, S3, RDS) and containers with <span className="text-cyan-300">Docker</span>.
          I care about clean, testable code, performance, and practical DX—while learning
          <span className="text-cyan-300"> cloud‑native</span> patterns and <span className="text-cyan-300">advanced React</span> along the way.
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
