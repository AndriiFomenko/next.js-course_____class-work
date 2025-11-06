import { LayoutProps } from '@/app/gallery/types'

export default function Layout({ modal, children }: LayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}
