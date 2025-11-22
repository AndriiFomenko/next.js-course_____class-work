import { cyberpunkImages } from '@/app/gallery/cyberpunkImages'

import Modal from '@/components/Modal'
import GalleryModalView from '@/components/GalleryModalView'

interface ImagePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ImagePage({ params }: ImagePageProps) {
  const { id } = await params
  const photoIndex = cyberpunkImages.findIndex((photo) => photo.id === id)
  const photo = cyberpunkImages[photoIndex]

  if (!photo) {
    return null
  }

  const nextIndex = (photoIndex + 1) % cyberpunkImages.length
  const prevIndex = (photoIndex - 1 + cyberpunkImages.length) % cyberpunkImages.length

  const nextId = cyberpunkImages[nextIndex].id
  const prevId = cyberpunkImages[prevIndex].id

  return (
    <Modal>
      <GalleryModalView image={photo} nextId={nextId} prevId={prevId} />
    </Modal>
  )
}
