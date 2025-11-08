import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page Title',
  description: 'About Page Description'
}

const About = async () => {
  // Затримка для тестування loading компонента
  await new Promise(resolve => setTimeout(resolve, 1000))

  return <h1 className="text-3xl font-bold underline">About Page</h1>
}

export default About
