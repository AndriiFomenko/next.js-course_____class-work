'use client'

import { useRouter } from 'next/navigation'
import Button from '../../components/Button'

export default function OrderProduct() {
  const router = useRouter()

  const orderProductHandler = () => {
    router.push('/products')
  }

  const goToRootPageHandler = () => {
    router.push('/')
  }

  return (
    <div>
      <h1 className="header-title">Order product</h1>
      <div className="flex justify-center items-center gap-6">
        <Button variant="primary" onClick={orderProductHandler}>
          Go to products
        </Button>
        <Button variant="secondary" onClick={goToRootPageHandler}>
          Go to root page
        </Button>
      </div>
    </div>
  )
}
