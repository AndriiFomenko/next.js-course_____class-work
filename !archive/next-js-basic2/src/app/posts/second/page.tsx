import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Second Post, Absolute Title'
  },
  description: 'Second Post description'
}

export default function SecondPost() {
  return <h1 className="header-title">Second Post</h1>
}
