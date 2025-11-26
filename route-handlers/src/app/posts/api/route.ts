import { posts } from '../data'
import { NextRequest } from 'next/server'
import { sortByField } from '@/utils/sorting'
import { filterByQuery } from '@/utils/filtering'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const sortQuery = searchParams.get('sort')
  const query = searchParams.get('query')

  let filteredPosts = query ? filterByQuery(posts, query, ['title', 'body']) : posts

  const sortedPosts = sortQuery ? sortByField(filteredPosts, sortQuery) : filteredPosts

  return Response.json(sortedPosts)
}

export async function POST(request: Request) {
  const post = await request.json()
  const newPost = {
    id: posts.length + 1,
    ...post
  }
  posts.push(newPost)

  return Response.json(newPost, {
    status: 201,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
