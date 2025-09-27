import HeroBanner from './components/HeroBanner';
import Amenities from './components/Amenities';
import About from './components/About';
import PricingPlans from './components/PricingPlans';
import Trainers from './components/Trainers';
import Faq from './components/Faq';
import { staticContent } from './helper/getStaticData';



function App() {
  const { bannerData, amenitiesData, aboutData, trainersData, pricingData, faqData } = staticContent;

  return (
    <>
      <HeroBanner
        containerClass={'section_padding_top'}
        content={bannerData}
      />
      <Amenities
        containerClass={'section_margin_top section_margin_bottom'}
        content={amenitiesData}
      />
      <About
        containerClass={'section_padding_top section_padding_bottom'}
        content={aboutData}
      />
      <Trainers
        containerClass={'section_padding_bottom'}
        content={trainersData}
      />
      <PricingPlans
        containerClass={'section_padding_top section_padding_bottom'}
        content={pricingData}
      />
      <Faq
        containerClass={'section_padding_top section_padding_bottom'}
        content={faqData}
      />


    </>
  )
}

export default App
