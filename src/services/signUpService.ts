import { httpClient } from './httpClient'

interface SignUpRequestBody {
  email: string
  password: string
  password_confirmation: string
  company_name: string
  phone_number: string
  name: string
  price_id: string
}

interface PreSignUpRequestBody {
  email: string
  price_id: string
}

async function signUp(
  data: SignUpRequestBody
): Promise<{ company_id: string; employee_id: string }> {
  return await httpClient.post('/companies', data).then(({ data }) => data)
}

async function preSignUp(data: PreSignUpRequestBody): Promise<{
  verified?: boolean
  checkout_url?: string | null
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
} | void> {
  return await httpClient
    .post('/companies/pre-signup', data)
    .then(({ data }) => data)
}

export { signUp, preSignUp }
