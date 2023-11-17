import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/features/providers/providers'
import { cn } from '@/lib/utils'
import { switzer, source_sans_3 } from './fonts'
import Header from '@/components/features/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sawers',
  description: 'Sawers page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        className={cn(
          'overflow-x-hidden scroll-smooth font-switzer',
          switzer.variable,
          source_sans_3.variable
        )}
      >
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
