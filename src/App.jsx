// helpers
import { staticContent } from './helper/getStaticData';
import { FormProvider } from './helper/FormContent';
// components
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
import Footer from './components/Footer';


function App() {
  const { bannerData, amenitiesData, aboutData, trainersData, pricingData } = staticContent;
  const { faqData, ctaData, homeHeaderData, servicesData, reviewsData, ctaTwoData, footerData } = staticContent

  return (
    <FormProvider>
      <HomeHeader
        content={homeHeaderData}
      />
      <HeroBanner
        content={bannerData}
        containerClass={'section_padding_bottom'}
      />
      <About
        containerClass={'section_padding_top section_padding_bottom'}
        content={aboutData}
      />
      <div className='service_and_amenities_wrapper'>
        <Amenities
          containerClass={'section_padding_top'}
          content={amenitiesData}
        />
        <Services
          containerClass={'section_padding_top section_padding_bottom'}
          content={servicesData}
        />
      </div>
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
      <Footer
        containerClass={'section_padding_top section_padding_bottom'}
        content={footerData}
      />
    </FormProvider>
  )
}

export default App
