import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

export const switzer = localFont({
  src: '../../public/fonts/Switzer-Variable.woff2',
  variable: '--switzer-font',
})

export const source_sans_3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--source-sans-3-font',
})
