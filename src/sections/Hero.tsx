import SplitText from "../components/SplitText";
import NeonButton from "../components/NeonButton";
import DecryptedText from "../components/DecryptedText";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <span className="px-3 py-1 rounded-full text-[11px] md:text-xs uppercase tracking-[0.25em] text-cyan-300/80 border border-cyan-400/30 bg-cyan-500/5">
          Software Engineering Intern
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-300/90 tracking-tight">
          Innovation‑Driven
          <br className="hidden md:block" />
          Engineering
        </h1>

        <SplitText
          text="NIVETHAN RAJENDRAN"
          delay={200}
          duration={0.6}
          className="mt-3 text-cyan-400 text-3xl md:text-5xl font-extrabold"
        />

        <p className="mt-4 text-white/70">Hatton, Sri Lanka</p>
        <DecryptedText
          text={
            "Motivated IT undergraduate with hands-on experience in backend development using Java & Spring Boot, with full-stack exposure and AWS deployments. Passionate about clean, testable code, agile practices, and building scalable systems."
          }
          animateOn="view"
          revealDirection="center"
          speed={40}
          maxIterations={16}
          className="text-white/80"
          encryptedClassName="text-cyan-300/70"
          parentClassName="mt-4 max-w-2xl"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NeonButton as="a" href="#projects" label="View Projects" />
          <NeonButton as="a" href="#contact" label="Contact Me" variant="ghost" />
        </div>

        <div className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>
    </section>
  );
}
