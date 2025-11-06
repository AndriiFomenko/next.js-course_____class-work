'use client'

import { notFound } from 'next/navigation'

interface CommentDetailsProps {
  params: {
    productId: string
    commentId: string
  }
}

export default function CommentDetails({ params }: CommentDetailsProps) {
  const { productId, commentId } = params

  if (+commentId > 100) {
    notFound()
  }

  return (
    <h1>
      Comment {commentId} for product {productId}
    </h1>
  )
}
