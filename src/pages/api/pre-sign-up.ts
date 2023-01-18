import { isAxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

import { httpServerSide } from '../../services/httpClient'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<any> {
  if (request.method !== 'POST') {
    response.status(405).end()
    return
  }

  try {
    const apiResponse = await httpServerSide.post(
      '/companies/pre-signup',
      request.body
    )

    response.status(apiResponse.status).json(apiResponse.data)
  } catch (error) {
    if (isAxiosError(error)) {
      response.status(error.response?.status ?? 500).json(error.response?.data)
    }

    response.status(500).json({ message: 'Internal server error' })
  }
}
