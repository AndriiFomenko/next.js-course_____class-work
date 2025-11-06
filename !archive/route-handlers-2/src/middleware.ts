import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware було активовано', request.url)

  const response = NextResponse.next()

  // Читаємо куку з request, а не з response
  const theme = request.cookies.get('theme')
  console.log('🚀 ~ middleware ~ theme:', theme)

  // Перевіряємо чи існує кука theme
  if (!theme) {
    console.log('Встановлюємо нову куку theme')
    response.cookies.set('theme', 'light')
  } else {
    console.log('Кука theme вже існує:', theme.value)
  }

  response.headers.set('X-Custom-Header', 'Custom Value')

  return response
}

// 2
// if (request.nextUrl.pathname.includes('/info')) {
//   return NextResponse.redirect(new URL('/hello', request.url))
// }

// 1
// export const config = {
//   matcher: ['/info/:path*', '/info']
// }
