import Link from 'next/link'

const RelevantProducts = () => {
  return (
    <div className="p-8 bg-amber-200">
      <h3 className="header-title-h3">Relevant products</h3>
      <div className="flex gap-4">
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
      </div>
    </div>
  )
}

export default RelevantProducts
