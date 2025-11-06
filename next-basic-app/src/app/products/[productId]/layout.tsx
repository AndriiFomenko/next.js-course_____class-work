import ProductFeatures from '@/components/ProductFeatures'
import RelevantProducts from '@/components/RelevantProducts'

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProductFeatures />
      <RelevantProducts />
    </>
  )
}

export default ProductDetailsLayout
