import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WorkflowX | Automate your work',
  description: 'The B2B SaaS platform that connects your tools and automates tasks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
