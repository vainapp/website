import { CTAFreeTrial } from '../components/CTAFreeTrial'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Features />
      <CTAFreeTrial />
      <Pricing />
    </>
  )
}
