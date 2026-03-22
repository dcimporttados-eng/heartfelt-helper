import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale";
}

const variantClass: Record<NonNullable<ScrollRevealProps["variant"]>, string> = {
  up: "animate-fade-in",
  left: "animate-fade-in-left",
  right: "animate-fade-in-right",
  scale: "animate-fade-in-scale",
};

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add(variantClass[variant]);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant]);

  return (
    <div ref={ref} className={`opacity-0 will-change-transform ${className}`}>
      {children}
    </div>
  );
};
