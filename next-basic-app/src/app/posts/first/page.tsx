import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Post Page Title'
}

const FirstPost = () => {
  return <h2 className="text-2xl font-bold underline">First Post Page</h2>
}

export default FirstPost
