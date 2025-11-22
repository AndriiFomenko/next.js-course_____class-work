import {
  FaBoxOpen,
  FaChartLine,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaKey,
  FaNewspaper,
  FaShoppingBag,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa'
import NavLink from '@/components/NavLink'

const navItems = [
  { href: '/', label: <FaHome className="text-xl" />, isIcon: true, tooltip: 'Home Page' },
  { href: '/about', label: <FaInfoCircle className="text-xl" />, isIcon: true, tooltip: 'About Page' },
  { href: '/dashboard', label: <FaChartLine className="text-xl" />, isIcon: true, tooltip: 'Dashboard' },
  { href: '/posts', label: <FaNewspaper className="text-xl" />, isIcon: true, tooltip: 'Posts Page' },
  { href: '/products', label: <FaBoxOpen className="text-xl" />, isIcon: true, tooltip: 'Products Page' },
  { href: '/order-product', label: <FaShoppingBag className="text-xl" />, isIcon: true, tooltip: 'Order Product Page' },
  { href: '/gallery', label: <FaImages className="text-xl" />, isIcon: true, tooltip: 'Gallery' },
  { href: '/login', label: <FaSignInAlt className="text-xl" />, isIcon: true, tooltip: 'Login' },
  { href: '/register', label: <FaUserPlus className="text-xl" />, isIcon: true, tooltip: 'Register' },
  { href: '/forgot-password', label: <FaKey className="text-xl" />, isIcon: true, tooltip: 'Forgot Password' }
]

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center gap-4">
      {navItems.map(({ href, tooltip, label }) => (
        <NavLink key={href} href={href} title={tooltip}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavBar
