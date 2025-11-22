import { CyberpunkImage, cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Image from 'next/image'

interface ImagePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ImagePage({ params }: ImagePageProps) {
  const { id } = await params
  const photo: CyberpunkImage | undefined = cyberpunkImages.find((photo) => photo.id === id)

  if (!photo) {
    return null
  }

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="header-title">{photo.title}</h1>
      <Image src={photo.src} alt={photo.title} className="w-full object-cover aspect-square" />
    </div>
  )
}
