interface Post {
  id: string
  title: string
  body: string
}

export const fetchPosts = async (): Promise<Post[]> => {
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate delay
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

export type { Post }
