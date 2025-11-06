import { NextRequest } from 'next/server'
import { posts } from './data'
import { filterPosts, sortPosts } from '@/utils/sorting'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const sortQuery = searchParams.get('sort')
  const searchQuery = searchParams.get('search')

  let result = posts

  if (sortQuery) {
    result = sortPosts(result, sortQuery)
  }

  if (searchQuery) {
    result = filterPosts(result, searchQuery)
  }

  return Response.json(result)
}

export async function POST(request: Request) {
  const post = await request.json()
  const newPost = posts.push({ id: posts.length + 1, ...post })

  return Response.json(newPost, { status: 201 })
}
