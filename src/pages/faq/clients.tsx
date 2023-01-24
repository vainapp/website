import { NextSeo } from 'next-seo'

import { FAQ } from '../../components/FAQ'
import { PageHeader } from '../../components/PageHeader'

const faqs = [
  {
    question: 'Quanto custa para utilizar a Vain?',
    answer:
      'A Vain é uma plataforma gratuita para pessoas que buscam agendar um serviço estético de maneira simples, ágil e eficaz.',
  },
  {
    question: 'Como encontro um estabelecimento?',
    answer:
      'Com base em filtros, é possível você encontrar um estabelecimento que preste os serviços que busca.',
  },
  {
    question: 'Como agendo um serviço?',
    answer:
      'Após escolher o estabelecimento, basta apenas selecionar o serviço desejado, com o profissional a sua escolha, tudo isso de maneira simples.',
  },
]

export default function FAQClients(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Perguntas frequentes para clientes"
        description="Aqui você encontra as respostas para as perguntas mais frequentes."
      />

      <PageHeader
        title="Perguntas frequentes para clientes"
        description="Aqui você encontra as respostas para as perguntas mais frequentes."
      />

      <FAQ faqs={faqs} />
    </>
  )
}
