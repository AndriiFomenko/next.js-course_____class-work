import Card from '@/components/Card'
import Link from 'next/link'

export default function NewMessages() {
  return (
    <Card>
      <div>
        <h2 className="text-2xl">New Messages</h2>
        <Link className="text-blue-700 block" href="/dashboard">
          Show All Message
        </Link>
        <Link className="text-blue-700 block" href="/dashboard/archived">
          Archived Message
        </Link>
      </div>
    </Card>
  )
}
