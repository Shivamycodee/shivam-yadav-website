import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { Analytics } from "@vercel/analytics/next"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shivam Yadav",
  description: "Full-stack Blockchain developer | Code enthusiast | Terminal lover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-black text-green-400 overflow-x-hidden">
            <Analytics/>
            <Navigation />
            <main className="lg:pl-20 pt-24 lg:pt-0 pb-24 lg:pb-0">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
