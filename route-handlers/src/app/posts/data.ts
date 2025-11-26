export type Post = {
  id: number
  title: string
  body: string
  userId: number
  [key: string]: string | number
}

const initialPosts: Post[] = [
  {
    id: 5,
    title: 'Exploring TypeScript',
    body: 'Gamma content',
    userId: 3
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    body: 'Alpha content',
    userId: 1
  },
  {
    id: 8,
    title: 'Database Design',
    body: 'Zeta content',
    userId: 4
  },
  {
    id: 1,
    title: 'Getting Started with Next.js',
    body: 'Beta content',
    userId: 2
  },
  {
    id: 10,
    title: 'API Development',
    body: 'Theta content',
    userId: 5
  },
  {
    id: 3,
    title: 'CSS Grid Layout',
    body: 'Delta content',
    userId: 1
  },
  {
    id: 7,
    title: 'Testing Strategies',
    body: 'Epsilon content',
    userId: 3
  },
  {
    id: 4,
    title: 'Performance Optimization',
    body: 'Eta content',
    userId: 2
  },
  {
    id: 9,
    title: 'Security Best Practices',
    body: 'Iota content',
    userId: 4
  },
  {
    id: 6,
    title: 'Microservices Architecture',
    body: 'Kappa content',
    userId: 5
  }
]

declare global {
  var _posts: Post[] | undefined
}

if (!globalThis._posts) {
  globalThis._posts = initialPosts
}

export const posts = globalThis._posts as Post[]
