import Link from 'next/link'
import { Metadata } from 'next'
import PostsList from '@/components/PostsList'

export const metadata: Metadata = {
  title: 'Posts Page Title'
}

const PostsPage = () => {
  return <div>
    <h1 className="header-title">Posts Page</h1>
    <div className="flex gap-4 justify-center mb-8">
      <Link className="btn btn-primary" href="/posts/first">Go to First Post</Link>
      <Link className="btn btn-primary" href="/posts/second">Go to Second Post</Link>
      <Link className="btn btn-primary" href="/posts/third">Go to Third Post</Link>
    </div>
    <PostsList />
  </div>
}

export default PostsPage
