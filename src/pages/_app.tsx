import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/globals.css'
import { SEOConfig } from '../seo.config'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
