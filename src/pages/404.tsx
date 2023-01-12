import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  QuestionMarkCircleIcon,
  SparklesIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'
import { NextSeo } from 'next-seo'
import { Link } from '../components/Link'

const links = [
  {
    title: 'Soluções',
    description: 'Todas as funcionalidades do Vain',
    icon: SparklesIcon,
    path: '/',
    anchor: 'highlighted-features',
  },
  {
    title: 'Planos',
    description: 'Planos e preços para todos os tamanhos de negócio',
    icon: DocumentDuplicateIcon,
    path: '/',
    anchor: 'pricing',
  },
  {
    title: 'FAQ',
    description: 'Perguntas frequentes sobre a plataforma',
    icon: QuestionMarkCircleIcon,
    path: '/',
    anchor: 'faq',
  },
]

export default function NotFound(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Página não encontrada"
        description="A página que você está procurando não foi encontrada."
      />

      <div className="bg-white">
        <main className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex-shrink-0 pt-16">
            <picture>
              <img
                className="mx-auto h-12 w-auto"
                src="/logo.png"
                alt="Vain logo"
              />
            </picture>
          </div>
          <div className="mx-auto max-w-xl py-16 sm:py-24">
            <div className="text-center">
              <p className="text-base font-semibold text-orange-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Essa página não existe.
              </h1>
              <p className="mt-2 text-lg text-gray-500">
                A página que você está procurando não foi encontrada.
              </p>
            </div>
            <div className="mt-12">
              <h2 className="text-base font-semibold text-gray-500">
                Páginas populares
              </h2>
              <ul
                role="list"
                className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="relative flex items-start space-x-4 py-6"
                  >
                    <div className="flex-shrink-0">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                        <link.icon
                          className="h-6 w-6 text-orange-700"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-medium text-gray-900">
                        <span className="rounded-sm focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2">
                          <Link
                            href={link.path}
                            anchor={link.anchor}
                            className="focus:outline-none"
                          >
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {link.title}
                          </Link>
                        </span>
                      </h3>
                      <p className="text-base text-gray-500">
                        {link.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/"
                  className="text-base font-medium text-orange-600 hover:text-orange-500"
                >
                  Ou volte para o início
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
