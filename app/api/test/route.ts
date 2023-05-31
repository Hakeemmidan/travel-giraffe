import { NextResponse } from "next/server";
import { kv } from '@vercel/kv'

export async function GET() {
  const res = await kv.hgetall('user:me')
  console.log('@@@@', JSON.stringify(res))

  return NextResponse.json({ res })
}
