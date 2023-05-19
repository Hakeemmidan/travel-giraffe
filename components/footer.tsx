import Image from "next/image"
import Link from "next/link"

export function Footer() {
    return (
        <div className="bg-white sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
            <div className="txt-sm">
                Copyright © 2023 Travel Giraffe, Inc
            </div>
            <div className="txt-sm opacity-40">
                Made with ♥️ in Riyadh
            </div>
        </div>
    )
}