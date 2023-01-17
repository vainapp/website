import { NextSeo } from 'next-seo'

import { Link } from '../components/Link'
import { PageHeader } from '../components/PageHeader'

export default function VerifyYourEmail(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Verifique seu e-mail"
        description="O próximo passo é confirmar a sua conta! Enviamos as instruções para o seu e-mail."
      />

      <PageHeader
        title="Verifique seu e-mail"
        description="O próximo passo é confirmar a sua conta! Enviamos as instruções para o seu e-mail."
      />
      <div className="bg-white">
        <main className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Quase lá
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Te enviamos um e-mail de confirmação para finalizar o seu
              cadastro. Para prosseguir, basta clicar no link que enviamos para
              o seu e-mail.
            </p>

            <p className="mt-4 text-lg text-gray-500">
              Você já pode fechar essa janela.
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="text-base font-medium text-orange-600 hover:text-orange-500"
              >
                Ou volte para o início
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
