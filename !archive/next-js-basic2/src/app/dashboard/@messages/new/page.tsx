import Card from '@/components/Card'
import Link from 'next/link'

export default function NewMessagesPage() {
  return (
    <Card>
      <h2 className="header-title-h2">New Messages</h2>
      <Link className="text-blue-700 block mb-4" href="/dashboard">
        Show all messages
      </Link>
      <Link className="text-blue-700 block mb-4" href="/dashboard/archived">
        Show archived messages
      </Link>
    </Card>
  )
}
