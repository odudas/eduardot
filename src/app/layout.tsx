import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app">
          <aside>aside</aside>
          <main className="max-w-[100vw] px-8 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}