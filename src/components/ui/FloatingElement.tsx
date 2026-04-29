import type { CSSProperties, ReactNode } from 'react';
import useReducedMotionPreference from './useReducedMotionPreference';

type FloatingElementProps = {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  axis?: 'x' | 'y';
};

const FloatingElement = ({
  children,
  className = '',
  amplitude = 14,
  duration = 5.2,
  delay = 0,
  axis = 'y',
}: FloatingElementProps) => {
  const prefersReducedMotion = useReducedMotionPreference();

  const style = prefersReducedMotion
    ? undefined
    : ({
        ['--float-distance' as string]: `${amplitude}px`,
        ['--float-duration' as string]: `${duration}s`,
        ['--float-delay' as string]: `${delay}s`,
      } as CSSProperties);

  return (
    <div
      className={`${className} ${prefersReducedMotion ? '' : axis === 'x' ? 'animate-gentle-drift-x' : 'animate-gentle-float'}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
