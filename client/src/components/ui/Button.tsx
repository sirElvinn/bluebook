import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 active:scale-[0.98]',
    secondary: 'bg-white text-blue-700 hover:bg-blue-50 active:scale-[0.98] shadow-sm',
    outline:
      'border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white active:scale-[0.98]',
    'outline-light': 
      'border-2 border-white/20 text-white hover:bg-white/10 active:scale-[0.98]',
    ghost: 'text-gray-600 hover:text-blue-700 hover:bg-blue-50 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}