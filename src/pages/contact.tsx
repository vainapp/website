import { NextSeo } from 'next-seo'

export default function Contact(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Fale conosco"
        description="Entre em contato conosco para tirar dúvidas, fazer sugestões ou reclamações."
      />

      <div className="relative bg-orange-400">
        <div className="absolute inset-0">
          <picture>
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
          </picture>
          <div
            className="absolute inset-0 bg-orange-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fale conosco
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-orange-100">
            Entre em contato conosco para tirar dúvidas, fazer sugestões ou
            reclamações.
          </p>
        </div>
      </div>
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
