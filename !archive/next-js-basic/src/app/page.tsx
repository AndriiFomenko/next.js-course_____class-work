import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/info" className="menu-link">
          Info
        </Link>
        <Link href="/posts" className="menu-link">
          Posts
        </Link>
        <Link href="/products" className="menu-link">
          Products
        </Link>
        <Link href="/login" className="menu-link">
          Login
        </Link>
        <Link href="/register" className="menu-link">
          Register
        </Link>
        <Link href="/dashboard" className="menu-link">
          Dashboard
        </Link>
      </div>
      <h1>Hello from Next.js</h1>
    </div>
  )
}
