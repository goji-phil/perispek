import type { Metadata } from 'next'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perispek — Wastewater Insights',
  description: 'Infrastructure management platform for wastewater operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen overflow-hidden bg-background text-foreground">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-auto page-fade-in">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
