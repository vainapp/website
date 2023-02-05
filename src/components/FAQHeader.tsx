import {
  BuildingOfficeIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { Element } from 'react-scroll'

import { animationTimeSpacer } from '../helpers/animationTimeSpacer'

import { Link } from './Link'
import { FadeInUpWhenVisible } from './animations/FadeInUpWhenVisible'
import { FadeInWhenVisible } from './animations/FadeInWhenVisible'

const supportLinks = [
  {
    name: 'Empresas',
    href: 'faq/companies',
    description:
      'Tem dúvidas sobre como usar a Vain no seu salão? Aqui você encontra as respostas para as perguntas mais frequentes.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Clientes',
    href: 'faq/clients',
    description:
      'Quer saber como usar o aplicativo e conseguir agendar serviços com facilidade? Aqui você encontra as respostas para as perguntas mais frequentes.',
    icon: UserIcon,
  },
  {
    name: 'Outros',
    href: '/contact',
    description:
      'Não encontrou a resposta para a sua pergunta? Entre em contato conosco e tire todas as suas dúvidas.',
    icon: MagnifyingGlassIcon,
  },
]

export const FAQHeader: React.FC = () => {
  return (
    <Element name="faq" className="bg-white">
      <div className="relative bg-orange-400 pb-32">
        <div className="absolute inset-0">
          <picture>
            <img
              className="h-full w-full object-cover"
              src="https://cdn.vainapp.com.br/website/suporte.png"
              alt="Suporte"
            />
          </picture>
          <div
            className="absolute inset-0 bg-orange-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <FadeInUpWhenVisible delay={animationTimeSpacer(1)}>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Perguntas frequentes
            </h1>
          </FadeInUpWhenVisible>
          <FadeInUpWhenVisible delay={animationTimeSpacer(2)}>
            <p className="mt-6 max-w-3xl text-xl text-orange-50">
              Tenha as respostas para as perguntas mais frequentes sobre o
              funcionamento das nossas plataformas.
            </p>
          </FadeInUpWhenVisible>
        </div>
      </div>

      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Saber mais
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link, index) => (
            <FadeInWhenVisible
              key={link.name}
              delay={animationTimeSpacer(2 + index)}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-orange-500 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <Link
                  href={link.href}
                  className="text-base font-medium text-orange-600 hover:text-orange-500"
                >
                  Saber mais<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>
    </Element>
  )
}
