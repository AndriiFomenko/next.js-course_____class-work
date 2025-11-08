'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const OrderProduct = () => {
  const router = useRouter()

  const gotoProductsPage = () => {
    router.push('/products')
  }

  const gotoHomePage = () => {
    router.push('/')
  }

  return (
    <div>
      <h1 className="header-title">Order Product</h1>
      <div className="flex justify-center items-center gap-6">
        <Button onClick={gotoProductsPage}>
          Go to Products Page
        </Button>
        <Button variant="secondary" onClick={gotoHomePage}>
          Go to Home Page
        </Button>
      </div>
    </div>
  )
}

export default OrderProduct
