import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Edgar\'s Portfolio',
  description: 'A compilation of all my work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy="lazyOnload"></Script>
    <Script strategy="lazyOnload" id="gtag">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `}
    </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
