interface ItemPageProps {
  params: Promise<{
    slug: string[]
  }>
}

const ItemPage = async ({ params }: ItemPageProps) => {
  const { slug } = await params

  if (!slug) {
    return <h2 className="text-2xl font-bold underline">Guides: Home</h2>
  }

  const formattedSlug = slug.join(' / ')

  return <h2 className="text-2xl font-bold underline">Guides Home / {formattedSlug}</h2>
}

export default ItemPage
