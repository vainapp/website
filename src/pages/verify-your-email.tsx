import { NextSeo } from 'next-seo'

import { Link } from '../components/Link'

export default function VerifyYourEmail(): JSX.Element {
  return (
    <>
      <NextSeo title="Verifique seu e-mail" />

      <div className="bg-white">
        <main className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-32">
          <div className="mx-auto max-w-xl py-16 sm:py-24">
            <div>
              <p className="text-base font-semibold text-orange-600">
                Próximos passos
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Confirme o seu e-mail
              </h1>
              <p className="mt-2 text-lg text-gray-500">
                Te enviamos um e-mail de confirmação para finalizar o seu
                cadastro. Para prosseguir, basta clicar no link que enviamos
                para o seu e-mail.
              </p>

              <p className="mt-2 text-lg text-gray-500">
                Você já pode fechar essa janela.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="text-base font-medium text-orange-600 hover:text-orange-500"
                >
                  Ou volte para o início
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
