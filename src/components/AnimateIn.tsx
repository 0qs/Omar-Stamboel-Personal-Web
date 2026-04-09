import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

// Simple passthrough — content is always visible on every device.
// Scroll animations removed to guarantee compatibility with iOS Safari.
export default function AnimateIn({ children, className = "" }: AnimateInProps) {
  return <div className={className}>{children}</div>;
}
