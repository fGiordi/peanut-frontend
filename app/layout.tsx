import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peanut Front End',
  description: 'Technical Assignment Task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white  min-h-screen flex flex-col w-full max-w-[1200px] mx-auto`}>{children}</body>
    </html>
  )
}
