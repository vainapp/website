import client from '@sendgrid/client'
import { ClientRequest } from '@sendgrid/client/src/request'
import * as Sentry from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'

client.setApiKey(process.env.SENDGRID_API_KEY as string)

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<any> {
  if (request.method !== 'POST') {
    response.status(405).end()
    return
  }

  const { email } = request.body

  if (email == null) {
    response.status(400).json({ message: 'Missing email' })
    return
  }

  const requestBody = {
    list_ids: ['2270cd4c-ddf4-4905-ac83-4b63ea6edcc5'],
    contacts: [
      {
        email,
      },
    ],
  }

  const requestData: ClientRequest = {
    url: '/v3/marketing/contacts',
    method: 'PUT',
    body: requestBody,
  }

  try {
    const [sendgridResponse] = await client.request(requestData)

    response.status(sendgridResponse.statusCode).json(sendgridResponse.body)
  } catch (error: any) {
    Sentry.captureException(error)

    response.status(500).json({
      message:
        'Não foi possível adicionar seu e-mail à nossa lista. Por favor, tente novamente mais tarde.',
    })
  }
}
