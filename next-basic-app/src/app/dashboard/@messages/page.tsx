import Card from '@/components/Card'
import Link from 'next/link'

export default function Messages() {
  return (
    <Card>
      <div>
        <h2 className="header-title-h2">All Messages Page</h2>
        <Link className="text-blue-700 block" href="/dashboard">Show All Messages</Link>
        <Link className="text-blue-700 block" href="/dashboard/archived">Archived Messages</Link>
      </div>
    </Card>)
}
