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

  const apiResponse = await httpServerSide.post('/companies', request.body)

  response.status(apiResponse.status).json(apiResponse.data)
}
