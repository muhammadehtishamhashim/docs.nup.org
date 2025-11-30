import './globals.css'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: 'National University of Pakistan - Documentation',
  description: 'Official documentation for bachelor programs at National University of Pakistan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}