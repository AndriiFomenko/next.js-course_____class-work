'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/'
  },
  {
    id: 2,
    title: 'Users',
    path: '/users'
  },
  {
    id: 3,
    title: 'Products',
    path: '/products'
  }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-4 bg-gray-800 p-4 mb-8">
      {links.map((link) => (
        <Link href={link.path} key={link.id} className={`${pathname === link.path ? 'text-white' : 'text-gray-400'}`}>
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
