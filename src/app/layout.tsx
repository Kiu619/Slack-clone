import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Lato } from 'next/font/google'

import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Slack clone',
  description: 'Slack clone',
}

// This is a revalidation time of 0 seconds, meaning the page will not be cached and will always be fresh.
export const revalidate = 0

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={lato.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
