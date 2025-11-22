import { posts } from './data'
import { SpotlightCard } from './SpotlightCard'

export const dynamic = 'force-dynamic'

export default function PostsPage() {
  return (
    <div className="relative min-h-full w-full">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 tracking-tight animate-gradient-xy">
            Community Stories
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Dive into a collection of thoughts, ideas, and creative writing from our amazing users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <SpotlightCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
