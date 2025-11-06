import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="px-10 py-20 shadow-md border border-gray-300 flex flex-col justify-center items-center h-full">
      {children}
    </div>
  )
}
