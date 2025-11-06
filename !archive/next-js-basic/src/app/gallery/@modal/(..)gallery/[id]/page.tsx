import { CyberpunkImage, cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Modal from '@/components/Modal'
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
    <Modal>
      <Image src={photo.src} alt={photo.title} className="w-full object-cover aspect-square" />
      <div className="bg-white py-4">
        <h2 className="text-xl font-semibold px-4">{photo.title}</h2>
      </div>
    </Modal>
  )
}
