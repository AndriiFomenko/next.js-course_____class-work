import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users',
  description: 'Users page'
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export default async function Users() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await response.json()

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-700">Username:</span> {user.username}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Email:</span>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 hover:text-blue-800 ml-1"
                    aria-label={`Send email to ${user.name}`}
                  >
                    {user.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Phone:</span>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-blue-600 hover:text-blue-800 ml-1"
                    aria-label={`Call ${user.name}`}
                  >
                    {user.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
