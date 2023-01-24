import { NextSeo } from 'next-seo'

import { FAQ } from '../../components/FAQ'
import { PageHeader } from '../../components/PageHeader'

const faqs = [
  {
    question: 'Por que devo contratar a Vain?',
    answer:
      'Se está buscando uma plataformar que irá facilitar o controle e organização de seu estabelecimento, chegou ao lugar certo! A Vain foi criada com o intuito de ajudar seu salão com atividades que muitas vezes podem ser empecilhos diários.',
  },
  {
    question: 'Quanto custa um plano?',
    answer:
      'A Vain disponibiliza planos que variam de X (menor valor) até Y (maior valor), cada plano contém seu diferencial, caso queira saber mais, basta selecionar o plano que iremos mostrar a descrição e suas funcionalidades.',
  },
  {
    question: 'Quais as formas de pagamento aceitas?',
    answer:
      'Para ativar sua assinatura e usar a Vain, aceitamos apenas cartões de crédito.',
  },
  {
    question: 'Meus clientes podem realizar o pagamento pelo app?',
    answer:
      'Atualmente não aceitamos pagamentos pelo app, mas estamos trabalhando para que isso seja possível em breve.',
  },
]

export default function FAQCompanies(): JSX.Element {
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
