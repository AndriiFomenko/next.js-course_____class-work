'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PostNotFound() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    if (timeLeft === 0) {
      router.replace('/posts')
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-2">Post not found</p>
        <p className="mb-8 text-sm text-slate-500">Redirecting to all posts in {timeLeft} seconds...</p>
        <Link
          href="/posts"
          className="px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
        >
          Back to Posts
        </Link>
      </div>
    </div>
  )
}
