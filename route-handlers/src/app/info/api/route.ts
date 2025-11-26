import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log(request.headers.get('authorization'))
  console.log('Cookie "lang" is: ', request.cookies.get('lang'))

  const cookieStore = await cookies()
  cookieStore.set('theme', 'dark', { path: '/info' })
  cookieStore.set('lang', 'en', { path: '/info' })

  console.log('All cookies: ', cookieStore.getAll())

  return Response.json({ message: 'Hello from info API' })
}
