import { useState, useEffect, useRef } from 'react';

/**
 * Custom React hook that dynamically hydrates high-compute components
 * (like D3.js charts or 3D visualizers) only when the component enters the user's viewport.
 */
export function useViewportHydration<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const [isHydrated, setIsHydrated] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsHydrated(true);
        if (element) {
          observer.unobserve(element);
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px',
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref, isHydrated };
}
