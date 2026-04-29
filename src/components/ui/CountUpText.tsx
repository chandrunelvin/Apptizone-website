import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import useReducedMotionPreference from './useReducedMotionPreference';

type CountUpTextProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

const CountUpText = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1300,
  className = '',
  style,
}: CountUpTextProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const [displayValue, setDisplayValue] = useState(() => (prefersReducedMotion ? value : 0));

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return undefined;

    let frame = 0;
    let start = 0;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;

        hasStarted = true;

        const tick = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            frame = window.requestAnimationFrame(tick);
          }
        };

        frame = window.requestAnimationFrame(tick);
        observer.unobserve(entry.target);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [duration, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default CountUpText;
