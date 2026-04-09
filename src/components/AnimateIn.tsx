"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  threshold = 0.08,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      setVisible(true);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    // Already in viewport on load (fixes iOS Safari initial-load issue)
    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom >= 0;
    };
    if (inView()) { setVisible(true); return; }

    // IntersectionObserver for scroll-in
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) show(); },
      { threshold }
    );
    observer.observe(el);

    // Fallback scroll listener — iOS Safari sometimes skips IntersectionObserver
    const onScroll = () => { if (inView()) show(); };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
