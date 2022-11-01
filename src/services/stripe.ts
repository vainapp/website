import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'front-end',
  },
})

export default stripe
