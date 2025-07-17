import type { Metadata } from "next"
import { ReduxProvider } from "@/lib/providers"
import { geistMono, geistSans } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "mpoc",
  description: "Monorepo Proof of Concept",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
