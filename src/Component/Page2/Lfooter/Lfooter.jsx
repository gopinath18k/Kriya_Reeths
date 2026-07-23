import fi1 from '../../../images/insta.webp'
import fi2 from '../../../images/fb.webp'
import fi3 from '../../../images/linkde.webp'
import fi4 from '../../../images/pmntrest.webp'
import fi5 from '../../../images/youtube.webp'
import call from '../../../images/wcall.webp'
import mail from '../../../images/wmail.webp'
import './Lfooter.css'
import bg1 from '../../../images/bg-text1.svg'
import bg2 from '../../../images/bg-text2.svg'
import { Link } from 'react-router-dom';


const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

const Footerel = () => {
    const mobile ='6381023935'
    return (
        <div className=' container-fluid footer-container'>
            <div className="row footer ">
            <div className='bg1-cont'>
                        <img className='bg-txt11' src={bg1} alt="" />
                    </div>
                    <div className='bg2-cont' >
            <img className='bg-txt2' src={bg2} alt="" />
          </div>
                <div className="col  fot-sec1" >
                    <div className='fot-link-header'>
                <Link className='link1 ' to='/' onClick={() => scrollToSection('home')}><li>Home</li></Link>   
              <Link className='link1 'onClick={() => scrollToSection('/about')} ><li>About us</li></Link>
              <Link className='link1 ' to='/services' onClick={() => scrollToSection('#home')} ><li>Services</li></Link>
              <Link className='link1 ' to='/portfolio' onClick={() => scrollToSection('home')}><li>Portfolio</li></Link>
              <Link className='link1 ' to='/blog' onClick={() => scrollToSection('home')} ><li>Blog</li></Link>
              <Link className='link1 ' to='/careers' onClick={() => scrollToSection('home')}><li>Careers</li></Link>
              <Link className='link1 ' to='/reach' onClick={() => scrollToSection('home')}><li>Reach Us</li></Link>
                    </div>
                    <div><p className='fot-para-main'>Let's create digital magic together! Driving results through creative digital solutions. Contact us to start your digital journey.</p></div>
                    <div className='f-icon'><a href="https://www.instagram.com/teamkriya/"><img src={fi1} alt="" /></a><a href="https://www.facebook.com/p/Kriya-Reeths-100092974173622/"><img src={fi2} alt="" /></a><a href="https://in.linkedin.com/company/kriya-reeths"><img src={fi3} alt="" /></a><a href="https://in.pinterest.com/kriyareeths/"><img src={fi4} alt="" /></a><a href="https://www.youtube.com/results?search_query=kriyareeths"><img src={fi5} alt="" /></a></div>
                    
                </div>
                <div className="col order-sm-2" >
                   <div className='contact-container fot-sec2 '>
                   <h2 className='contac-us'>Contact Us</h2>
                   <div className='call-main' ><img className='call' src={call} alt="" /><div><a href=''>(+91) 73059 79061  <span className='light-stick'>|</span></a> <a href="">(+91) 73059 79062</a></div></div>
                   <div className='mail-main' ><img className='mail' src={mail} alt="" /><a href="">info@kriyareeths.com</a></div>
                   <div className='f-icon-mb'><a href="https://www.instagram.com/teamkriya/"><img src={fi1} alt="" /></a><a href="https://www.facebook.com/p/Kriya-Reeths-100092974173622/"><img src={fi2} alt="" /></a><a href="https://in.linkedin.com/company/kriya-reeths"><img src={fi3} alt="" /></a><a href="https://in.pinterest.com/kriyareeths/"><img src={fi4} alt="" /></a><a href="https://www.youtube.com/results?search_query=kriyareeths"><img src={fi5} alt="" /></a></div>
                   </div>
                </div>
            </div>
            <div className='copy-rightss1' ><p>Copyright © 2024 -  All rights reserved by <span>Kriya & Reeths</span></p></div>
        </div>
    )
}

export default Footerel