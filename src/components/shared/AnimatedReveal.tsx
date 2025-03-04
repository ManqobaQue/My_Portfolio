
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: !isVisible 
          ? animation.includes('up') 
            ? 'translateY(20px)' 
            : animation.includes('down') 
              ? 'translateY(-20px)' 
              : animation.includes('left') 
                ? 'translateX(20px)' 
                : animation.includes('right') 
                  ? 'translateX(-20px)' 
                  : animation.includes('scale') 
                    ? 'scale(0.95)' 
                    : 'none'
          : 'none',
        transition: isVisible ? `opacity ${duration}ms ease-out, transform ${duration}ms ease-out` : 'none',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedReveal;
