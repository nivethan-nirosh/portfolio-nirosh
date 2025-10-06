import { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string; // revealed characters
  encryptedClassName?: string; //scrambling characters
  parentClassName?: string; // wrapper span
  animateOn?: 'view' | 'hover' | 'both';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  encryptedClassName = '',
  parentClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<number | null>(null);
  const currentIterRef = useRef<number>(0);

  useEffect(() => {
    const getNextIndex = (revealedSet: Set<number>): number => {
      const textLength = text.length;
      switch (revealDirection) {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) return nextIndex;
          for (let i = 0; i < textLength; i++) if (!revealedSet.has(i)) return i;
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((c) => c !== ' ')
      : characters.split('');

    const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({ char, i, isSpace: char === ' ', isRevealed: currentRevealed.has(i) }));
        const pool = positions.filter((p) => !p.isSpace && !p.isRevealed).map((p) => p.char);
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        let idx = 0;
        return positions.map((p) => (p.isSpace ? ' ' : p.isRevealed ? originalText[p.i] : pool[idx++])).join('');
      }
      return originalText
        .split('')
        .map((char, i) => (char === ' ' ? ' ' : currentRevealed.has(i) ? originalText[i] : availableChars[Math.floor(Math.random() * availableChars.length)]))
        .join('');
    };

    const startInterval = () => {
      setIsScrambling(true);
      intervalRef.current = window.setInterval(() => {
        setRevealedIndices((prev) => {
          if (sequential) {
            if (prev.size < text.length) {
              const nextIndex = getNextIndex(prev);
              const next = new Set(prev);
              next.add(nextIndex);
              setDisplayText(shuffleText(text, next));
              return next;
            }
            if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; }
            setIsScrambling(false);
            return prev;
          }
          // non-sequential scrambling
          setDisplayText(shuffleText(text, prev));
          currentIterRef.current += 1;
          if (currentIterRef.current >= maxIterations) {
            if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; }
            setIsScrambling(false);
            setDisplayText(text);
          }
          return prev;
        });
      }, speed);
    };

    const shouldRun = isHovering;
    if (shouldRun) startInterval();
    else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; }
    };
  }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    }, { threshold: 0.1 });
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [animateOn, hasAnimated]);

  const hoverHandlers = (animateOn === 'hover' || animateOn === 'both')
    ? { onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false) }
    : {};

  return (
    <span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverHandlers}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const revealed = revealedIndices.has(index) || !isScrambling || !isHovering;
          return (
            <span key={index} className={revealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
