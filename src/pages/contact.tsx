import { NextSeo } from 'next-seo'

import { PageHeader } from '../components/PageHeader'

export default function Contact(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Fale conosco"
        description="Entre em contato conosco para tirar dúvidas, fazer sugestões ou reclamações."
      />

      <PageHeader
        title="Fale conosco"
        description="Entre em contato conosco para tirar dúvidas, fazer sugestões ou
            reclamações."
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                Fale conosco
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Suporte
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">E-mail</dt>
                      <dd>oi@vainapp.com.br</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Telefone</dt>
                      <dd>+55 (11) 96300-5537</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                Endereços
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Guarulhos
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>Rua Léo de Oliveira, 33</p>
                    <p className="mt-1">São Paulo, Brasil - 07021-080</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
