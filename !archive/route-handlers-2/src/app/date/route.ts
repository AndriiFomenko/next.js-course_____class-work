import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  return NextResponse.json({ date: new Date().toLocaleString() }, { headers: { 'Content-Type': 'application/json' } })
}
