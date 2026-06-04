'use client';

import {useEffect, useRef, useState} from 'react';

export function ScrollReveal({
  children,
  className = ''
}: Readonly<{children: React.ReactNode; className?: string}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.16, rootMargin: '0px 0px -10% 0px'}
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
