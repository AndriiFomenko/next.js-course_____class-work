'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseClass = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  )
}

export default Button
