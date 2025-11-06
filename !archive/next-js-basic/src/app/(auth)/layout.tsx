'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

const navLinks = [
  {
    name: 'Register',
    href: '/register'
  },
  {
    name: 'Login',
    href: '/login'
  },
  {
    name: 'Forgot Password',
    href: '/forgot-password'
  }
]

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [input, setInput] = useState('')
  const pathname = usePathname()
  console.log('pathname', pathname)
  return (
    <div>
      <Link href="/" className="menu-link">
        Home
      </Link>

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link href={link.href} key={link.href} className={`menu-link ${isActive ? 'bg-gray-100' : ''}`}>
            {link.name}
          </Link>
        )
      })}
      {children}

      <div>
        <input value={input} type="text" onChange={(e) => setInput(e.target.value.trim())} className="mt-4 p-2" />
      </div>
    </div>
  )
}
