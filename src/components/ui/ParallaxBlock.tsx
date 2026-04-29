import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import useReducedMotionPreference from './useReducedMotionPreference';

type ParallaxBlockProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const ParallaxBlock = ({ children, className = '', speed = 0.08 }: ParallaxBlockProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const updateOffset = () => {
      frameRef.current = null;

      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      setOffset(clamp(distanceFromCenter * speed * -1, -36, 36));
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [prefersReducedMotion, speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        prefersReducedMotion
          ? undefined
          : ({
              transform: `translate3d(0, ${offset}px, 0)`,
              transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
              willChange: 'transform',
            } as CSSProperties)
      }
    >
      {children}
    </div>
  );
};

export default ParallaxBlock;
