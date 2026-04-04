import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-md font-bold transition-all flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-container hover:text-on-primary-container shadow-lg shadow-primary/10",
    secondary: "bg-primary-container text-on-primary-container hover:opacity-90",
    tertiary: "bg-tertiary-container text-on-tertiary-container hover:opacity-90 shadow-lg shadow-tertiary/10",
    outline: "bg-white/5 hover:bg-white/10 text-white border border-white/20",
    ghost: "bg-transparent hover:bg-surface-container text-on-surface"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg",
    xl: "px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
