import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  durationMs?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  decimals = 0,
  durationMs = 950,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(target);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplayValue(target);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [durationMs, isInView, prefersReducedMotion, target]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {displayValue.toFixed(decimals)}
    </span>
  );
}
