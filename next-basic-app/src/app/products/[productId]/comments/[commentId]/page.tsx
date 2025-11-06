import { notFound } from 'next/navigation'

interface CommentPageProps {
  params: Promise<{
    productId: string
    commentId: string
  }>
}

const CommentPage = async ({ params }: CommentPageProps) => {
  const { productId, commentId } = await params

  if (+commentId >= 100) {
    notFound()
  }

  return (
    <h2 className="text-2xl font-bold underline">
      Comment Page: Product {productId}, Comment {commentId}
    </h2>
  )
}

export default CommentPage
