import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AdjustmentsHorizontalIcon,
  CalendarIcon,
  UserIcon,
  Bars3Icon,
  BoltIcon,
  BanknotesIcon,
  ChartBarIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '../helpers/classNames'
import { Link } from './Link'
import { URLS } from '../constants/urls'

const solutions = [
  {
    name: 'Gestão empresarial',
    description:
      'Gerencie seu negócio de forma eficiente com nossa plataforma fácil de usar e melhore sua presença online.',
    href: '/',
    anchor: 'highlighted-features',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Aplicativo para seus clientes',
    description:
      'Coloque o poder do seu negócio nas mãos dos seus clientes com nosso aplicativo fácil de usar.',
    href: '/',
    anchor: 'client-app',
    icon: BoltIcon,
  },
  {
    name: 'Gestão de funcionários',
    description:
      'Aumente a eficiência na administração de seus negócios com o controle sobre cronogramas, tarefas e desempenho de seus funcionários.',
    href: '/',
    anchor: 'feature-list',
    icon: UserIcon,
  },
  {
    name: 'Financeiro & remuneração',
    description:
      'Tenha total controle sobre o fluxo de caixa de seu negócio e garanta a remuneração justa de seus funcionários',
    href: '/',
    anchor: 'feature-list',
    icon: BanknotesIcon,
  },
  {
    name: 'Relatórios',
    description:
      'Tomar decisões informadas para seu negócio nunca foi tão fácil, com nossa plataforma de relatórios detalhados e análises otimizadas.',
    href: '/',
    anchor: 'feature-list',
    icon: ChartBarIcon,
  },
  {
    name: 'Calendários para agendamentos',
    description:
      'Aumente a eficiência do agendamento de compromissos e acompanhamento de eventos futuros.',
    href: '/',
    anchor: 'feature-list',
    icon: CalendarIcon,
  },
]
const resources = [
  {
    name: 'Termos de uso',
    description:
      'Ao acessar e usar nosso site e plataforma de gerenciamento de negócios, você concorda em cumprir os nossos termos de uso.',
    href: '/terms-of-use',
  },
  {
    name: 'Política de privacidade',
    description:
      'A segurança e privacidade dos seus dados é muito importante para nós.',
    href: '/privacy-policy',
  },
]

export const Header: React.FC = () => {
  return (
    <Popover className="relative bg-transparent z-10">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">Vain</span>
            <picture>
              <img
                className="h-8 w-auto sm:h-14"
                src="/logo.png"
                alt="Vain logo"
              />
            </picture>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-700',
                    'group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  )}
                >
                  <span>Soluções</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-700',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            anchor={solution.anchor}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-orange-500 text-white sm:h-12 sm:w-12">
                              <solution.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {solution.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-5 sm:p-8">
                        <Link
                          href="/"
                          anchor="pricing"
                          className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div className="text-base font-medium text-gray-900">
                              Teste grátis
                            </div>
                            <span className="ml-3 inline-flex items-center rounded-full bg-orange-100 px-3 py-0.5 text-xs font-medium leading-5 text-orange-800">
                              Novo
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Dê poder ao seu salão com todas as funcionalidades
                            que a Vain pode te oferecer.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link
            href="/"
            anchor="pricing"
            className="text-base font-medium text-gray-700 hover:text-gray-900 hover:cursor-pointer"
          >
            Planos
          </Link>
          <Link
            href="/"
            anchor="faq"
            className="text-base font-medium text-gray-700 hover:text-gray-900 hover:cursor-pointer"
          >
            Dúvidas
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-gray-700 hover:text-gray-900 hover:cursor-pointer"
          >
            Sobre nós
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-gray-700 hover:text-gray-900 hover:cursor-pointer"
          >
            Entre em contato
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-700',
                    'group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  )}
                >
                  <span>Mais</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-700',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            href={resource.href}
                            className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                          >
                            <p className="text-base font-medium text-gray-900">
                              {resource.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {resource.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <Link
            href={URLS.DASHBOARD_URL}
            target="_blank"
            className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-900"
          >
            Entrar
          </Link>
          <Link
            href="/"
            anchor="pricing"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-600"
          >
            Criar uma conta
          </Link>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <picture>
                    <img
                      className="h-8 w-auto"
                      src="/logo.png"
                      alt="Vain logo"
                    />
                  </picture>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      anchor={solution.anchor}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-orange-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
