import { createClient } from '@vercel/kv';
import { NextResponse } from 'next/server';
 
export async function HSET(key: string, object: {}) {
    const mainKv = createClient({
        url: process.env.KV_REST_API_URL || '',
        token: process.env.KV_REST_API_TOKEN || ''
    });

    await mainKv.hset(key, object);
    const res = await mainKv.hgetall(key);

    return NextResponse.json(res);
}