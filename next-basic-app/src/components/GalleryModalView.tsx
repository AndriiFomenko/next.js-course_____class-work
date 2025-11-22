'use client'

import { CyberpunkImage } from '@/app/gallery/cyberpunkImages'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useCallback } from 'react'
import Link from 'next/link'

interface GalleryModalViewProps {
  image: CyberpunkImage
  nextId: string
  prevId: string
}

export default function GalleryModalView({ image, nextId, prevId }: GalleryModalViewProps) {
  const router = useRouter()

  const navigateTo = useCallback(
    (id: string) => {
      router.replace(`/gallery/${id}`, { scroll: false })
    },
    [router]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault() // Prevent scrolling for space
        navigateTo(nextId)
      } else if (e.key === 'ArrowLeft') {
        navigateTo(prevId)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextId, prevId, navigateTo])

  return (
    <div className="relative group flex flex-col items-center justify-center h-full w-full">
      <div className="relative flex items-center justify-center">
        <Image
          src={image.src}
          alt={image.title}
          className="w-auto h-auto object-contain"
          style={{ maxHeight: '80vmin', maxWidth: '80vmin' }}
          priority
        />

        {/* Previous Button */}
        <Link
          href={`/gallery/${prevId}`}
          replace
          scroll={false}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>

        {/* Next Button */}
        <Link
          href={`/gallery/${nextId}`}
          replace
          scroll={false}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>

      <div className="bg-white p-4 w-full text-center mt-4" style={{ maxWidth: '80vmin' }}>
        <h3 className="text-xl font-semibold px-4">{image.title}</h3>
      </div>
    </div>
  )
}
