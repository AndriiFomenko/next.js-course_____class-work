import { Suspense } from 'react'
import Loading from '@/app/loading'
import PostsContent from './PostsContent'
import { fetchPosts } from '@/utils/fetchPosts'

const PostsList = () => {
  const postsPromise = fetchPosts()

  return (
    <Suspense fallback={<Loading />}>
      <PostsContent promise={postsPromise} />
    </Suspense>
  )
}

export default PostsList
