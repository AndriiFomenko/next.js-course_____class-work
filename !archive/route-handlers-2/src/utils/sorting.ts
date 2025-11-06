import { Post } from '@/app/posts/data'

export const sortPosts = (posts: Post[], sortQuery: string): Post[] => {
  const isDescending = sortQuery.startsWith('-')
  const sortField = isDescending ? sortQuery.slice(1) : sortQuery

  return [...posts].sort((a, b) => {
    const fieldA = a[sortField]
    const fieldB = b[sortField]

    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return isDescending ? fieldB - fieldA : fieldA - fieldB
    }

    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return isDescending ? fieldB.localeCompare(fieldA) : fieldA.localeCompare(fieldB)
    }

    return 0
  })
}

export function filterPosts(posts: Post[], query: string): Post[] {
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())
  )
}
