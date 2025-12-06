import { useEffect, useRef } from 'react';

/**
 * AuroraBackground
 * Animated gradient background with flowing color blobs that create
 * a living, breathing atmosphere for the portfolio.
 */
export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add subtle mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;

      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Aurora Blobs */}
      <div
        ref={containerRef}
        className="aurora-container"
        style={{
          transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Grid Overlay */}
      <div className="bg-grid-overlay" />

      {/* Noise Texture */}
      <div className="noise-overlay" />
    </>
  );
}
