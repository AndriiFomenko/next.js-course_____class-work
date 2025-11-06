'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const navLinks = [
  {
    label: 'Register',
    href: '/register'
  },
  {
    label: 'Login',
    href: '/login'
  },
  {
    label: 'Forgot Password',
    href: '/forgot-password'
  }
]

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [inputValue, setInputValue] = useState('initial value')
  const pathname = usePathname()

  return (
    <div>
      {children}
      <div>
        <input
          className="border-2 block my-8 p-3"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.trim())}
        />

        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold text-black mr-4 border-2 p-2 inline-block ${isActive ? 'bg-red-400' : ''}`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
