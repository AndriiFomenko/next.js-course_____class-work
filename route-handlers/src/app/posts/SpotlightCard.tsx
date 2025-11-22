'use client'

import { useRef, useState, MouseEvent } from 'react'
import { posts } from './data'
import Link from 'next/link'

export function SpotlightCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setOpacity(1)
  }

  const handleBlur = () => {
    setOpacity(0)
  }

  return (
    <Link href={`/posts/${post.id}`} className="block">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleFocus}
        onMouseLeave={handleBlur}
        className="relative group rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        {/* Spotlight Gradient */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`
          }}
        />

        {/* Border Highlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.4), transparent 40%)`,
            maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
            WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor'
          }}
        />

        <div className="relative h-full p-6 flex flex-col z-10">
          {/* Header: ID & User */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-700/50 text-xs font-bold text-cyan-400 border border-slate-600 group-hover:border-cyan-500/50 transition-colors">
              {post.id}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded-full border border-slate-700/50">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  index % 2 === 0 ? 'bg-green-400' : 'bg-amber-400'
                } animate-pulse`}
              />
              User {post.userId}
            </div>
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-slate-100 mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
            {post.title}
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
            {post.body}
          </p>

          {/* Footer / Action */}
          <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 group-hover:text-cyan-300 transition-colors flex items-center gap-1 group/btn">
              Read Story
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="flex -space-x-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border border-slate-800" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 border border-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
