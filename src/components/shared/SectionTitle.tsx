
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedReveal from './AnimatedReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  return (
    <div className={cn('mb-12', {
      'text-left': align === 'left',
      'text-center mx-auto': align === 'center',
      'text-right ml-auto': align === 'right',
    }, className)}>
      <AnimatedReveal animation="fade-up" delay={100}>
        <h2 className="section-title relative inline-block pb-2">
          {title}
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
        </h2>
      </AnimatedReveal>
      
      {subtitle && (
        <AnimatedReveal animation="fade-up" delay={200}>
          <p className="section-subtitle mt-3 max-w-2xl">
            {subtitle}
          </p>
        </AnimatedReveal>
      )}
    </div>
  );
};

export default SectionTitle;
