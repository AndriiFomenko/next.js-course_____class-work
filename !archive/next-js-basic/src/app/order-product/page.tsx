'use client'

import { useRouter } from 'next/navigation'

export default function OrderProduct() {
  const router = useRouter()
  const orderProductHandler = () => {
    console.log('Order Product')
    router.push('/')
  }
  return (
    <div>
      <h1>Order Product</h1>
      <button className="button" onClick={orderProductHandler}>
        Place Order
      </button>
    </div>
  )
}
