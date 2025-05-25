import React, { forwardRef, useRef, useState, useEffect } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children }, ref) => {
  const localRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(id === 'home'); // Make hero section visible immediately

  useEffect(() => {
    if (id === 'home') return;

    const element = (ref as React.RefObject<HTMLElement>)?.current || localRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, id]);

  const sectionClass = `section${id !== 'home' && isVisible ? ' fade-in-section' : ''}`;

  return (
    <section
      id={id}
      ref={(node) => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={sectionClass}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
