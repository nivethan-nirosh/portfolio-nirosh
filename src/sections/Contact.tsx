import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Contact" subtitle="Like the vibe? I'm open to internship opportunities and collaborations." />

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget as HTMLFormElement);
              const subject = encodeURIComponent("Portfolio inquiry from " + (data.get("name") || ""));
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
              );
              window.location.href = `mailto:nivethanrajendran@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="p-5 rounded-xl border border-white/10 bg-white/5 glow"
          >
            <div className="grid gap-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/40"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/40"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/40"
              />
              <button type="submit" className="px-5 py-3 rounded-md border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/10 transition glow w-fit">
                Send Message
              </button>
            </div>
          </form>

          <div className="p-5 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-white font-semibold">Reach me</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>
                <a className="hover:text-cyan-300" href="mailto:nivethanrajendran@gmail.com">nivethanrajendran@gmail.com</a>
              </li>
              <li>
                <a className="hover:text-cyan-300" href="https://linkedin.com/in/nivethan-rajendran" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="hover:text-cyan-300" href="https://github.com/nivethan-nirosh" target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li className="text-white/70">Phone: +94 (70) 52 33 414</li>
            </ul>
            <p className="mt-6 text-sm text-white/60">Replace with your real links and email.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
