import Link from 'next/link'

export const metadata = {
  title: {
    absolute: 'Third Post. Absolute Title'
  }
}

export default function ThirdPost() {
  return (
    <>
      <h1 className="header">Third Post Page</h1>
      <Link className="text-blue-700" href="/posts/first">
        First post (must intercept)
      </Link>
      <Link className="text-blue-700 mx-4" href="/info">
        Info (must intercept root /info)
      </Link>
      <Link className="text-blue-700 mx-4" href="/about">
        About (must intercept ../../about)
      </Link>
    </>
  )
}
