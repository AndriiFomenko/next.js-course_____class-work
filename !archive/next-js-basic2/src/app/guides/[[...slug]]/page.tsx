interface GuidePageProps {
  params: Promise<{ slug: string[] }>
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params

  if (!slug) {
    return <div>Root Route: No slug found</div>
  }

  const formattedSlug = slug.join(' / ')

  return <div>Guide Inner Page: {formattedSlug}</div>
}
