import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Route, Routes } from 'react-router-dom';
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
        <Preloadere/>
      ) : (
        <>
        
          <Navbare />
          
          <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/about" element={<Aboute />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolioo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/reach" element={<Reachus />} />
            <Route path="/blog-" element={<Blogbe/>}/>
            <Route path="/blog-1" element={<Blogbe1/>}/>
            <Route path="/blog-2" element={<Blogbe2/>}/>
            <Route path="/Why-Professional-Advertising-Is-Still-Essential-for-Business-Growth-in-2026" element={<Blogbe3/>}/>
           
            
          </Routes>
          <Arrow />
          <Whatsapp />
         
        
          
        </>
      )}

      
     
    </div>
  );
}

export default App;
