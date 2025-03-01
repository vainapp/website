interface SignUpFlowWrapperProps {
  children: JSX.Element
}

export const SignUpFlowWrapper: React.FC<SignUpFlowWrapperProps> = ({
  children,
}: SignUpFlowWrapperProps) => {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <picture>
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://cdn.vainapp.com.br/website/escritorio.jpeg"
              alt="Escritório"
            />
          </picture>
        </div>
      </div>
      <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="lg:pr-8">
          <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
