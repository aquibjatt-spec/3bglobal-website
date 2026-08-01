import { useEffect, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Wraps children and reveals them on scroll into view.
 */
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  const Tag = as as 'div';
  return (
    <Tag
      ref={setRef}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
