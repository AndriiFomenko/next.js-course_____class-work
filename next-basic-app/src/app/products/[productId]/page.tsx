interface ProductPageProps {
  params: Promise<{
    productId: string
  }>
}

export const generateMetadata = async ({ params }: ProductPageProps) => {
  const { productId } = await params
  const title = `Product Page Title for ${productId}`
  const description = `Product Page Description for ${productId}`

  return {
    title,
    description
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const resolvedParams = await params
  console.log(resolvedParams)
  return <h1 className="text-3xl font-bold underline">Product Page: {resolvedParams.productId}</h1>
}

export default ProductPage
