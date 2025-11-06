'use client'

import { useEffect, useState } from 'react'
import Loading from './loading'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  body: string
}

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

        if (!res.ok) {
          throw new Error(`Помилка: ${res.status}`)
        }

        const data = await res.json()
        setPosts(data)
        setLoading(false)
      } catch (err) {
        console.error('Помилка завантаження постів:', err)
        setError(err instanceof Error ? err.message : 'Невідома помилка')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <Loading />
  if (error) return <div className="text-red-500">Помилка: {error}</div>

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <h2 className="header-title-h2">{post.title}</h2>
          <p className="text-gray-600 -mt-4 mb-6">{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Posts() {
  return (
    <div>
      <h1 className="header-title">Posts Page</h1>
      <div>
        <div className="flex gap-4 justify-center mb-8">
          <Link href="/posts/second" className="btn btn-primary">
            Second Post
          </Link>
          <Link href="/posts/first" className="btn btn-secondary">
            First Post
          </Link>
          <Link href="/posts/third" className="btn btn-primary">
            Third Post
          </Link>
        </div>
      </div>
      <PostsList />
    </div>
  )
}
