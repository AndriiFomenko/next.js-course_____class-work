import { Metadata } from 'next'

interface ProductDetailsProps {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: ProductDetailsProps): Promise<Metadata> => {
  const { productId } = params

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Product ${productId}`)
    }, 5000)
  })

  return {
    title: `Async ${title}`,
    description: `Async ${title} Details Page Description`
  }
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = params
  return (
    <div>
      <h1>Product Details Page for {productId}</h1>
      <p>Product description</p>
    </div>
  )
}
