import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/globals.css'
import { ScrollToAnchorProvider } from '../contexts/ScrollToAnchorContext'
import { ToastProvider } from '../contexts/ToastContext'
import { SEOConfig } from '../seo.config'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const shouldRenderLayout =
    process.env.NEXT_PUBLIC_ENFORCE_COMING_SOON_PAGE !== 'true'

  return (
    <ScrollToAnchorProvider>
      <ToastProvider>
        <DefaultSeo {...SEOConfig} />
        {shouldRenderLayout && <Header />}
        <Component {...pageProps} />
        <Analytics />
        {shouldRenderLayout && <Footer />}
      </ToastProvider>
    </ScrollToAnchorProvider>
  )
}
