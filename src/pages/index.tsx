import { FloatingBottomBanner } from '../components/FloatingBottomBanner'
import { CTAFreeTrial } from '../components/CTAFreeTrial'
import { FeatureList } from '../components/FeatureList'
import { Hero } from '../components/Hero'
import { HighlightedFeatures } from '../components/HighlightedFeatures'
import { Stats } from '../components/Stats'
import { CTANewsletter } from '../components/CTANewsletter'
import { FAQ } from '../components/FAQ'

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <HighlightedFeatures />
      <FeatureList />
      <Stats />
      <CTAFreeTrial />
      <FAQ />
      <CTANewsletter />
      <FloatingBottomBanner />
    </>
  )
}
