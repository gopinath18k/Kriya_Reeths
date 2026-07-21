import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation to get the current path
import logo from '../../../images/Logo.png';
import soc1 from '../../../images/fb.png';
import soc2 from '../../../images/insta.png';
import soc3 from '../../../images/twitter.png';
import './navbar.css';

const Navbare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
      // document.body.style.background = '#000';
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
      // document.body.style.background = 'white';
    };
  }, [isOpen]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className='container-fluid nav-main' id='' ref={navRef}>
      <div className="nav-container">
        <div className='nav-main-cont'>
          <div>
            <Link to='/'><img className='nav-logo' src={logo} alt="Logo" /></Link>
          </div>
          <div className='navigation-cont'>
            <ul>
              <Link className={`link ${isActive('/')}`} to='/' onClick={closeMenu}><li>Home</li></Link>
              <Link className={`link ${isActive('/about')}`} to='/about' onClick={closeMenu}><li>About us</li></Link>
              <Link className={`link ${isActive('/services')}`} to='/services' onClick={closeMenu}><li>Services</li></Link>
              <Link className={`link ${isActive('/portfolio')}`} to='/portfolio' onClick={closeMenu}><li>Portfolio</li></Link>
              <Link className={`link ${isActive('/blog')}`} to='/blog' onClick={closeMenu}><li>Blog</li></Link>
              <Link className={`link ${isActive('/careers')}`} to='/careers' onClick={closeMenu}><li>Careers</li></Link>
              
              <Link className={`link ${isActive('/reach')}`} to='/reach' onClick={closeMenu}><div className='cont-btn'>Reach Us</div></Link>
            </ul>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? '✖' : '☰'}
          </div>

          <div className={`navigation-cont-mob ${isOpen ? 'open' : ''}`}>
            <ul>
              <Link className={`link-2 ${isActive('/')}`} to='/' onClick={closeMenu}><li>Home</li></Link>
              <Link className={`link-2 ${isActive('/about')}`} to='/about' onClick={closeMenu}><li>About us</li></Link>
              <Link className={`link-2 ${isActive('/services')}`} to='/services' onClick={closeMenu}><li>Services</li></Link>
              <Link className={`link-2 ${isActive('/portfolio')}`} to='/portfolio' onClick={closeMenu}><li>Portfolio</li></Link>
              <Link className={`link-2 ${isActive('/blog')}`} to='/blog' onClick={closeMenu}><li>Blog</li></Link>
              <Link className={`link-2 ${isActive('/careers')}`} to='/careers' onClick={closeMenu}><li>Careers</li></Link>
              <Link className={`link-2 ${isActive('/reach')}`} to='/reach' onClick={closeMenu}><li>Reach Us</li></Link>
            </ul>
            
            <div className='social-ic mt-5'>
              <a href='https://www.facebook.com/p/Kriya-Reeths-100092974173622/'><img src={soc1} alt="Facebook" /></a>
              <a href='https://www.instagram.com/teamkriya/'><img src={soc2} alt="Instagram" /></a>
              <a href='https://x.com/i/flow/login?redirect_after_login=%2Fkriyareeths'><img src={soc3} alt="Twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbare;
