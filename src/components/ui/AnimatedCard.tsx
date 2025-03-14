
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const AnimatedCard = ({ 
  children, 
  className,
  glowColor = "rgba(255, 255, 255, 0.6)"
}: AnimatedCardProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
    setOpacity(0.15);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300 overflow-hidden bg-white shadow-sm border border-slate-100",
        isFocused ? "shadow-md translate-y-[-5px]" : "",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div 
        className="glow pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedCard;
