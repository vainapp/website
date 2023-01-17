import { XCircleIcon } from '@heroicons/react/20/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import Router from 'next/router'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import zxcvbn from 'zxcvbn'

import { Link } from '../components/Link'
import { PasswordStrength } from '../components/PasswordStrength'
import { useCheckout } from '../contexts/CheckoutContext'
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
      .min(10, 'Informe um número de telefone válido.'),
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

export default function SignUp(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const [emailChecked, setEmailChecked] = useState<string>()
  const form = useForm<SignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
  })
  const { plan, intervalFilter } = useCheckout()
  const { toast } = useToast()

  const priceId =
    plan !== null
      ? plan[intervalFilter === 'monthly' ? 'monthly_price' : 'yearly_price'].id
      : null

  const handleEmailBlur = async (event: {
    target: any
    type?: any
  }): Promise<void> => {
    if (priceId === null) {
      return
    }

    const email = form.getValues('email')

    if (email === emailChecked) {
      return
    }

    try {
      const response = await preSignUp({
        email: form.getValues('email'),
        price_id: priceId,
      })

      setEmailChecked(email)

      if (response?.checkout_url != null) {
        window.location.href = response.checkout_url
        return
      }

      if (response != null && response.verified === false) {
        void Router.push('/verify-your-email')
        return
      }
    } catch (error: any) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        toast('error', {
          title: 'Erro',
          message: error.response.data.error.message,
        })
        void Router.push('/')
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
        price_id: priceId,
      })
    } catch (error: any) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        toast('error', {
          title: 'Erro',
          message: error.response.data.error.message,
        })
      }
    } finally {
      setIsLoading(false)
      void Router.push('/verify-your-email')
    }
  }

  return (
    <>
      <NextSeo title="Criar uma conta" />

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <picture>
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt="Escritório"
              />
            </picture>
          </div>
        </div>
        <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              {plan === null && (
                <Link href="/" anchor="pricing">
                  <div className="rounded-md bg-red-50 p-4 mb-6 sm:mb-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <XCircleIcon
                          className="h-5 w-5 text-red-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Você precisa escolher um plano para criar uma conta.
                          Clique aqui para escolher um plano.
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

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
                      disabled={plan === null || isLoading}
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...form.register('email', {
                        onBlur: handleEmailBlur,
                      })}
                      aria-invalid={
                        form.formState.errors.email?.message != null
                      }
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
                      disabled={plan === null || isLoading}
                      id="password"
                      type="password"
                      autoComplete="password"
                      {...form.register('password')}
                      aria-invalid={
                        form.formState.errors.password?.message != null
                      }
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
                    {plan !== null && (
                      <FormProvider {...form}>
                        <PasswordStrength />
                      </FormProvider>
                    )}
                    {form.formState.errors.password?.message != null && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="password-error"
                      >
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
                      disabled={plan === null || isLoading}
                      id="password-confirmation"
                      type="password"
                      autoComplete="password"
                      {...form.register('passwordConfirmation')}
                      aria-invalid={
                        form.formState.errors.passwordConfirmation?.message !=
                        null
                      }
                      aria-describedby={
                        form.formState.errors.passwordConfirmation?.message !=
                        null
                          ? 'password-confirmation-error'
                          : undefined
                      }
                      className={classNames(
                        form.formState.errors.passwordConfirmation?.message !=
                          null
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
                      disabled={plan === null || isLoading}
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...form.register('name')}
                      aria-invalid={
                        form.formState.errors.companyName?.message != null
                      }
                      aria-describedby={
                        form.formState.errors.companyName?.message != null
                          ? 'name-error'
                          : undefined
                      }
                      className={classNames(
                        form.formState.errors.companyName?.message != null
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
                      disabled={plan === null || isLoading}
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
                      disabled={plan === null || isLoading}
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
                    type="submit"
                    disabled={plan === null || isLoading}
                    className="inline-flex items-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    Criar minha conta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
