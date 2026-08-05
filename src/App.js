import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import PageMetadata from './Component/PageMetadata';
import Homee from './Component/Page1/Home/Home';
import Navbare from './Component/Page1/navbar/navbar';
import Aboute from './Component/Page2/Aboutus/About';
import Services from './Component/Page3/Services';
import Blog from './Component/Page5/Blog/Blog';
import Careers from './Component/Page6/Careers';
import Reachus from './Component/Page7/Reach';
import Portfolioo from './Component/Page4/Portfolio';
import Arrow from './Component/Page1/Arrow/Arrow';
import Whatsapp from './Component/Whatsapp/Whatsapp';
import Preloadere from './Component/Preloaderr/loader';
import Blogbe from './Component/Page5/Bloge/Blogb';
import Blogbe1 from './Component/Page5/Bloge1/Blogb1';
import Blogbe2 from './Component/Page5/Bloge2/Blogb2';
import Blogbe3 from './Component/Page5/Bloge3/Blogb3';
import SocialMediaMarketingServices from './Component/Page5/Bloge4/Social_Media_Marketing_Services';
import WebsiteDevelopmentCompany from './Component/Page5/Bloge5/website_development_company';
import OutlineForLongForm from './Component/Page5/Bloge6/outline_for_long_form';
import DigitalMarketingRspuram from './Component/Page5/Bloge7/Digital_Marketing_Rspuram';
import DigitalMarketingPeelamedu from './Component/Page5/Bloge8/Digital_Marketing_Peelamedu';
import DigitalMarketingAgency from './Component/Page5/Bloge9/Digital_Marketing_Agency';
import DigitalMarketingSaravanampatti from './Component/Page5/Bloge10/Digital_Marketing_Saravanampatti';
import DigitalMarketingPollachi from './Component/Page5/Bloge11/Digital_Marketing_Pollachi';
import BestBrandingCompany from './Component/Page5/Bloge12/Best_Branding_Company';
import SEOServicesCoimbatore from './Component/Page5/Bloge13/SEO_Services_Coimbatore';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className='app'>
      {loading ? (
        <Preloadere />
      ) : (
        <>
          <PageMetadata />
          <Navbare />

          <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/about" element={<Aboute />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolioo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/reach" element={<Reachus />} />
            <Route path="/blog/digital-marketing-a-boon-or-bane" element={<Blogbe />} />
            <Route path="/blog/digital-marketing-company-in-coimbatore" element={<Blogbe1 />} />
            <Route path="/blog/significance-of-digital-marketing" element={<Blogbe2 />} />
            <Route path="/blog/why-professional-advertising-is-still-essential-for-business-growth-in-2026" element={<Blogbe3 />} />
            <Route path="/blog/effective-social-media-marketing-services-in-coimbatore" element={<SocialMediaMarketingServices />} />
            <Route path="/blog/best-website-development-company-in-coimbatore" element={<WebsiteDevelopmentCompany />} />
            <Route path="/blog/digital-marketing-company-in-gandhipuram-coimbatore" element={<OutlineForLongForm/>} />
            <Route path="/blog/digital-marketing-company-in-rs-puram-coimbatore" element={<DigitalMarketingRspuram/>} />
            <Route path="/blog/digital-marketing-company-in-peelamedu-coimbatore" element={<DigitalMarketingPeelamedu/>} />
            <Route path="/blog/best-digital-marketing-agency-in-coimbatore" element={<DigitalMarketingAgency/>} />
            <Route path="/blog/digital-marketing-saravanampatti-in-coimbatore" element={<DigitalMarketingSaravanampatti/>} />
            <Route path="/blog/digital-marketing-pollachi-in-coimbatore" element={<DigitalMarketingPollachi/>} />
            <Route path="/blog/best-branding-company-in-coimbatore" element={<BestBrandingCompany/>} />
            <Route path="/blog/best-seo-services-in-coimbatore" element={<SEOServicesCoimbatore/>} />


          </Routes>
          <Arrow />
          <Whatsapp />



        </>
      )}



    </div>
  );
}

export default App;
