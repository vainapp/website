import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/globals.css'
import { CheckoutProvider } from '../contexts/CheckoutContext'
import { ScrollToAnchorProvider } from '../contexts/ScrollToAnchorContext'
import { ToastProvider } from '../contexts/ToastContext'
import { SEOConfig } from '../seo.config'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ScrollToAnchorProvider>
      <ToastProvider>
        <CheckoutProvider>
          <DefaultSeo {...SEOConfig} />
          <Header />
          <Component {...pageProps} />
          <Analytics />
          <Footer />
        </CheckoutProvider>
      </ToastProvider>
    </ScrollToAnchorProvider>
  )
}
