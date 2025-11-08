import Link from 'next/link'

const ProductsPage = () => {
  const productId = 5

  return <div>
    <h1 className="header-title">Products Page</h1>
    <ul>
      <li>
        <h2 className="header-title-h2">
          <Link href="/products/1/comments/1">Comment 1 of the Product 1</Link>
        </h2>
      </li>
      <li>
        <h2 className="header-title-h2">
          <Link href="/products/1">Product 1</Link>
        </h2>
      </li>
      <li>
        <h2 className="header-title-h2">
          <Link href="/products/2">Product 2</Link>
        </h2>
      </li>
      <li>
        <h2 className="header-title-h2">
          <Link href="/products/3">Product 3</Link>
        </h2>
      </li>
      <li>
        <h2 className="header-title-h2">
          <Link href={`/products/${productId}`}>Product {productId}</Link>
        </h2>
      </li>
    </ul>
  </div>
}

export default ProductsPage
