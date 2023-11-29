import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { source_sans_3, switzer } from '../fonts'
import '../globals.css'
import Providers from '@/components/features/providers/providers'
import { cn } from '@/lib/utils'

import Header from '@/components/features/header/header'
import Footer from '@/components/features/footer/footer'

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
        className={cn('font-switzer', switzer.variable, source_sans_3.variable)}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
