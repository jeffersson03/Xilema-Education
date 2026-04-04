import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hoverEffect = true,
  ...props 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(23,28,31,0.04)] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
