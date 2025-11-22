export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the first post',
    userId: 1
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the second post',
    userId: 1
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is the third post',
    userId: 2
  },
  {
    id: 4,
    title: 'Post 4',
    body: 'This is the fourth post',
    userId: 2
  },
  {
    id: 5,
    title: 'Post 5',
    body: 'This is the fifth post',
    userId: 3
  },
  {
    id: 6,
    title: 'Post 6',
    body: 'This is the sixth post',
    userId: 3
  },
  {
    id: 7,
    title: 'Post 7',
    body: 'This is the seventh post',
    userId: 4
  },
  {
    id: 8,
    title: 'Post 8',
    body: 'This is the eighth post',
    userId: 4
  },
  {
    id: 9,
    title: 'Post 9',
    body: 'This is the ninth post',
    userId: 5
  },
  {
    id: 10,
    title: 'Post 10',
    body: 'This is the tenth post',
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
