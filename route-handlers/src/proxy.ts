import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  // Не логуємо статичні ресурси Next.js
  if (!request.url.includes('_next/static') && !request.url.includes('.well-known')) {
    console.log('Проксі активовано', request.url)
  }

  const response = NextResponse.next()
  const theme = request.cookies.get('theme')?.value || 'light'

  response.cookies.set('theme', theme)
  response.headers.set('x-custom-header', 'Hello world proxy')

  return response
}

/*
! ВАРІАНТ 2: Middleware з редиректом (перевірка URL всередині функції)

import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  console.log('Проксі активовано', request.url)

  if (request.url.includes('/info')) {
    return NextResponse.redirect(new URL('/hello', request.url))
  }

  return NextResponse.next()
}
*/

/*
! ВАРІАНТ 1: Middleware з matcher (фільтрація шляхів через config)

import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  console.log('Проксі активовано', request.url)

  return NextResponse.next()
}

export const config = {
  matcher: ['/info/:path*', '/info']
}
*/
