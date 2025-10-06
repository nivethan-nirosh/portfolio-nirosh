import SectionHeader from "../components/SectionHeader";

export default function Details() {
  return (
    <section id="details" className="py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Details" subtitle="How to reach me and where I'm based" />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-white/90 font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><span className="text-white/60">Phone:</span> +94 (70) 52 33 414</li>
              <li><span className="text-white/60">Email:</span> <a className="hover:text-cyan-300" href="mailto:nivethanrajendran@gmail.com">nivethanrajendran@gmail.com</a></li>
              <li><span className="text-white/60">Location:</span> Hatton, Sri Lanka</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-white/90 font-semibold">Links</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>
                <a className="hover:text-cyan-300" href="https://linkedin.com/in/nivethan-rajendran" target="_blank" rel="noreferrer">linkedin.com/in/nivethan-rajendran</a>
              </li>
              <li>
                <a className="hover:text-cyan-300" href="https://github.com/nivethan-nirosh" target="_blank" rel="noreferrer">github.com/nivethan-nirosh</a>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-white/90 font-semibold">Education</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>
                <span className="text-white">BSc (Hons) in Information Technology</span>
                <br />University of Moratuwa — GPA 3.48 (2023–present)
              </li>
              <li>
                CP/HZ/Highlands National College (2008–2022)
                <br />A/L Physical Science – 3B • O/L – 9A
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
