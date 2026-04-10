import type { Metadata } from 'next'
import '../styles/globals.css'
import { LangProvider } from '@/lib/lang-context'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'REVESTIUM AG — Gold Banking. Collateral Services. Zug, Schweiz.',
  description: 'Von der passiven Reserve zum aktiven Kapital. LBMA Good Delivery Standard. Gold Bank, AUROM, Gold Hypo & Repo.',
  openGraph: {
    title: 'REVESTIUM AG',
    description: 'Gold as a Service — institutional gold collateral, digital gold banking, treasury management.',
    siteName: 'REVESTIUM GROUP',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <LangProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
