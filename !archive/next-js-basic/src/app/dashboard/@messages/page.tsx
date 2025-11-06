import Card from '@/components/Card'
import Link from 'next/link'

export default function Messages() {
  return (
    <Card>
      <div>
        <h2 className="text-2xl">Messages Page</h2>
        <Link className="text-blue-700 block" href="/dashboard/archived">
          Archived Message
        </Link>
        <Link className="text-blue-700 block" href="/dashboard/new">
          New Message
        </Link>
      </div>
    </Card>
  )
}
