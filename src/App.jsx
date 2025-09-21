import { useState } from 'react';
import { staticContent } from './helper/getStaticData';
import HeroBanner from './compnents/HeroBanner';
import Amenites from './compnents/Amenites';
import About from './compnents/About';



function App() {
  const { bannerData, amenitesData, aboutData } = staticContent;

  return (
    <>
      <HeroBanner
        containerClass={'section_padding_top'}
        content={bannerData}
      />
      <Amenites
        containerClass={'section_margin_top section_margin_bottom'}
        content={amenitesData}
      />
      <About
        containerClass={'section_padding_top section_padding_bottom'}
        content={aboutData}
      />

    </>
  )
}

export default App
