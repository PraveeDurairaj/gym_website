import HomeHeader from './components/HomeHeader';
import HeroBanner from './components/HeroBanner';
import Amenities from './components/Amenities';
import About from './components/About';
import Services from './components/Services';
import PricingPlans from './components/PricingPlans';
import Trainers from './components/Trainers';
import Faq from './components/Faq';
import Reviews from './components/Reviews';
import Cta from './components/Cta';
import { staticContent } from './helper/getStaticData';



function App() {
  const { bannerData, amenitiesData, aboutData, trainersData, pricingData,
    faqData, ctaData, homeHeaderData, servicesData, reviewsData, ctaTwoData } = staticContent;

  return (
    <>
      <HomeHeader
        content={homeHeaderData}
      />
      <HeroBanner
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
      <Services
        containerClass={'section_padding_top section_padding_bottom'}
        content={servicesData}
      />
      <Cta
        content={ctaData}
        containerClass={'section_padding_top'}
      />
      <Trainers
        containerClass={'section_padding_bottom section_padding_top'}
        content={trainersData}
      />
      <PricingPlans
        containerClass={'section_padding_top section_padding_bottom'}
        content={pricingData}
      />
      <Reviews
        containerClass={'section_padding_top'}
        content={reviewsData}
      />
      <Cta
        content={ctaTwoData}
        containerClass={'section_padding_top'}
      />
      <Faq
        containerClass={'section_padding_top section_padding_bottom'}
        content={faqData}
      />


    </>
  )
}

export default App
