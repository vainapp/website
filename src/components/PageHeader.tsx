interface PageHeaderProps {
  title: string
  description: string
  backgroundImageURL?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backgroundImageURL = 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100',
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
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-orange-100">{description}</p>
      </div>
    </div>
  )
}
