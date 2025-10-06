import SplitText from "../components/SplitText";
import GradientBlinds from "../components/GradientBlinds";
import NeonButton from "../components/NeonButton";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <GradientBlinds
            gradientColors={["#20C6E3", "#5227FF"]}
            angle={0}
            noise={0.15}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.6}
            spotlightSoftness={1}
            spotlightOpacity={0.9}
            mouseDampening={0.12}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>
      </div>
      <div className="radial-blob" />
      <div className="relative max-w-6xl mx-auto px-4">
        <p className="text-cyan-300/80 tracking-widest text-xs md:text-sm uppercase">Software Engineering Intern</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Innovation-Driven
          <br className="hidden md:block" />
          Engineering
        </h1>
        <SplitText
          text="NIVETHAN RAJENDRAN"
          delay={200}
          duration={0.6}
          className="text-cyan-400 text-4xl md:text-6xl font-extrabold mt-2"
        />
        <p className="mt-4 text-white/70">Hatton, Sri Lanka</p>
        <p className="mt-4 text-white/70 max-w-2xl">
          Motivated IT undergraduate with hands-on experience in backend development using Java & Spring Boot,
          with full‑stack exposure and AWS deployments. Passionate about clean, testable code, agile practices,
          and building scalable systems.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <NeonButton as="a" href="#projects" label="View Projects" />
          <NeonButton as="a" href="#contact" label="Contact Me" variant="ghost" />
        </div>
      </div>
    </section>
  );
}
