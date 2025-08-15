import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Wake Up Academy - Développement Personnel et Motivation",
  description:
    "Réveillez votre potentiel avec Wake Up Academy. Coaching, formations et contenus inspirants pour transformer votre vie.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
