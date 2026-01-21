import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import InstallPWA from "@/components/install-pwa"
import SmoothScroll from "@/components/smooth-scroll"
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'


const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shivam Yadav",
  description: "Full-stack Blockchain developer | Code enthusiast | Terminal lover",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shivam Yadav",
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  themeColor: "#22c55e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Shivam Yadav" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shivam Yadav" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#22c55e" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KRTHN0EN7N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KRTHN0EN7N');
      `}
        </Script>
      </head>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Analytics />
          <Navigation />
          <InstallPWA />
          <SmoothScroll>
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <div className="min-h-screen bg-black text-green-400 overflow-x-hidden">
                  <main className="lg:pl-20 pt-24 lg:pt-0 pb-24 lg:pb-0">{children}</main>
                </div>
              </div>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
