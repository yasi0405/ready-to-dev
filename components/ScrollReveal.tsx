'use client';

import {useEffect, useRef, useState} from 'react';

export function ScrollReveal({
  children,
  className = ''
}: Readonly<{children: React.ReactNode; className?: string}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealState, setRevealState] = useState<'idle' | 'ready' | 'visible'>('idle');

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    setRevealState('ready');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          window.requestAnimationFrame(() => setRevealState('visible'));
          observer.disconnect();
        }
      },
      {threshold: 0.14, rootMargin: '0px 0px -12% 0px'}
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal is-${revealState}${revealState === 'visible' ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}
