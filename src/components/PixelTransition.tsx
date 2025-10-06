import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  aspectRatio?: string;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 8,
  pixelColor = 'rgba(0, 0, 0, 0.2)',
  animationStepDuration = 0.4,
  className = '',
  aspectRatio = '100%'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || 
     (navigator.maxTouchPoints > 0) || 
     window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('absolute');
        pixel.classList.add('hidden');
        pixel.style.backgroundColor = pixelColor;
        pixel.style.opacity = '0.7';
        pixel.style.transition = 'opacity 0.2s ease';

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>('div');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / (totalPixels * 0.7);

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random',
        grid: 'auto',
        amount: 1.5
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration * 0.7, () => {
      if (activeEl) {
        activeEl.style.display = activate ? 'block' : 'none';
        activeEl.style.pointerEvents = activate ? 'none' : '';
      }
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration * 0.7,
      stagger: {
        each: staggerDuration,
        from: 'random',
        grid: 'auto',
        amount: 1.5
      }
    });
  };

  const handleMouseEnter = (): void => {
    if (!isActive) animatePixels(true);
  };

  const handleMouseLeave = (): void => {
    if (isActive) animatePixels(false);
  };

  const handleClick = (): void => {
    if (isTouchDevice) {
      animatePixels(!isActive);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl border-2 border-white/10 ${className}`}
      style={{ paddingTop: aspectRatio }}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={handleClick}
    >
      <div className="absolute inset-0 w-full h-full">
        {firstContent}
      </div>

      <div 
        ref={activeRef} 
        className="absolute inset-0 w-full h-full z-[2]" 
        style={{ display: 'none' }}
      >
        {secondContent}
      </div>

      <div 
        ref={pixelGridRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]" 
      />
    </div>
  );
};

export default PixelTransition;
