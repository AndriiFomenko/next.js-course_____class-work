import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Third Post Page Title'
}

const SecondPost = () => {
  return <div>
    <h1 className="header-title">Third Post Page (links below will be intercepted)</h1>

    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Parent Interceptors (..) - перехоплюють з батьківської папки:</h2>
      <div className="flex gap-4 justify-center mb-6">
        <Link href="/posts/first" className="btn btn-primary">First Post (..)</Link>
        <Link href="/posts/second" className="btn btn-primary">Second Post (..)</Link>
      </div>
    </div>

    <div className="mb-8">
      <h2
        className="text-lg font-semibold mb-4">Multi-Level Parent Interceptors (..)(..) - перехоплюють з кількох рівнів:</h2>
      <div className="flex gap-4 justify-center mb-6">
        <Link href="/dashboard" className="btn btn-primary">Dashboard (..)(..)</Link>
        <Link href="/posts" className="btn btn-primary">Posts List (..)(..)</Link>
      </div>
    </div>

    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Root Interceptors (...) - перехоплюють з кореня:</h2>
      <div className="flex gap-4 justify-center mb-6">
        <Link href="/about" className="btn btn-primary">About Page (...)</Link>
        <Link href="/info" className="btn btn-primary">Info Page (...)</Link>
      </div>
    </div>
  </div>
}

export default SecondPost
