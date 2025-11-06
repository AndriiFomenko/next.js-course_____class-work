export interface Post {
  id: number
  title: string
  body: string
  [key: string]: string | number
}

export const posts: Post[] = [
  { id: 1, title: 'Lorem ipsum dolor sit amet', body: 'This is the first post' },
  { id: 2, title: 'Consectetur adipiscing elit', body: 'This is the second post' },
  { id: 3, title: 'Sed do eiusmod tempor incididunt', body: 'This is the third post' },
  { id: 4, title: 'Ut labore et dolore magna', body: 'This is the fourth post' },
  { id: 5, title: 'Aliqua Ut enim ad minim veniam', body: 'This is the fifth post' }
]
