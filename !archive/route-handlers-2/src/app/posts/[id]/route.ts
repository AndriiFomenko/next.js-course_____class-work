import { redirect } from 'next/navigation'
import { posts } from '../data'

type ContextProps = {
  params: Promise<{
    id: string
  }>
}

export async function GET(_request: Request, content: ContextProps) {
  const { id } = await content.params
  const post = posts.find((post) => post.id === +id)

  if (!post) {
    return Response.json({ message: 'Post not found' }, { status: 404 })
  }

  return Response.json(post)
}

export async function PUT(request: Request, content: ContextProps) {
  const { id } = await content.params
  const newData = await request.json()

  const index = posts.findIndex((post) => post.id === +id)

  if (index === -1) {
    return Response.json({ message: 'Post not found' }, { status: 404 })
  }

  const updatedPost = { id: +id, ...newData }

  posts[index] = updatedPost

  return Response.json(updatedPost)
}

export async function PATCH(request: Request, content: ContextProps) {
  const { id } = await content.params
  const newData = await request.json()

  const index = posts.findIndex((post) => post.id === +id)

  if (index === -1) {
    return Response.json({ message: 'Post not found' }, { status: 404 })
  }

  const updatedPost = { ...posts[index], ...newData }

  posts[index] = updatedPost

  return Response.json(updatedPost)
}

export async function DELETE(_request: Request, content: ContextProps) {
  const { id } = await content.params
  const index = posts.findIndex((post) => post.id === +id)

  if (index === -1) {
    return Response.json({ message: 'Post not found' }, { status: 404 })
  }

  posts.splice(index, 1)

  // ! 204 No Content - рекомендовано
  return new Response(null, { status: 204 })

  // ! 200 OK - також припустимо
  // return Response.json({ message: 'Deleted successfully' }, { status: 200 })
}
