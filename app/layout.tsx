import { Header } from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Vercel KV for Redis Next.js Starter',
  description: 'A simple Next.js app with Vercel KV for Redis as the database',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className={`${inter.variable} relative`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
