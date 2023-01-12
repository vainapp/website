import { CheckIcon } from '@heroicons/react/24/outline'
import { Element } from 'react-scroll'

const features = [
  {
    name: 'Otimize a gestão de funcionários',
    description:
      'Gerencie e acompanhe os cronogramas, tarefas e desempenho de seus funcionários, dando-lhe o controle necessário para administrar seus negócios com eficiência',
  },
  {
    name: 'Controle flexível de serviços e preços',
    description:
      'Gerencie e atualize facilmente seus serviços e preços, dando-lhe a flexibilidade de se adaptar ao mercado e atender às necessidades de seus clientes.',
  },
  {
    name: 'Gerencie e acompanhe suas franquias com facilidade',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Agende compromissos de maneira eficiente com nossa funcionalidade de calendários e horários',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Nunca perca mais um compromisso com nossos lembretes',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Tome decisões baseadas em dados com nossos relatórios e análises',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Melhore sua reputação e atraia novos clientes com nosso sistema de classificação baseado em avaliações',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Mobile app',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
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
