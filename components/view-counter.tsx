import { kv } from '@vercel/kv'

export default async function ViewCounter() {
  // const views = await kv.incr('views')

  return (
    <p className="text-sm text-gray-500">
      temp
    </p>
  )
}
