import { Metadata } from 'next'

export const metadata: Metadata = {
  // title: 'Second Post Page Title'
  title: {
    absolute: 'Second Post Absolute Title'
  }
}

const SecondPost = () => {
  return <h2 className="text-2xl font-bold underline">Second Post Page</h2>
}

export default SecondPost
