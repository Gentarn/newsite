import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OPEN FACE LLC',
  description: 'ビジネス変革でデータ価値を最大化させるパートナー',
  icons: {
    icon: '/images/openface.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
