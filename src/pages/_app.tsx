import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Hero'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
