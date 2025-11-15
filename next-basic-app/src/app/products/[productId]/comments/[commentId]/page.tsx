import { notFound } from 'next/navigation'

interface CommentPageProps {
  params: Promise<{
    productId: string
    commentId: string
  }>
}

function randomNum(max: number) {
  return Math.floor(Math.random() * max)
}

const CommentPage = async ({ params }: CommentPageProps) => {
  const { productId, commentId } = await params
  const random = randomNum(2)

  if (random) {
    throw new Error('Random error occurred!')
  }

  if (+commentId >= 100) {
    notFound()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold underline mb-6">
        Comment Page: Product {productId}, Comment {commentId}
      </h2>
    </div>
  )
}

export default CommentPage
