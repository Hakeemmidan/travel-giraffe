import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { EmailFrequencies } from "@/components/form";

interface PostRequestBody {
  email: string;
  likes: string[];
  email_frequency_preference: EmailFrequencies;
}

export async function POST(request: Request) {
  try {
    // 1. Load DB
    const client = await clientPromise;
    const db = client.db('main');
    // 2. Get request body items
    const requestBody: PostRequestBody = await request.json()
    const { email, likes, email_frequency_preference } = requestBody
    // 3. Insert into DB
    await db.collection('users').insertOne({ email, likes, email_frequency_preference });
    // 4. Just need to return anything
    return NextResponse.json({ success: true })
  } catch (error) {
    // TODO: Log (SNBH)
    return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 });  
  }
}
