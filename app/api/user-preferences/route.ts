import { NextResponse } from "next/server";
import { kv } from '@vercel/kv'

interface PostRequestBody {
  email: string;
  likes: string[];
  txtInput: string;
}

export async function POST(request: Request) {
  const requestBody: PostRequestBody = await request.json()

  const { email, likes, txtInput } = requestBody
  console.log(email, likes, txtInput)

  try {
    await kv.hset(email, { likes, txtInput })
  } catch (error) {
    console.log('knkfjdklfjdlkfj')
    console.error('error', error)


    return NextResponse.json({ error }, { status: 500 });
  }

  NextResponse.redirect(new URL('/success', request.url))
}
