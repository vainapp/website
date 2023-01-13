import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/globals.css'
import { SEOConfig } from '../seo.config'
import { ScrollToAnchorProvider } from '../contexts/ScrollToAnchorContext'
import { CheckoutProvider } from '../contexts/CheckoutContext'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ScrollToAnchorProvider>
      <CheckoutProvider>
        <DefaultSeo {...SEOConfig} />
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </CheckoutProvider>
    </ScrollToAnchorProvider>
  )
}
