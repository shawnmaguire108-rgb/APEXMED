import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apex Medical Care | Physician-Led Rehabilitation in Philadelphia',
  description: 'Apex Medical Care delivers physician-led rehabilitation for injury recovery, pain-related movement limitations, and functional restoration. Two Philadelphia locations serving the community.',
  keywords: ['physical therapy', 'rehabilitation', 'Philadelphia', 'musculoskeletal', 'physician-led care', 'injury recovery'],
  authors: [{ name: 'Apex Medical Care' }],
  openGraph: {
    title: 'Apex Medical Care | Physician-Led Rehabilitation in Philadelphia',
    description: 'Move Better. Recover Stronger. Return Confidently. Physician-led rehabilitation in Philadelphia.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#172554',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
