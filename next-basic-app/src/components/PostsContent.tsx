'use client'

import { use } from 'react'
import type { Post } from '@/utils/fetchPosts'

interface PostsContentProps {
  promise: Promise<Post[]>
}

const PostsContent = ({ promise }: PostsContentProps) => {
  const posts = use(promise)

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

export default PostsContent
