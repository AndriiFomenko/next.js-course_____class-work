'use client'

import { startTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error.message)
  }, [error])

  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto my-10 text-center">
      <div className="mb-6 relative inline-block">
        <div className="bg-red-500 text-white h-20 w-20 rounded-full flex items-center justify-center mx-auto">
          <span className="text-4xl" role="img" aria-label="помилка">
            👎
          </span>
        </div>
        <div className="absolute top-0 right-0 animate-ping">✨</div>
        <div className="absolute bottom-0 left-0 animate-ping delay-100">✨</div>
        <div className="absolute top-1/4 left-1/4 animate-ping delay-200">⭐</div>
        <div className="absolute top-1/2 right-1/4 animate-ping delay-300">⭐</div>
      </div>

      <h2 className="text-blue-600 text-3xl font-bold uppercase mb-2">WHOOPS!</h2>
      <p className="text-gray-500 mb-6">Щось пішло не так. Давайте спробуємо ще раз.</p>

      <button onClick={() => reload()} className="btn btn-try-again m-auto">
        <span className="text-sm">⟳</span> Try Again
      </button>
    </div>
  )
}
