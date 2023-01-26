import { NextSeo } from 'next-seo'

import { Link } from '../components/Link'
import { PageHeader } from '../components/PageHeader'
import { URLS } from '../constants/urls'

export default function PaymentSucceeded(): JSX.Element {
  return (
    <>
      <NextSeo title="Pagamento confirmado" noindex />
      <PageHeader
        title="Pagamento confirmado!"
        description="Agora você pode acessar o sistema."
        backgroundImageURL="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=60&&sat=-100"
      />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-orange-500 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Tudo pronto!</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-orange-100">
                  Já está tudo pronto para você começar. A partir de agora, você
                  pode acessar a plataforma e começar a utilizar todas as
                  funcionalidades.
                </p>
                <Link
                  href={URLS.DASHBOARD_URL}
                  target="_blank"
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-500 shadow hover:bg-orange-50"
                >
                  Acessar a plataforma
                </Link>
              </div>
            </div>
            <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <picture>
                <img
                  className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src="https://cdn.vainapp.com.br/website/interface-sistema-vain-3.jpeg"
                  alt="Interface do sistema administrativo da Vain"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
