import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log(request.headers.get('Authorization'))
  console.log(request.cookies.get('lang'))

  const cookieStore = await cookies()
  cookieStore.set('theme', 'dark', { path: '/info' })
  cookieStore.set('language', 'ua', { path: '/info' })

  console.log(cookieStore.getAll())

  return new Response('<h1>Hello World</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'X-Custom-Header': 'Custom Value',
      'Set-Cookie': 'lang=en'
    }
  })
}
