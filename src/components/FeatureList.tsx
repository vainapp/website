import { CheckIcon } from '@heroicons/react/24/outline'
import { Element } from 'react-scroll'
import { Link } from './Link'

const features = [
  {
    name: 'Otimize a gestão de funcionários',
    description:
      'Gerencie e acompanhe os cronogramas, tarefas e desempenho de seus funcionários, dando-lhe o controle necessário para administrar seus negócios com eficiência.',
  },
  {
    name: 'Controle flexível de serviços e preços',
    description:
      'Gerencie e atualize facilmente seus serviços e preços, dando-lhe a flexibilidade de se adaptar ao mercado e atender às necessidades de seus clientes.',
  },
  {
    name: 'Gerencie e acompanhe suas franquias com facilidade',
    description:
      'Gerencie e acompanhe suas franquias, dando-lhe visibilidade e controle para garantir consistência e qualidade em todos os locais.',
  },
  {
    name: 'Agende compromissos de maneira eficiente com nossa funcionalidade de calendários e horários',
    description:
      'Nossa funcionalidade de calendários e horários facilita que você e seus clientes agendem compromissos e acompanhem eventos futuros.',
  },
  {
    name: 'Nunca perca mais um compromisso com nossos lembretes',
    description:
      'Nunca perca mais um compromisso com nossos lembretes automatizados, garantindo que você e seus clientes estejam sempre no horário.',
  },
  {
    name: 'Tome decisões baseadas em dados com nossos relatórios e análises',
    description:
      'Nossa plataforma fornece relatórios detalhados e análises, dando-lhe as informações de que você precisa para tomar decisões informadas sobre seu negócio.',
  },
  {
    name: 'Melhore sua reputação e atraia novos clientes com nosso sistema de classificação baseado em avaliações',
    description:
      'Melhore sua reputação e atraia novos clientes com o tempo, destacando seus pontos fortes e diferenciando-se de sua concorrência com nosso sistema de classificação baseado em avaliações.',
  },
  {
    name: 'Gestão financeira e remuneração de funcionários',
    description:
      'Com nosso sistema de gestão financeira, você pode acompanhar e controlar o fluxo de caixa de seu negócio, além de garantir que cada funcionário seja remunerado de acordo com os serviços prestados.',
  },
]

export const FeatureList: React.FC = () => {
  return (
    <Element name="feature-list" className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40">
        <div>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-orange-600">
            Tudo que você precisa
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Plataforma tudo-em-um
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Foque no que realmente importa: seus clientes. Nós te ajudamos a
            cuidar do resto.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              anchor="pricing"
              className="inline-flex rounded-lg bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-600 hover:bg-orange-600 hover:ring-orange-600"
            >
              Começar
            </Link>
          </div>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <dl className="grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute mt-1 h-6 w-6 text-orange-600"
                    aria-hidden="true"
                  />
                  <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Element>
  )
}
