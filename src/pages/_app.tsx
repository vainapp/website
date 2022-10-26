import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grupo C</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  )
}
