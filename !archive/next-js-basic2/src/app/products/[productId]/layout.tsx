import ProductFeatures from '@/components/ProductFeatures'
import RelevantProducts from '@/components/RelevantProducts'
import { ReactNode } from 'react'

interface ProductDetailsLayoutProps {
  children: ReactNode
}

export default function ProductDetailsLayout({ children }: ProductDetailsLayoutProps) {
  return (
    <>
      {children}
      <ProductFeatures />
      <RelevantProducts />
    </>
  )
}
