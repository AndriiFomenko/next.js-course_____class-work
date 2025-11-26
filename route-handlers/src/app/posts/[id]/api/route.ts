import { posts } from '../../data'

type ContextProps = {
  params: Promise<{ id: string }>
}

export async function GET(request: Request, { params }: ContextProps) {
  const { id: idParam } = await params
  const id = parseInt(idParam)
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return Response.json({ error: 'Not Found' }, { status: 404 })
  }

  return Response.json(post)
}

export async function PUT(request: Request, { params }: ContextProps) {
  const { id: idParam } = await params
  const newData = await request.json()

  const index = posts.findIndex((post) => post.id === parseInt(idParam))

  if (index !== -1) {
    posts[index] = { ...newData, id: posts[index].id }

    return Response.json(posts[index], {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } else {
    return Response.json({ error: 'Not Found' }, { status: 404 })
  }
}

export async function PATCH(request: Request, { params }: ContextProps) {
  const { id: idParam } = await params
  const newData = await request.json()

  const index = posts.findIndex((post) => post.id === parseInt(idParam))

  if (index !== -1) {
    posts[index] = { ...posts[index], ...newData }

    return Response.json(posts[index], {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } else {
    return Response.json({ error: 'Not Found' }, { status: 404 })
  }
}

export async function DELETE(request: Request, { params }: ContextProps) {
  const { id: idParam } = await params
  const index = posts.findIndex((post) => post.id === parseInt(idParam))

  if (index !== -1) {
    const deletedPost = posts[index]
    posts.splice(index, 1)

    return Response.json(deletedPost, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } else {
    return Response.json({ error: 'Not Found' }, { status: 404 })
  }
}
