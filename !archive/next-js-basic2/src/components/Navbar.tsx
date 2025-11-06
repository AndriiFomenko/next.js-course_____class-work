'use client'
import NavLink from './NavLink'
import { MdOutlineDashboard } from 'react-icons/md'
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaBoxOpen,
  FaShoppingBag,
  FaSignInAlt,
  FaUserPlus,
  FaKey,
  FaImages
} from 'react-icons/fa'

const navItems = [
  { href: '/', label: <FaHome className="text-xl" />, isIcon: true, tooltip: 'Home' },
  { href: '/gallery', label: <FaImages className="text-xl" />, isIcon: true, tooltip: 'Gallery' },
  { href: '/info', label: <FaInfoCircle className="text-xl" />, isIcon: true, tooltip: 'Info' },
  { href: '/posts', label: <FaNewspaper className="text-xl" />, isIcon: true, tooltip: 'Posts' },
  { href: '/products', label: <FaBoxOpen className="text-xl" />, isIcon: true, tooltip: 'Products' },
  { href: '/order-product', label: <FaShoppingBag className="text-xl" />, isIcon: true, tooltip: 'Order Product' },
  { href: '/login', label: <FaSignInAlt className="text-xl" />, isIcon: true, tooltip: 'Login' },
  { href: '/register', label: <FaUserPlus className="text-xl" />, isIcon: true, tooltip: 'Register' },
  { href: '/forgot-password', label: <FaKey className="text-xl" />, isIcon: true, tooltip: 'Forgot Password' },
  { href: '/dashboard', label: <MdOutlineDashboard className="text-xl" />, isIcon: true, tooltip: 'Dashboard' }
]

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-4">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} title={item.tooltip}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
