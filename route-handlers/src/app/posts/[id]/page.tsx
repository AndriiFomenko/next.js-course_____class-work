import { posts } from '../data'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params
  const id = parseInt(idParam)
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-8">Post not found</p>
          <Link
            href="/posts"
            className="px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
          >
            Back to Posts
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center p-6">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl w-full">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Community
        </Link>

        <article className="relative rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-2xl">
          {/* Top Highlight */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-700 shadow-inner">
              <span className="text-lg font-bold text-cyan-400">{post.id}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-slate-200 font-medium">User {post.userId}</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                  Author
                </span>
              </div>
              <span className="text-slate-500 text-sm">Posted just now</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">{post.title}</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">{post.body}</p>
            <p className="text-slate-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Like</span>
              </button>
              <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-sm font-medium">Comment</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 z-20" />
              <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950 -ml-4 z-10" />
              <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-950 -ml-4" />
              <span className="text-xs text-slate-500 ml-2">Liked by 24 others</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
