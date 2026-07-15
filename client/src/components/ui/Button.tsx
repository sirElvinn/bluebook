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
    'relative inline-flex items-center justify-center rounded-full font-extrabold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-[2px] active:scale-[0.97]'

  const variants = {
    primary: 'border border-white/35 bg-gradient-to-br from-[#147f9a] via-[#1ca9bd] to-[#1763a2] text-white shadow-[10px_11px_0_rgba(15,95,126,.22),14px_17px_28px_rgba(39,96,157,.17),inset_2px_2px_2px_rgba(255,255,255,.30)] hover:-translate-y-1 hover:shadow-[11px_12px_0_rgba(15,95,126,.20),17px_20px_32px_rgba(39,96,157,.20),inset_2px_2px_2px_rgba(255,255,255,.34)]',
    secondary: 'border border-white/80 bg-[#f8f3eb] text-slate-700 shadow-[8px_9px_0_rgba(166,141,102,.10),12px_14px_25px_rgba(181,159,129,.14),inset_2px_2px_2px_white] hover:-translate-y-1 hover:bg-white',
    outline:
      'border border-slate-300/80 bg-white/70 text-slate-700 shadow-[8px_8px_18px_rgba(181,159,129,0.14),-8px_-8px_16px_rgba(255,255,255,0.82)] hover:-translate-y-0.5 hover:bg-slate-50',
    'outline-light':
      'border border-white/50 bg-white/10 text-white shadow-[8px_8px_16px_rgba(15,34,64,0.18),-8px_-8px_16px_rgba(255,255,255,0.18)] hover:bg-white/15',
    ghost: 'text-slate-600 bg-transparent shadow-none hover:bg-white/70 hover:text-sky-700',
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
