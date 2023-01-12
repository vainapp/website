import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Element } from 'react-scroll'
import { classNames } from '../helpers/classNames'

const faqs = [
  {
    question: 'O que é a Vain?',
    answer:
      'Somos uma plataforma que facilita o agendamento e gerenciamento de estabelecimentos focados em estética. Com a Vain, você participa de um marketplace com direito a gerenciar toda a sua agenda, seus serviços, funcionários, franquias, clientes, gerar relatórios e muito mais. Tudo isso de forma simples e intuitiva.',
  },
  // TODO: Add more questions
]

export const FAQ: React.FC = () => {
  return (
    <Element name="faq" className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perguntas frequentemente feitas
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </Element>
  )
}
