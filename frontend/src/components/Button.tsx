import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const style = variant === 'primary' 
    ? "bg-primary text-white hover:bg-blue-800" 
    : "border-2 border-primary text-primary hover:bg-primary/10";

  return (
    <button 
      onClick={onClick}
      className={`${style} rounded-full px-8 py-4 font-bold text-lg flex items-center gap-2 transition-all`}
    >
      {children}
      {variant === 'primary' && <ArrowRight />}
    </button>
  );
};