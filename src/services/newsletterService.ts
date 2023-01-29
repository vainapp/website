import { httpClientSide } from './httpClient'

interface SignUpRequestBody {
  email: string
}

async function signUpToNewsletter(data: SignUpRequestBody): Promise<any> {
  return await httpClientSide.post('/newsletter', data).then(({ data }) => data)
}

export { signUpToNewsletter }
