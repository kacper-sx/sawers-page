import Providers from '@/components/features/providers/providers'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { source_sans_3, switzer } from '../fonts'
import '../globals.css'

import Footer from '@/components/features/footer/footer'
import Header from '@/components/features/header/header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sawers Saweczko Robert",
  description: "Sawers Saweczko Robert montaż klimatyzacji, fotowoltaika Parczew",
  url: "https://sawers.pl",
  logo: "https://sawers.pl/logos/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Listopada 66/23",
    addressLocality: "Parczew",
    addressRegion: "Lubelskie",
    postalCode: "21-200",
    addressCountry: "PL"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48-606-136-448",
    contactType: "customer service",
    email: "ser2332@wp.pl",
    areaServed: "PL",
    availableLanguage: ["pl"],
  },
};

const jsonLdDataBreadcrump = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Strona Główna",
      item: "https://sawers.pl"
    },{
      "@type": "ListItem",
      position: 2,
      name: "Usługi",
      item: "https://sawers.pl/services"
    },{
      "@type": "ListItem",
      position: 3,
      name: "Kontakt",
      item: "https://sawers.pl/kontakt"
    }]
  }
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://www.sawers.pl/'),
    alternates: {
      canonical: "https://sawers.pl",
    },
    title:
      'Sawers | Montaż klimatyzacji | Pompy Ciepła | Parczew',
    description:
      'Sawers Saweczko Robert montaż klimatyzacji pompy ciepła Parczew. Zajmujemy się również sprzedażą fotowoltaiki i montażem monitoringu na terenie Parczewa.',
    
    applicationName: 'Sawers Page',
    authors: [{ name: 'Sawers', url: 'https://sawers.pl/' }],
    generator: 'Next.js',
    keywords: [
      'nextjs',
      'Klimatyzacja Parczew',
      'Pompy ciepła Parczew',
      'Fotowoltaika Parczew',
      'Sawers',
      'Saweczko Robert',
      'Firma Sawers',
      'Sawers Parczew',
      'Monitoring Parczew',
    ],
    creator: 'Kacper Saweczko,',
    robots: 'index, follow',
    openGraph: {
      type: "website",
      url: "https://sawers.pl",
      title: "Sawers Saweczko Robert",
      description:
        "Sawers Saweczko Robert montaż klimatyzacji pompy ciepła Parczew. Zajmujemy się również sprzedażą fotowoltaiki i montażem monitoringu na terenie Parczewa.",
      siteName: "Sawers Saweczko Robert",
      images: [{ url: "https://sawers.pl/og-image.png" }],
    },
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <head>
        <Script
        id="jsonLD"
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Script
        id="jsonLdDataBreadcrump"
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDataBreadcrump) }}
      />
      </head>
      <body
        className={cn(
          'font-switzer overflow-x-hidden scroll-smooth',
          switzer.variable,
          source_sans_3.variable
        )}
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
