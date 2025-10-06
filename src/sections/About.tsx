import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="About Me" subtitle="Who I am and what I do" />
        <p className="mt-6 text-white/70 max-w-3xl mx-auto text-center">
          Motivated IT undergraduate with hands-on experience in backend software development using
          <span className="text-cyan-300"> Java</span> and <span className="text-cyan-300">Spring Boot</span>, supported by full‑stack exposure and
          cloud deployments on <span className="text-cyan-300">AWS</span>. Passionate about writing clean, testable code, learning agile
          engineering practices, and building scalable systems.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/[0.07] transition glow">
            <h3 className="text-white font-semibold">Technical</h3>
            <ul className="mt-3 text-white/70 space-y-1 list-disc list-inside">
              <li>Java, C, JavaScript/TypeScript, Python</li>
              <li>Spring Boot, React, Angular, HTML/CSS</li>
              <li>Docker, AWS (EC2, S3, VPC, RDS)</li>
            </ul>
          </div>
          <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/[0.07] transition glow">
            <h3 className="text-white font-semibold">Data & Tools</h3>
            <ul className="mt-3 text-white/70 space-y-1 list-disc list-inside">
              <li>PostgreSQL, MySQL, MongoDB</li>
              <li>Supabase, Neon</li>
              <li>Git, GitHub, Netlify, RabbitMQ, Kafka</li>
            </ul>
          </div>
          <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/[0.07] transition glow">
            <h3 className="text-white font-semibold">Currently Learning</h3>
            <ul className="mt-3 text-white/70 space-y-1 list-disc list-inside">
              <li>Cloud-native deployments</li>
              <li>Testing & CI</li>
              <li>Advanced React patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
