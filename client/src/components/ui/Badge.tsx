import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'green' | 'gray'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const variants = {
    blue: 'bg-white/80 text-sky-700',
    green: 'bg-emerald-50/80 text-emerald-700',
    gray: 'bg-slate-100/80 text-slate-600',
  }

  return (
    <span
      className={`clay-pill px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}