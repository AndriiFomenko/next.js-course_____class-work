import { posts } from '../../data'

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params
  const id = parseInt(idParam)
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return new Response('Not Found', { status: 404 })
  }

  return Response.json(post)
}
