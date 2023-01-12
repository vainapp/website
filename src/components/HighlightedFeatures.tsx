import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'
import { Element } from 'react-scroll'
import { Link } from './Link'

export const HighlightedFeatures: React.FC = () => {
  return (
    <Element
      name="highlighted-features"
      className="relative overflow-hidden bg-transparent pt-16 pb-32"
    >
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600">
                  <AdjustmentsHorizontalIcon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Gestão empresarial eficiente
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Nossa plataforma fácil de usar permite que você gerencie todos
                  os aspectos do seu negócio em um só lugar, simplificando suas
                  operações e economizando seu tempo.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    anchor="client-app"
                    className="inline-flex rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Um dos principais problemas de salões que impedem
                    seus crescimentos é a maneira de se organizar, seja num
                    papel ou em algum aplicativo de anotações. A Vain veio pra
                    atacar esse problema.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <picture>
                        <img
                          className="h-6 w-6 rounded-full"
                          src="/joao.jpg"
                          alt="João, Co-Founder e CTO da empresa"
                        />
                      </picture>
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      João Melo, Co-Founder e CTO da Vain
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <picture>
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <Element name="client-app" className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600">
                  <BoltIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Forneça poder aos seus clientes com nosso aplicativo
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Nosso aplicativo coloca o poder do seu negócio nas palmas das
                  mãos de seus clientes, permitindo que eles marquem facilmente
                  compromissos, visualizem serviços e preços e muito mais.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    anchor="feature-list"
                    className="inline-flex rounded-lg bg-orange-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-700 hover:ring-orange-700"
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <picture>
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </picture>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  )
}
