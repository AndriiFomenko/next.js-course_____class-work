import { Metadata } from 'next'

interface ProductPageProps {
  params: Promise<{
    productId: string
  }>
}

// ! Sync via metadata object
export const metadata: Metadata = {
  title: 'Product Details Page',
  description: 'Product Details Page description'
}

// ! Async via generateMetadata function
/*

interface generateMetadataProps {
  params: Promise<{
    productId: string
  }>
}

export const generateMetadata = async ({ params }: generateMetadataProps) => {
  const { productId } = await params

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Product ${productId}`)
    }, 5000)
  })

  return {
    title: `Async title ${title}`,
    description: `Async description ${productId} for Details Page`
  }
}

*/

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params
  return <h1 className="header-title">Product Details Page for {productId}</h1>
}
