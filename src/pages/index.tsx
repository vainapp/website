import { FloatingBottomBanner } from '../components/FloatingBottomBanner'
import { CTAFreeTrial } from '../components/CTAFreeTrial'
import { FeatureList } from '../components/FeatureList'
import { Hero } from '../components/Hero'
import { HighlightedFeatures } from '../components/HighlightedFeatures'
import { Stats } from '../components/Stats'
import { CTANewsletter } from '../components/CTANewsletter'
import { FAQ } from '../components/FAQ'
import { Pricing } from '../components/Pricing'
import { useEffect } from 'react'
import { useScrollToAnchor } from '../contexts/ScrollToAnchorContext'
import { scroller } from 'react-scroll'
import { SCROLL_SETTINGS } from '../constants/scroll'

export default function Home(): JSX.Element {
  const { setElementName, elementName } = useScrollToAnchor()

  useEffect(() => {
    if (elementName != null) {
      scroller.scrollTo(elementName, SCROLL_SETTINGS)
      setElementName(null)
    }
  }, [elementName, setElementName])

  return (
    <>
      <Hero />
      <HighlightedFeatures />
      <FeatureList />
      <Stats />
      <CTAFreeTrial />
      <Pricing />
      <FAQ />
      <CTANewsletter />
      <FloatingBottomBanner />
    </>
  )
}
