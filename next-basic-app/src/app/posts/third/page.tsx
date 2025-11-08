import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Third Post Page Title'
}

const SecondPost = () => {
  return <h2 className="text-2xl font-bold underline">Third Post Page</h2>
}

export default SecondPost
