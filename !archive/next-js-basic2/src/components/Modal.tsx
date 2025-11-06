'use client'

import { MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  const onDismiss = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      router.back()
    }, 300)
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  useEffect(() => {
    // Встановлюємо таймаут, щоб дозволити компоненту рендеритись перед анімацією
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={overlay}
      className={`absolute z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/90 p-10 transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-[80vmin] max-h-[80vmin] p-6 transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
