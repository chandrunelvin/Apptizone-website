import React, { useEffect, useRef, useState } from 'react';
import useReducedMotionPreference from './useReducedMotionPreference';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  blur?: number;
  scale?: number;
  rotate?: number;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  distance = 48,
  blur = 10,
  scale = 0.96,
  rotate = 0.8,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : `blur(${blur}px)`,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1) rotate(0deg)' : `translate3d(0, ${distance}px, 0) scale(${scale}) rotate(${rotate}deg)`,
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: '820ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
