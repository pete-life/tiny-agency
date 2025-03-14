
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const RevealText = ({ 
  children, 
  className,
  threshold = 0.1,
  delay = 0 
}: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before triggering animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Unobserve after animation is triggered
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 ease-out",
        isVisible ? "opacity-100" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default RevealText;
