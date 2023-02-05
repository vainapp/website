import { animationTimeSpacer } from '../helpers/animationTimeSpacer'

import { Link } from './Link'
import { FadeInLeftWhenVisible } from './animations/FadeInLeftWhenVisible'
import { FadeInUpWhenVisible } from './animations/FadeInUpWhenVisible'

export const CTAFreeTrial: React.FC = () => {
  return (
    <div className="bg-orange-50">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <FadeInUpWhenVisible delay={animationTimeSpacer(1)}>
            <span className="block">Pronto pra começar?</span>
          </FadeInUpWhenVisible>
          <FadeInUpWhenVisible delay={animationTimeSpacer(2)}>
            <span className="block text-orange-500">
              Inicie o seu período de teste hoje.
            </span>
          </FadeInUpWhenVisible>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <FadeInLeftWhenVisible delay={animationTimeSpacer(4)}>
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/"
                anchor="pricing"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-5 py-3 text-base font-medium text-white hover:bg-orange-600"
              >
                Começar
              </Link>
            </div>
          </FadeInLeftWhenVisible>
        </div>
      </div>
    </div>
  )
}
