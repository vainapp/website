import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { PageHeader } from '../components/PageHeader'
import { useToast } from '../contexts/ToastContext'
import { classNames } from '../helpers/classNames'
import { resendSMSCode, verifyPhoneNumber } from '../services/signUpService'

const schema = z.object({
  code: z
    .string()
    .min(4, 'O código tem que ter 4 dígitos.')
    .max(4, 'O código tem que ter 4 dígitos.'),
})

type PhoneNumberVerificationForm = z.infer<typeof schema>

export default function CompanyEmailVerified(): JSX.Element | null {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    price_id: priceId,
    employee_id: employeeId,
    needs_sms_verification: needsSMSVerification,
  } = router.query
  const { toast } = useToast()
  const form = useForm<PhoneNumberVerificationForm>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (needsSMSVerification === 'false') {
      void router.push({
        pathname: '/company-phone-number-verified',
        query: {
          price_id: priceId,
          employee_id: employeeId,
        },
      })
    }
  }, [employeeId, needsSMSVerification, priceId, router])

  if (priceId == null || employeeId == null || needsSMSVerification == null) {
    return null
  }

  const handleSubmit = async (
    data: PhoneNumberVerificationForm
  ): Promise<void> => {
    setIsLoading(true)

    try {
      await verifyPhoneNumber({
        employee_id: employeeId as string,
        code: data.code,
      })

      await router.push({
        pathname: '/company-phone-number-verified',
        query: {
          price_id: priceId,
          employee_id: employeeId,
        },
      })
    } catch (error: any) {
      toast('error', {
        title: 'Erro',
        message: isAxiosError(error)
          ? error.response?.data.error.message
          : error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async (): Promise<void> => {
    setIsLoading(true)

    try {
      await resendSMSCode({
        employee_id: employeeId as string,
      })

      toast('success', {
        title: 'Código reenviado',
        message: 'O código foi reenviado para o seu número de telefone.',
      })
    } catch (error: any) {
      toast('error', {
        title: 'Erro',
        message: isAxiosError(error)
          ? error.response?.data.error.message
          : error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <NextSeo title="E-mail verificado" />
      <PageHeader
        title="E-mail verificado"
        description="Agora, precisamos que você informe o código que enviamos por SMS para o seu número de telefone."
      />

      <div className="bg-white">
        <main className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
          <div>
            <div className="mx-auto w-full max-w-7xl">
              <div className="mx-auto max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Confirme seu telefone
                </h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  Informe o código que enviamos por SMS para o seu número de
                  telefone.
                </p>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Código de verificação
                    </label>
                    <div className="mt-1">
                      <input
                        id="code"
                        disabled={isLoading}
                        type="text"
                        autoComplete="code"
                        placeholder='Ex.: "1234"'
                        {...form.register('code')}
                        aria-invalid={
                          form.formState.errors.code?.message != null
                        }
                        aria-describedby={
                          form.formState.errors.code?.message != null
                            ? 'code-error'
                            : undefined
                        }
                        className={classNames(
                          form.formState.errors.code?.message != null
                            ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500',
                          'block w-full rounded-md shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
                        )}
                      />
                      {form.formState.errors.code?.message != null && (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="code-error"
                        >
                          {form.formState.errors.code?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      disabled={isLoading}
                      type="button"
                      onClick={handleResendCode}
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                    >
                      Reenviar código
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="ml-2 inline-flex items-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                    >
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
