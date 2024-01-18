import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'intellifill - Exam Page',
  description: 'intellifill - Exam Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
