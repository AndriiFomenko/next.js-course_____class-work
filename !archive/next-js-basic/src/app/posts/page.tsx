import Link from 'next/link'

export const metadata = {
  title: 'Posts',
  description: 'Posts page'
}

export default function Posts() {
  return (
    <div>
      <Link href="/" className="menu-link">
        Home
      </Link>
      <Link href="/posts/first" className="menu-link">
        First
      </Link>
      <Link href="/posts/second" className="menu-link">
        Second
      </Link>
      <Link href="/posts/third" className="menu-link">
        Third
      </Link>
      <h1>Posts Page</h1>
    </div>
  )
}
