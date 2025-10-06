import SectionHeader from "../components/SectionHeader";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Achievements & Certifications" subtitle="Highlights and recognitions" />
        <ul className="mt-8 grid md:grid-cols-2 gap-4 text-white/80">
          <li className="p-4 rounded-lg border border-white/10 bg-white/5">1st Runners-up in BIT-CODE 5.0 Hackathon for innovative backend-driven solution (2024)</li>
          <li className="p-4 rounded-lg border border-white/10 bg-white/5">IT Security - Role of SOC Analysts (Alison Certified, 2024)</li>
          <li className="p-4 rounded-lg border border-white/10 bg-white/5">Innovate with Ballerina Recognition (2024)</li>
          <li className="p-4 rounded-lg border border-white/10 bg-white/5">Code Rush Finalists (2024)</li>
          <li className="p-4 rounded-lg border border-white/10 bg-white/5">MoraXtreme 9.0 certified (2024)</li>
          <li className="p-4 rounded-lg border border-white/10 bg-white/5">Completed GLO Program by Global Learning Lab</li>
        </ul>
      </div>
    </section>
  );
}
