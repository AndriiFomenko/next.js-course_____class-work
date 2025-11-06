import { CyberpunkImage, cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Image from 'next/image'

type ImagePageProps = {
  params: {
    id: string
  }
}

export default function ImagePage({ params: { id } }: ImagePageProps) {
  const photo: CyberpunkImage | undefined = cyberpunkImages.find((photo) => photo.id === id)

  if (!photo) {
    return null
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">{photo.title}</h1>
        <Image src={photo.src} alt={photo.title} className="w-full object-cover aspect-square" />
        <div className="bg-white py-4">
          <h2>{photo.title}</h2>
        </div>
      </div>
    </div>
  )
}
