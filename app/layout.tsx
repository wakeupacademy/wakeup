import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wake Up Academy - Réveillez votre potentiel",
  description: "Développement personnel, motivation et formation avec Wake Up Academy. Conférencier, coach et auteur motivant.",
  keywords: ["développement personnel", "motivation", "coaching", "formation", "conférencier", "Wake Up Academy"],
  authors: [{ name: "Wake Up Academy" }],
  creator: "Wake Up Academy",
  publisher: "Wake Up Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wakeupacademy.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Wake Up Academy - Réveillez votre potentiel",
    description: "Développement personnel, motivation et formation avec Wake Up Academy. Conférencier, coach et auteur motivant.",
    url: 'https://wakeupacademy.netlify.app',
    siteName: 'Wake Up Academy',
    images: [
      {
        url: '/images/wua-logo-xl.png',
        width: 350,
        height: 175,
        alt: 'Wake Up Academy Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wake Up Academy - Réveillez votre potentiel",
    description: "Développement personnel, motivation et formation avec Wake Up Academy.",
    images: ['/images/wua-logo-xl.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
