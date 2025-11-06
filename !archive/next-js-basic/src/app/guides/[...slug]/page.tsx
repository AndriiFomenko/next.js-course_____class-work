interface GuideSlugProps {
  params: {
    slug: string[]
  }
}

export default function GuideSlug({ params }: GuideSlugProps) {
  const { slug } = params
  const formattedSlug = slug?.join(' / ')
  return <h1>Guides / {formattedSlug}</h1>
}
