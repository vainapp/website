import { NextSeo } from 'next-seo'

import { PageHeader } from '../components/PageHeader'

const stats = [
  {
    label: 'Fundado',
    value: '2022',
  },
  {
    label: 'Colaboradores',
    value: '4',
  },
  {
    label: 'Clientes',
    value: '0',
  },
]

export default function PrivacyPolicy({
  backgroundImageURL = 'https://cdn.vainapp.com.br/website/suporte.png',
}): JSX.Element {
  return (
    <>
      <NextSeo
        title="Sobre"
        description="Conheça a história da empresa e o que fazemos."
      />

      <PageHeader
        title="Sobre nós"
        description="Revolucionamos a maneira como você gerencia e evolui seu salão."
        backgroundImageURL={backgroundImageURL}
      />
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              <div className="relative overflow-hidden rounded-2xl pb-10 flex justify-center">
                <div className="px-8">
                  <blockquote className="relative rounded-lg bg-white shadow-lg">
                    <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                      <picture>
                        <img
                          src="https://cdn.vainapp.com.br/website/logo.png"
                          alt="Vain logo"
                          className="h-8"
                        />
                      </picture>

                      <div className="relative mt-8 text-lg font-medium text-gray-700">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Um dos principais problemas de salões que impedem seus
                          crescimentos é a maneira de se organizar, seja num
                          papel ou em algum aplicativo de anotações. A Vain veio
                          pra atacar esse problema.
                        </p>
                      </div>
                    </div>
                    <cite className="relative flex items-center rounded-b-lg bg-orange-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                      <span className="relative flex-none rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                        <picture>
                          <img
                            className="h-12 w-12 rounded-full bg-orange-300 sm:h-20 sm:w-20"
                            src="https://cdn.vainapp.com.br/website/joao.jpg"
                            alt="João Pedro"
                          />
                        </picture>
                      </span>
                      <span className="relative ml-4 font-semibold leading-6 text-orange-300 sm:ml-24 sm:pl-1">
                        <span className="font-semibold text-white sm:inline">
                          João Melo
                        </span>{' '}
                        <span className="sm:inline">CTO Vain</span>
                      </span>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                História
              </h2>
              <div className="prose prose-lg prose-orange mx-auto mt-6 text-gray-500">
                <p className="text-base leading-7">
                  Em uma conversa entre amigos, nós abordamos como a tecnologia
                  tornou diversos serviços mais acessíveis e eficientes. Notamos
                  que não havia nada parecido no mundo da estética. A partir
                  daí, começamos a pensar em como poderíamos aplicar essas
                  ideias no mundo da beleza.
                </p>
                <p className="text-base leading-7">
                  Conversamos com especialistas da area e buscamos entender a
                  necessidade. Notamos pontos importantes, como a dificuldade de
                  se ter um controle de agenda, de clientes e de financeiro. A
                  partir daí, começamos a desenvolver uma solução que pudesse
                  resolver esses problemas.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-base font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
