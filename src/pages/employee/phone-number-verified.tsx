import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { PageHeader } from '../../components/PageHeader'

export default function CompanyPhoneNumberVerified(): JSX.Element | null {
  const router = useRouter()
  const { employee_id: employeeId } = router.query

  if (employeeId == null) {
    return null
  }

  return (
    <>
      <NextSeo title="Primeiro acesso" noindex />
      <PageHeader
        title="Bem-vindo(a)!"
        description="Está tudo pronto com a sua conta! Agora é só entrar e começar a usar o sistema."
      />
    </>
  )
}
