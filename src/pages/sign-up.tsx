import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import zxcvbn from 'zxcvbn'

import { PasswordStrength } from '../components/PasswordStrength'
import { SignUpFlowWrapper } from '../components/SignUpFlowWrapper'
import { useToast } from '../contexts/ToastContext'
import { classNames } from '../helpers/classNames'
import { signUp, preSignUp } from '../services/signUpService'

const schema = z
  .object({
    email: z.string().trim().email('Informe um endereço de e-mail válido.'),
    password: z
      .string()
      .trim()
      .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
    passwordConfirmation: z.string().trim(),
    name: z.string().trim().min(1, 'Informe seu nome.'),
    companyName: z.string().trim().min(1, 'Informe o nome da empresa.'),
    phoneNumber: z
      .string()
      .trim()
      .regex(/\d+/g, 'Apenas números são permitidos.')
      .min(10, 'Informe um número de telefone válido.')
      .max(11, 'Informe um número de telefone válido.'),
  })
  .superRefine((shape, context) => {
    const { password, passwordConfirmation } = shape

    if (password.length > 0) {
      const { score } = zxcvbn(password)

      if (score < 3) {
        context.addIssue({
          path: ['password'],
          code: z.ZodIssueCode.custom,
          message: 'A senha deve ser mais forte.',
        })
      }
    }

    if (password !== passwordConfirmation) {
      context.addIssue({
        path: ['passwordConfirmation'],
        code: z.ZodIssueCode.custom,
        message: 'A confirmação de senha não corresponde à senha informada.',
      })
    }
  })

export type SignUpForm = z.infer<typeof schema>

export default function SignUp(): JSX.Element | null {
  const [isLoading, setIsLoading] = useState(false)
  const [emailChecked, setEmailChecked] = useState<string>()
  const router = useRouter()
  const form = useForm<SignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
  })
  const { toast } = useToast()

  const { price_id: priceId } = router.query

  if (priceId == null) {
    return null
  }

  const handleEmailBlur = async (event: {
    target: any
    type?: any
  }): Promise<void> => {
    const email = form.getValues('email')

    if (email === emailChecked) {
      return
    }

    try {
      const response = await preSignUp({
        email: form.getValues('email'),
        price_id: priceId as string,
      })

      setEmailChecked(email)

      if (response?.checkout_url != null) {
        window.open(response.checkout_url, '_self')
        return
      }

      if (response != null && response.verified === false) {
        void router.push({
          pathname: '/verify-your-email',
          query: {
            price_id: priceId,
            email: form.getValues('email'),
          },
        })
        return
      }
    } catch (error: any) {
      if (isAxiosError(error) && error.response?.status === 403) {
        toast('error', {
          title: 'Erro',
          message: error.response.data.error.message,
        })
        void router.push('/')
      }
    }
  }

  const handleSubmit = async (data: SignUpForm): Promise<void> => {
    if (priceId == null) return

    setIsLoading(true)

    try {
      await signUp({
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        company_name: data.companyName,
        phone_number: `55${data.phoneNumber}`,
        name: data.name,
        price_id: priceId as string,
      })
    } catch (error: any) {
      if (isAxiosError(error)) {
        toast('error', {
          title: 'Erro',
          message: error.response?.data.error.message ?? 'Erro desconhecido.',
        })
      }
    } finally {
      setIsLoading(false)
      void router.push({
        pathname: '/verify-your-email',
        query: {
          price_id: priceId,
          email: form.getValues('email'),
        },
      })
    }
  }

  return (
    <>
      <NextSeo title="Criar uma conta" noindex />

      <SignUpFlowWrapper>
        <>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Criar uma conta
          </h2>
          <p className="mt-4 text-lg text-gray-500 sm:mt-3">
            Crie sua conta agora e leve o seu salão para o próximo nível.
          </p>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Endereço de e-mail
              </label>
              <div className="mt-1">
                <input
                  data-testid="email-input"
                  disabled={isLoading}
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...form.register('email', {
                    onBlur: handleEmailBlur,
                  })}
                  aria-invalid={form.formState.errors.email?.message != null}
                  aria-describedby={
                    form.formState.errors.email?.message != null
                      ? 'email-error'
                      : undefined
                  }
                  className={classNames(
                    form.formState.errors.email?.message != null
                      ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
                    'block w-full rounded-md shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
                  )}
                />
                {form.formState.errors.email?.message != null && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    {form.formState.errors.email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="mt-1">
                <input
                  data-testid="password-input"
                  disabled={isLoading}
                  id="password"
                  type="password"
                  autoComplete="password"
                  {...form.register('password')}
                  aria-invalid={form.formState.errors.password?.message != null}
                  aria-describedby={
                    form.formState.errors.password?.message != null
                      ? 'password-error'
                      : undefined
                  }
                  className={classNames(
                    form.formState.errors.password?.message != null
                      ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
                    'block w-full rounded-md shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
                  )}
                />
                <FormProvider {...form}>
                  <PasswordStrength />
                </FormProvider>
                {form.formState.errors.password?.message != null && (
                  <p className="mt-2 text-sm text-red-600" id="password-error">
                    {form.formState.errors.password?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="password-confirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmação de senha
              </label>
              <div className="mt-1">
                <input
                  data-testid="password-confirmation-input"
                  disabled={isLoading}
                  id="password-confirmation"
                  type="password"
                  autoComplete="password"
                  {...form.register('passwordConfirmation')}
                  aria-invalid={
                    form.formState.errors.passwordConfirmation?.message != null
                  }
                  aria-describedby={
                    form.formState.errors.passwordConfirmation?.message != null
                      ? 'password-confirmation-error'
                      : undefined
                  }
                  className={classNames(
                    form.formState.errors.passwordConfirmation?.message != null
                      ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
                    'block w-full rounded-md shadow-sm sm:text-sm'
                  )}
                />
                {form.formState.errors.passwordConfirmation?.message !=
                  null && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="password-confirmation-error"
                  >
                    {form.formState.errors.passwordConfirmation?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome completo
              </label>
              <div className="mt-1">
                <input
                  data-testid="name-input"
                  disabled={isLoading}
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...form.register('name')}
                  aria-invalid={form.formState.errors.name?.message != null}
                  aria-describedby={
                    form.formState.errors.name?.message != null
                      ? 'name-error'
                      : undefined
                  }
                  className={classNames(
                    form.formState.errors.name?.message != null
                      ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
                    'block w-full rounded-md shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
                  )}
                />
                {form.formState.errors.name?.message != null && (
                  <p className="mt-2 text-sm text-red-600" id="name-error">
                    {form.formState.errors.name?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome da empresa
              </label>
              <div className="mt-1">
                <input
                  data-testid="company-name-input"
                  disabled={isLoading}
                  type="text"
                  id="company-name"
                  autoComplete="organization"
                  {...form.register('companyName')}
                  aria-invalid={
                    form.formState.errors.companyName?.message != null
                  }
                  aria-describedby={
                    form.formState.errors.companyName?.message != null
                      ? 'company-name-error'
                      : undefined
                  }
                  className={classNames(
                    form.formState.errors.companyName?.message != null
                      ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
                    'block w-full rounded-md shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
                  )}
                />
                {form.formState.errors.companyName?.message != null && (
                  <p
                    className="mt-2 text-sm text-red-600"
                    id="company-name-error"
                  >
                    {form.formState.errors.companyName?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone celular
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  +55
                </span>
                <input
                  data-testid="phone-number-input"
                  disabled={isLoading}
                  type="text"
                  id="phone-number"
                  {...form.register('phoneNumber')}
                  aria-invalid={
                    form.formState.errors.phoneNumber?.message != null
                  }
                  aria-describedby={
                    form.formState.errors.phoneNumber?.message != null
                      ? 'phone-number-error'
                      : undefined
                  }
                  className={classNames(
                    form.formState.errors.companyName?.message != null
                      ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
                    'block w-full min-w-0 flex-1 rounded-none rounded-r-md shadow-sm sm:text-sm px-3 py-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
                  )}
                  placeholder="11963005536"
                />
              </div>
              {form.formState.errors.phoneNumber?.message != null && (
                <p
                  className="mt-2 text-sm text-red-600"
                  id="phone-number-error"
                >
                  {form.formState.errors.phoneNumber?.message}
                </p>
              )}
            </div>
            <div className="text-right sm:col-span-2">
              <button
                data-testid="sign-up-button"
                type="submit"
                disabled={isLoading}
                className="ml-2 inline-flex items-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
              >
                Criar minha conta
              </button>
            </div>
          </form>
        </>
      </SignUpFlowWrapper>
    </>
  )
}
