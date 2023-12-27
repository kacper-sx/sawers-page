import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { source_sans_3, switzer } from "../fonts";
import "../globals.css";
import Providers from "@/components/features/providers/providers";
import { cn } from "@/lib/utils";

import Header from "@/components/features/header/header";
import Footer from "@/components/features/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.sawers.pl/"),
    title:
      "Sawers Saweczko Robert | Klimatyzacja | Pompy Ciepła | Fotowoltaika | Parczew",
    description:
      "Sawers Saweczko Robert to firma zajmująca się montażem klimatyzacji, pomp ciepła i fotowoltaiki na terenie Parczewa",
    applicationName: "Sawers Page",
    authors: [{ name: "Sawers", url: "https://sawers.pl/" }],
    generator: "Next.js",
    keywords: [
      "nextjs",
      "Klimatyzacja Parczew",
      "Pompy ciepła Parczew",
      "Fotowoltaika Parczew",
      "Sawers",
      "Saweczko Robert",
      "Firma Sawers",
      "Sawers Parczew",
      "Monitoring Parczew",
    ],
    creator: "Kacper Saweczko,",
    robots: "index, follow",
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        className={cn(
          "font-switzer overflow-x-hidden scroll-smooth",
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
  );
}
