import { animationTimeSpacer } from '../helpers/animationTimeSpacer'

import { FadeInLeftWhenVisible } from './animations/FadeInLeftWhenVisible'
import { FadeInRightWhenVisible } from './animations/FadeInRightWhenVisible'
import { FadeInUpWhenVisible } from './animations/FadeInUpWhenVisible'
import { FadeInWhenVisible } from './animations/FadeInWhenVisible'

export const Stats: React.FC = () => {
  return (
    <div className="bg-orange-500">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInWhenVisible delay={animationTimeSpacer(1)}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tudo que você precisa, de forma prática e autônoma
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={animationTimeSpacer(2)}>
            <p className="mt-3 text-xl text-orange-200 sm:mt-4">
              Deixe nossa plataforma cuidar do seu negócio enquanto você foca no
              que mais importa.
            </p>
          </FadeInWhenVisible>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <FadeInRightWhenVisible delay={animationTimeSpacer(3)}>
            <div className="flex flex-col">
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                100%
              </dd>
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-orange-200">
                Digital
              </dt>
              <dt className="order-2 mt-2 text-sm font-medium leading-6 text-orange-200">
                Esqueça o caderninho de agendamentos. Agora você pode gerenciar
                seu negócio de forma 100% digital.
              </dt>
            </div>
          </FadeInRightWhenVisible>
          <FadeInUpWhenVisible delay={animationTimeSpacer(4)}>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                24/7
              </dd>
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-orange-200">
                Funcionamento
              </dt>
              <dt className="order-2 mt-2 text-sm font-medium leading-6 text-orange-200">
                Permita seus clientes agendar seus serviços 24 horas por dia, 7
                dias por semana. Tudo sob seu controle.
              </dt>
            </div>
          </FadeInUpWhenVisible>
          <FadeInLeftWhenVisible delay={animationTimeSpacer(5)}>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                Grátis
              </dd>
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-orange-200">
                Por 1 mês
              </dt>
              <dt className="order-2 mt-2 text-sm font-medium leading-6 text-orange-200">
                Utilize nossa plataform por 1 mês sem custo algum. Depois disso,
                você pode escolher entre os planos mensais ou anuais.
              </dt>
            </div>
          </FadeInLeftWhenVisible>
        </dl>
      </div>
    </div>
  )
}
