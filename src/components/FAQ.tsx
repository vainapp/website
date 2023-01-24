import { Link } from './Link'

interface FAQProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const FAQ: React.FC<FAQProps> = ({ faqs }: FAQProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:py-40 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Principais perguntas
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Não consegue encontrar a resposta que está procurando? Entre em
              contato com o nosso{' '}
              <Link
                href="/contact"
                className="font-semibold text-orange-500 hover:text-orange-400"
              >
                time de suporte
              </Link>
              .
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
