import { httpClientSide } from './httpClient'

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

interface ResendEmailVerificationRequestBody {
  email: string
  price_id: string
}

interface ResendSMSCodeRequestBody {
  employee_id: string
}

interface VerifyPhoneNumberRequestBody {
  employee_id: string
  code: string
}

interface CreateCheckoutSessionRequestBody {
  price_id: string
  employee_id: string
}

async function signUp(
  data: SignUpRequestBody
): Promise<{ company_id: string; employee_id: string }> {
  return await httpClientSide.post('/sign-up', data).then(({ data }) => data)
}

async function preSignUp(data: PreSignUpRequestBody): Promise<{
  verified?: boolean
  checkout_url?: string | null
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
} | void> {
  return await httpClientSide
    .post('/pre-sign-up', data)
    .then(({ data }) => data)
}

async function resendEmailVerification(
  data: ResendEmailVerificationRequestBody
): Promise<any> {
  return await httpClientSide.post('/resend-email', data)
}

async function resendSMSCode(data: ResendSMSCodeRequestBody): Promise<any> {
  return await httpClientSide.post('/resend-sms', data)
}

async function verifyPhoneNumber(
  data: VerifyPhoneNumberRequestBody
): Promise<any> {
  return await httpClientSide.post('/verify-phone-number', data)
}

async function createCheckoutSession(
  data: CreateCheckoutSessionRequestBody
): Promise<{ checkout_url: string }> {
  return await httpClientSide
    .post('/create-checkout-session', data)
    .then(({ data }) => data)
}

export {
  signUp,
  preSignUp,
  resendEmailVerification,
  resendSMSCode,
  verifyPhoneNumber,
  createCheckoutSession,
}
