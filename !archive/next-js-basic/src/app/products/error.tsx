'use client'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <h1 className="header">{error.message}</h1>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </>
  )
}
