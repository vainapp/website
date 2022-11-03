import { GetStaticProps } from 'next'

import Stripe from 'stripe'
import stripe from '../services/stripe'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Plans, { PlansProps } from '../components/Plans'
import Newsletter from '../components/Newsletter'

interface HomeProps extends PlansProps {}

export default function Home({ plans }: HomeProps) {
  return (
    <>
      <Hero />
      <Features />
      <Plans plans={plans} />
      <Newsletter />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prices = await stripe.prices.list({
    expand: ['data.product'],
  })

  const plans = prices.data.map((price) => {
    const product = price.product as Stripe.Product

    return {
      priceId: price.id,
      amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      product: {
        name: product.name,
        description: product.description,
        metadata: product.metadata,
      },
      interval: price.recurring.interval,
    }
  })

  return {
    props: {
      plans: plans.sort((a, b) => {
        if (a.amount > b.amount) {
          return 1
        }

        return -1
      }),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
