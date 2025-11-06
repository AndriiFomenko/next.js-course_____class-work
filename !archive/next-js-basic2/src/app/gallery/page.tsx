import { cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className="header-title">Cyberpunk Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cyberpunkImages.map(({ id, src, title }) => (
          <Link href={`/gallery/${id}`} key={id}>
            <Image
              src={src}
              alt={title}
              className="w-full object-cover aspect-square"
              width={300}
              height={300}
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
