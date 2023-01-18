import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

import { SignUpFlowWrapper } from '../components/SignUpFlowWrapper'
import { useToast } from '../contexts/ToastContext'
import { resendEmailVerification } from '../services/signUpService'

export default function VerifyYourEmail(): JSX.Element | null {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const { price_id: priceId, email } = router.query

  if (priceId == null || email == null) {
    return null
  }

  const handleResendEmailVerification = async (): Promise<void> => {
    setIsLoading(true)

    try {
      await resendEmailVerification({
        email: email as string,
        price_id: priceId as string,
      })

      toast('success', {
        title: 'E-mail reenviado',
        message: 'Verifique sua caixa de entrada.',
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
      <NextSeo title="Verifique seu e-mail" noindex />

      <SignUpFlowWrapper>
        <>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quase lá...
          </h2>
          <p className="mt-4 text-lg text-gray-500 sm:mt-3">
            Te enviamos um e-mail de confirmação para finalizar o seu cadastro.
          </p>
          <p className="mt-4 text-lg text-gray-500 sm:mt-3">
            Caso não tenha recebido, verifique sua caixa de spam ou então clique
            no botão abaixo para reenviar o e-mail.
          </p>
          <button
            disabled={isLoading}
            type="button"
            onClick={handleResendEmailVerification}
            className="mt-9 inline-flex items-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
          >
            Reenviar e-mail
          </button>
        </>
      </SignUpFlowWrapper>
    </>
  )
}
