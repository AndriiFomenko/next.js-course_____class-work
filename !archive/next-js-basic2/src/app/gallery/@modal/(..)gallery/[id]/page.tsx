import { CyberpunkImage, cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Image from 'next/image'
import Modal from '@/components/Modal'

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
    <Modal>
      <Image src={photo.src} alt={photo.title} className="w-full object-cover aspect-square" />
      <div className="bg-white p-4">
        <h3 className="text-xl font-semibold px-4">{photo.title}</h3>
      </div>
    </Modal>
  )
}
