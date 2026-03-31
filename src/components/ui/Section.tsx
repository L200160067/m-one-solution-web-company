import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id, ...props }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`} {...props}>
      {children}
    </section>
  );
}
