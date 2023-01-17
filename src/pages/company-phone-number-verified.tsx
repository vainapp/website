import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'

import { PageHeader } from '../components/PageHeader'
import { useToast } from '../contexts/ToastContext'
import { createCheckoutSession } from '../services/signUpService'

export default function CompanyPhoneNumberVerified(): JSX.Element | null {
  const router = useRouter()
  const { toast } = useToast()
  const [checkoutURL, setCheckoutURL] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { price_id: priceId, employee_id: employeeId } = router.query

  useEffect(() => {
    if (priceId == null || employeeId == null) {
      return
    }

    const createSession = async (): Promise<void> => {
      setIsLoading(true)

      try {
        const { checkout_url: checkoutURL } = await createCheckoutSession({
          employee_id: employeeId as string,
          price_id: priceId as string,
        })

        setCheckoutURL(checkoutURL)
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

    void createSession()
  }, [employeeId, priceId, toast])

  if (priceId == null || employeeId == null) {
    return <div>hey!</div>
  }

  const handleOpenCheckoutURL = (): void => {
    if (checkoutURL == null) {
      return
    }

    window.open(checkoutURL, '_blank')
  }

  return (
    <>
      <NextSeo title="Pagamento" />
      <PageHeader
        title="Pagamento"
        description="Está tudo pronto com a sua conta! Agora, para liberar o seu acesso, você precisa cadastrar um método de pagamento para ativar a sua assinatura."
      />

      <div className="bg-orange-50">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Pronto pra começar?</span>
            <span className="block text-orange-500">
              Ative sua conta agora mesmo.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                type="submit"
                disabled={isLoading}
                onClick={handleOpenCheckoutURL}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-5 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
              >
                {isLoading ? 'Carregando...' : 'Ativar minha conta'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
