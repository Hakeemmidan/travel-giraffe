'use client'

import Image from "next/image"

export function Header() {

  return (
    <header className="bg-primary flex justify-center md:justify-start">
      <Image src="/../public/tg.png" alt="travel giraffe logo" width="100" height="100" className="md:ml-5"/>
    </header>
  )
}
