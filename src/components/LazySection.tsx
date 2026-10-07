import { useEffect, useRef, useState, ReactNode, memo } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  placeholderClassName?: string;
}

const LazySection = memo(({ children, className = "", rootMargin = "500px", placeholderClassName = "min-h-[600px]" }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={`${className} ${isVisible ? "section-calm" : ""}`}>
      {isVisible ? children : <div className={placeholderClassName} aria-hidden="true" />}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;