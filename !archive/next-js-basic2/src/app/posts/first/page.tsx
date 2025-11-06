import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Post',
  description: 'First Post description'
}

export default function FirstPost() {
  return <h1 className="header-title">First Post</h1>
}
