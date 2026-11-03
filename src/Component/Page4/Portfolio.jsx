import { useEffect } from 'react';
import HorizontalSlider from './Carouselee/examplee'
import "../Page4/Portfolio.css"
import bg1 from '../../images/bg-text1.svg'

const Portfolioo = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='container-fluid navmain'>
         <div className='ab-section1'>
          <h1 className='head2'>Portfolio</h1>

          <p className='head3-p'>Explore our digital marketing portfolio in Coimbatore, showcasing our expertise in creative strategy, branding, advertising, SEO, performance marketing, and visual content production. Each project reflects our commitment to developing tailored marketing solutions that strengthen brand identity, improve online visibility, and support our clients’ business goals.</p>
        </div>

       
        <div className="ab-section4">
          <div className='bg1-cont'>
            <img className='bg-txt11' src={bg1} alt="seo services in coimbatore" />
          </div>
          
          <div className='creativ-head'>
            <h2>Our Creative Portfolio</h2>
            <p>Discover the creativity and strategy behind our work across digital platforms and visual media. From impactful brand identities and targeted marketing campaigns to engaging photography, videography, and event experiences, our portfolio highlights the diverse ways we help businesses build their presence and connect with their audiences.</p>
          </div>
          <div className='tslider'>
          <HorizontalSlider/>
          
          </div>
        </div>
    </div>
  )
}

export default Portfolioo