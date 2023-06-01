import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface PostRequestBody {
  email: string;
  likes: string[];
  txtInput: string;
}

export async function POST(request: Request) {
  try {
    // 1. Load DB
    const client = await clientPromise;
    const db = client.db('test');
    // 2. Get request body items
    const requestBody: PostRequestBody = await request.json()
    const { email, likes, txtInput } = requestBody
    // 3. Insert into DB
    await db.collection('users').insertOne({ email, likes, txtInput });
  } catch (error) {
    // TODO: Log (SNBH)
    return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 });  
  }
}
