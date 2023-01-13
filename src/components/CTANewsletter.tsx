export const CTANewsletter: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <div className="rounded-lg bg-orange-500 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Quer receber novidades sobre nossa plataforma?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-orange-200">
              Cadastre-se na nossa newsletter para manter-se atualizado(a).
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700"
                placeholder="Informe seu endereço de e-mail"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-400 px-5 py-3 text-base font-medium text-white shadow hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Avisar-me
              </button>
            </form>
            <p className="mt-3 text-sm text-orange-200">
              Nos importamos sobre a proteção dos seus dados. Leia nossa{' '}
              <a
                href="/privacy-policy"
                className="font-medium text-white underline"
              >
                Política de Privacidade.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
