import SectionHeader from "../components/SectionHeader";

export default function Activities() {
  return (
    <section id="activities" className="py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Activities & Volunteering" subtitle="Leadership, clubs, and languages" />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/[0.07] transition glow">
            <h3 className="text-white/90 font-semibold">Extracurricular</h3>
            <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
              <li>Participant in All‑Island Chess Tournament; Board Prize Winner (District)</li>
              <li>Vice‑Captain, School Level Cricket (SLSCA)</li>
              <li>Member, Students Union, University of Moratuwa</li>
              <li>Mentored microcontroller‑based project development</li>
            </ul>
          </div>
          <div className="p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/[0.07] transition glow">
            <h3 className="text-white/90 font-semibold">Volunteering & Languages</h3>
            <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
              <li>AIESEC in Colombo South — Global Volunteering (Ongoing), Brand & Public Relations</li>
              <li>Languages: English • Sinhala • Tamil</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
