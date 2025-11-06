interface ProductPageProps {
  params: Promise<{
    productId: string
  }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const resolvedParams = await params
  console.log(resolvedParams)
  return <h1 className="text-3xl font-bold underline">Product Page: {resolvedParams.productId}</h1>
}

export default ProductPage
