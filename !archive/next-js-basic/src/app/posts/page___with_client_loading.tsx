'use client'

import Loading from '@/app/posts/loading'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Posts() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Link href="/" className="menu-link">
        Home
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-3xl">Posts Page</h1>

          <hr />

          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>

          <hr />

          <ul>
            <li>
              <h2>
                <Link href="/posts/first">First Post</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link href="/posts/second">Second Post</Link>
              </h2>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
