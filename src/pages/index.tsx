import { useEffect } from 'react'
import { scroller } from 'react-scroll'

import { CTAFreeTrial } from '../components/CTAFreeTrial'
import { CTANewsletter } from '../components/CTANewsletter'
import { FAQHeader } from '../components/FAQHeader'
import { FeatureList } from '../components/FeatureList'
import { Hero } from '../components/Hero'
import { HighlightedFeatures } from '../components/HighlightedFeatures'
import { Pricing } from '../components/Pricing'
import { Stats } from '../components/Stats'
import { SCROLL_SETTINGS } from '../constants/scroll'
import { useScrollToAnchor } from '../contexts/ScrollToAnchorContext'

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
      <FAQHeader />
      <CTANewsletter />
    </>
  )
}
