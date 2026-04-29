import React, { useEffect, useRef, useState } from 'react';
import useReducedMotionPreference from './useReducedMotionPreference';

type TextRevealProps = {
  as?: React.ElementType;
  text: string;
  className?: string;
  delay?: number;
  wordStagger?: number;
};

const TextReveal: React.FC<TextRevealProps> = ({
  as = 'div',
  text,
  className = '',
  delay = 0,
  wordStagger = 36,
}) => {
  const ref = useRef<HTMLElement | null>(null);
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
        threshold: 0.15,
        rootMargin: '0px 0px -12% 0px',
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const Tag: React.ElementType = as;
  const parts = text.split(' ');

  return (
    <Tag ref={ref} className={className}>
      {parts.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block will-change-transform"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(6px)',
            transform: isVisible ? 'translate3d(0,0,0) rotate(0deg)' : 'translate3d(0,32px,0) rotate(2deg)',
            transitionProperty: 'opacity, transform, filter',
            transitionDuration: '820ms',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: `${delay + index * wordStagger}ms`,
            marginRight: '0.26em',
          }}
        >
          {word}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </Tag>
  );
};

export default TextReveal;
