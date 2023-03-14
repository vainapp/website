import { CheckIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Element } from 'react-scroll'

import { basicPlan, Plan, plusPlan, proPlan } from '../constants/plans'
import { classNames } from '../helpers/classNames'

export const Pricing: React.FC = () => {
  const [intervalFilter, setIntervalFilter] = useState<'monthly' | 'yearly'>(
    'monthly'
  )
  const router = useRouter()
  const intervalFilterLabel = intervalFilter === 'monthly' ? '/mês' : '/ano'
  const intervalPriceKey =
    intervalFilter === 'monthly' ? 'monthly_price' : 'yearly_price'

  const handlePlanSelection = (plan: Plan): void => {
    void router.push({
      pathname: '/sign-up',
      query: {
        price_id: plan[intervalPriceKey].id,
      },
    })
  }

  return (
    <Element name="pricing" className="bg-white">
      <div className="px-6 pt-12 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-6 text-gray-600">
            Planos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            O valor certo pra você, independente do tamanho do seu salão
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-600 sm:mt-5 sm:text-2xl">
            Não importa o tamanho, temos soluções para todos! Escalável e
            adaptável a empresas de qualquer tamanho, nós temos o que você
            precisa para crescer
          </p>
        </div>
      </div>

      <div className="relative mt-12 flex justify-center sm:mt-16">
        <div className="flex rounded-lg bg-orange-500 p-0.5">
          <button
            data-testid="monthly-pricing-interval"
            type="button"
            className={classNames(
              intervalFilter === 'monthly'
                ? 'bg-white text-orange-500 hover:bg-orange-50 focus:ring-offset-orange-500 focus:ring-transparent'
                : 'text-orange-100 hover:bg-orange-600 focus:ring-white focus:ring-offset-orange-500',
              'relative whitespace-nowrap rounded-md border border-orange-500 py-2 px-6 text-sm font-medium shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2'
            )}
            onClick={() => {
              setIntervalFilter('monthly')
            }}
          >
            Assinatura mensal
          </button>
          <button
            data-testid="yearly-pricing-interval"
            type="button"
            className={classNames(
              intervalFilter === 'yearly'
                ? 'bg-white text-orange-500 hover:bg-orange-50 focus:ring-offset-orange-500 focus:ring-transparent'
                : 'text-orange-100 hover:bg-orange-600 focus:ring-white focus:ring-offset-orange-500',
              'relative whitespace-nowrap rounded-md border border-orange-500 py-2 px-6 text-sm font-medium shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2'
            )}
            onClick={() => {
              setIntervalFilter('yearly')
            }}
          >
            Assinatura anual
          </button>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-white lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg border-2 border-gray-50 border-r-0">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-basic"
                        >
                          {basicPlan.name}
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              R$
                            </span>
                            <span className="font-bold">
                              {basicPlan[intervalPriceKey].value}
                            </span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            {intervalFilterLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {basicPlan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-orange-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <button
                            type="button"
                            onClick={() => {
                              handlePlanSelection(basicPlan)
                            }}
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-orange-500 hover:bg-gray-50"
                            aria-describedby="tier-basic"
                          >
                            Inicie seu período de testes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-orange-500"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-orange-500 px-4 py-1 text-base font-semibold text-white">
                        Mais popular
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                        id="tier-plus"
                      >
                        {plusPlan.name}
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                            R$
                          </span>
                          <span className="font-bold">
                            {plusPlan[intervalPriceKey].value}
                          </span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          {intervalFilterLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {plusPlan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 flex-shrink-0 text-orange-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <button
                          data-testid="subscribe-button"
                          type="button"
                          onClick={() => {
                            handlePlanSelection(plusPlan)
                          }}
                          className="block w-full rounded-lg border border-transparent bg-orange-500 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-orange-600"
                          aria-describedby="tier-plus"
                        >
                          Assinar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg border-2 border-gray-50 border-l-0">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-pro"
                        >
                          {proPlan.name}
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              R$
                            </span>
                            <span className="font-bold">
                              {proPlan[intervalPriceKey].value}
                            </span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            {intervalFilterLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {proPlan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-orange-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <button
                            type="button"
                            onClick={() => {
                              handlePlanSelection(proPlan)
                            }}
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-orange-500 hover:bg-gray-50"
                            aria-describedby="tier-pro"
                          >
                            Assinar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}
