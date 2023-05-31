'use client'

import Image from "next/image"
import Link from "next/link"

export function Header() {

  return (
    <header className="bg-primary flex items-center justify-center md:justify-start">
      <Link href="/" className="flex items-center">
        <Image src="/tg.png" alt="travel giraffe logo" width="100" height="100" className="md:ml-5"/>
        <h1 className="text-3xl text-secondary font-mono">
          Travel Giraffe
        </h1>
      </Link>
    </header>
  )
}
