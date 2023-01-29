import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '../contexts/ToastContext'
import { classNames } from '../helpers/classNames'
import { signUpToNewsletter } from '../services/newsletterService'

import { Link } from './Link'

interface CTANewsletterProps {
  isFromComingSoonPage?: boolean
}

const schema = z.object({
  email: z.string().trim().email(),
})

type NewsletterForm = z.infer<typeof schema>

export const CTANewsletter: React.FC<CTANewsletterProps> = ({
  isFromComingSoonPage = false,
}: CTANewsletterProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<NewsletterForm>({
    resolver: zodResolver(schema),
  })

  const { toast } = useToast()

  const handleSubmit = async (data: NewsletterForm): Promise<void> => {
    setIsLoading(true)

    try {
      await signUpToNewsletter(data)

      toast('success', {
        title: 'Sucesso!',
        message: 'Você foi cadastrado(a) com sucesso na nossa newsletter.',
      })
    } catch (error: any) {
      toast('error', {
        title: 'Erro',
        message:
          error.response?.data?.error?.message ??
          'Não foi possível cadastrar você na nossa newsletter. Tente novamente mais tarde.',
      })
    } finally {
      setIsLoading(false)
      form.reset()
    }
  }

  return (
    <div className={isFromComingSoonPage ? 'bg-transparent' : 'bg-white'}>
      <div
        className={classNames(
          isFromComingSoonPage ? 'py-0' : 'py-12 lg:py-16',
          'mx-auto max-w-7xl px-6 lg:px-8'
        )}
      >
        <div className="rounded-lg bg-orange-500 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {isFromComingSoonPage
                ? 'Quer ser avisado sobre o lançamento da Vain?'
                : 'Quer receber novidades sobre nossa plataforma?'}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-orange-200">
              {isFromComingSoonPage
                ? 'Cadastre-se para receber os próximos avisos.'
                : 'Cadastre-se na nossa newsletter para manter-se atualizado(a).'}
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form
              className="sm:flex"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                required
                {...form.register('email')}
                aria-invalid={form.formState.errors.email?.message != null}
                aria-describedby={
                  form.formState.errors.email?.message != null
                    ? 'email-error'
                    : undefined
                }
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700"
                placeholder="Informe seu endereço de e-mail"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-400 px-5 py-3 text-base font-medium text-white shadow hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
              >
                Avisar-me
              </button>
            </form>
            {!isFromComingSoonPage && (
              <p className="mt-3 text-sm text-orange-200">
                Nos importamos sobre a proteção dos seus dados. Leia nossa{' '}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-white underline"
                >
                  política de privacidade.
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
