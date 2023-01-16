import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import zxcvbn from 'zxcvbn'

import { PasswordStrength } from '../components/PasswordStrength'
import { classNames } from '../helpers/classNames'

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
  const form = useForm<SignUpForm>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = (data: SignUpForm): void => {
    console.log(data)
  }

  return (
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
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...form.register('email')}
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
                      'block w-full rounded-md shadow-sm sm:text-sm'
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
                      'block w-full rounded-md shadow-sm sm:text-sm'
                    )}
                  />
                  <FormProvider {...form}>
                    <PasswordStrength />
                  </FormProvider>
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
                        : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
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
                      'block w-full rounded-md shadow-sm sm:text-sm'
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
                      'block w-full rounded-md shadow-sm sm:text-sm'
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
                      'block w-full min-w-0 flex-1 rounded-none rounded-r-md shadow-sm sm:text-sm px-3 py-2'
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
                  className="inline-flex items-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Criar minha conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
