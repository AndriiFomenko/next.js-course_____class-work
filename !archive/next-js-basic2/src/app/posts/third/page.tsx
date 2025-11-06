import Link from 'next/link'

export default function ThirdPost() {
  return (
    <div>
      <h1 className="header-title">Third Post</h1>
      <div className="flex gap-4 justify-center mb-8">
        <Link href="/posts/first" className="btn btn-primary">
          First Post
        </Link>
        <Link href="/info" className="btn btn-primary">
          Info
        </Link>
        <Link href="/about" className="btn btn-primary">
          About
        </Link>
      </div>
    </div>
  )
}
