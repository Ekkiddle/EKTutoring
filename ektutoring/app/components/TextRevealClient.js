'use client';

import { useRef, useEffect, useState } from 'react';

export default function TextRevealClient({ children, delay = 500 }) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Check visibility on initial load
    if (textRef.current && textRef.current.getBoundingClientRect().top < window.innerHeight) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
      observer.disconnect();
    }

    return () => {
      if (observer && textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={textRef}
      className={`transition-all duration-[2000ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
