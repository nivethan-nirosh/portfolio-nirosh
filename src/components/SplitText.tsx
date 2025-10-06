import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

export type SplitTextProps = {
  text: string;
  delay?: number; // milliseconds before animation starts
  duration?: number; // seconds per element animation
  className?: string;
};

/**
 * SplitText
 * Renders text split into characters and animates them in with GSAP.
 */
export default function SplitText({ text, delay = 0, duration = 0.6, className = "" }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const chars = useMemo(() => {
    // Keep spaces as non-breaking so layout stays intact
    return Array.from(text).map((ch, i) => ({
      key: `${ch}-${i}`,
      char: ch === " " ? "\u00A0" : ch,
    }));
  }, [text]);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll<HTMLSpanElement>("span.__split-char");

    const tl = gsap.timeline({ delay: delay / 1000 });
    tl.fromTo(
      elements,
      { y: "1em", opacity: 0, rotate: -5 },
      {
        y: "0em",
        opacity: 1,
        rotate: 0,
        duration,
        ease: "power3.out",
        stagger: 0.04,
      }
    );

    return () => {
      tl.kill();
    };
  }, [delay, duration, text]);

  return (
    <div ref={containerRef} className={className} aria-label={text}>
      {chars.map(({ key, char }) => (
        <span key={key} className="__split-char inline-block will-change-transform">
          {char}
        </span>
      ))}
    </div>
  );
}
