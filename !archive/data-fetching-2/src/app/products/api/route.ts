import { NextResponse } from 'next/server'
import clientPromise, { dbName } from '@/lib/mongodb'
import { products } from '@/data/mock-products'

export async function GET(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db(dbName)
    const products = await db.collection('users').find({}).toArray()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db(dbName)
    await db.collection('users').insertMany(products)
    return new Response('Products inserted successfully', { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
