import { animationTimeSpacer } from '../helpers/animationTimeSpacer'

import { FadeInUpWhenVisible } from './animations/FadeInUpWhenVisible'

interface PageHeaderProps {
  title: string
  description: string
  backgroundImageURL?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backgroundImageURL = 'https://cdn.vainapp.com.br/website/suporte.png',
}: PageHeaderProps) => {
  return (
    <div className="relative bg-orange-400">
      <div className="absolute inset-0">
        <picture>
          <img
            className="h-full w-full object-cover"
            src={backgroundImageURL}
            alt={title}
          />
        </picture>
        <div
          className="absolute inset-0 bg-orange-400 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <FadeInUpWhenVisible delay={animationTimeSpacer(1)}>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </FadeInUpWhenVisible>
        <FadeInUpWhenVisible delay={animationTimeSpacer(2)}>
          <p className="mt-6 max-w-3xl text-xl text-orange-50">{description}</p>
        </FadeInUpWhenVisible>
      </div>
    </div>
  )
}
