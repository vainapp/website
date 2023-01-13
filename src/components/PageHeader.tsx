interface PageHeaderProps {
  title: string
  description: string
  label: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  label,
}: PageHeaderProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600">{label}</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
