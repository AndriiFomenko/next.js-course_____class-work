import { cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <article className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Cyberpunk Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {cyberpunkImages.map(({ id, src, title }) => (
          <Link href={`/gallery/${id}`} key={id}>
            <Image
              src={src}
              alt={title}
              width={300}
              height={300}
              className="w-full object-cover aspect-square"
              priority
            />
          </Link>
        ))}
      </div>
    </article>
  )
}
