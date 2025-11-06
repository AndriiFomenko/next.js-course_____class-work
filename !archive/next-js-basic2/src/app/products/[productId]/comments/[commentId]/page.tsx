import { notFound } from 'next/navigation'

interface CommentDetailsProps {
  params: Promise<{
    productId: string
    commentId: string
  }>
}

function randomNumber(max: number) {
  return Math.floor(Math.random() * max)
}

export default async function CommentDetails({ params }: CommentDetailsProps) {
  const { productId, commentId } = await params
  const random = randomNumber(2)

  console.log(random)
  if (!random) {
    throw new Error('Random error message')
  }

  if (+commentId > 100) {
    notFound()
  }

  return (
    <h1 className="header-title">
      Comment {commentId} for product {productId}
    </h1>
  )
}
