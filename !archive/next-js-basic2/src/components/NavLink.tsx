'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { Tooltip } from 'react-tooltip'

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  title?: string
}

const NavLink = ({ href, children, className = '', title }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const id = `nav-link-${href.replace(/\//g, '-').replace(/^-/, '')}` // Створюємо унікальний ID для тултіпа

  const baseClass = `
    ${isActive ? 'bg-red-600' : 'bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 hover:scale-115'}
    block text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-150 focus:outline-none relative
    ${className}
  `

  return (
    <>
      <Link href={href} className={baseClass} id={id} data-tooltip-id={id} data-tooltip-content={title}>
        {children}
      </Link>
      {title && (
        <Tooltip
          id={id}
          place="bottom"
          className="z-50"
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        />
      )}
    </>
  )
}

export default NavLink
