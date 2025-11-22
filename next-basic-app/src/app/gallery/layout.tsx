import { ReactNode } from 'react'

interface GalleryLayoutProps {
  modal: ReactNode
  children: ReactNode
}

export default function Gallerylayout({ modal, children }: GalleryLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}
