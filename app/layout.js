import './globals.css'
import { Montserrat, Lora, Crimson_Pro } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const lora = Lora({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora'
})

const crimson_pro = Crimson_Pro({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro'
})

export const metadata = {
  title: 'Interior consultant - Erika',
  description: 'This a React.js project building a page of an interior conusltant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${lora.variable} ${crimson_pro.variable}`}>
        {children}
      </body>
    </html>
  )
}
