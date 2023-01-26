import { DefaultSeoProps } from 'next-seo/lib'

const DEFAULT_TITLE = 'Vain | Leve a estética para o próximo nível'
const DEFAULT_DESCRIPTION = ''

export const SEOConfig: DefaultSeoProps = {
  titleTemplate: 'Vain | %s',
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonical: 'https://vainapp.com.br',
  themeColor: '#FFFFFF',
  robotsProps: {
    noarchive: false,
    nosnippet: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
    notranslate: true,
    noimageindex: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vainapp.com.br',
    siteName: 'Vain',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: 'https://cdn.vainapp.com.br/website/full-logo.png',
        width: 1980,
        height: 1980,
        alt: 'Vain logo',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
