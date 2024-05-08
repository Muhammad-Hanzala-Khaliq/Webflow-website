import React, { useState }from "react";
import { ImCross } from "react-icons/im";
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/Logo nav.png'


const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <>
      <header>
        <div className="container row">
        <button className="nav-toggle" aria-label="open navigation" onClick={toggleNav}>
                <span className="hamburger"></span>
            </button>

          
                <a className="logo">
                    <img src={logo} alt="" />
                </a>
                {/* <div className={icons ? "menu-link mobile-menu-link" : "menu-link"}> */}
                <nav className={isNavVisible ? 'nav nav--visible' : 'nav'} >
                <ul className='primary__list'>
                    <li className='nav__list'><Link className='nav__link' to="/hero" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} onClick={closeNav}>Home</Link></li>
                    <li className='nav__list'><Link className='nav__link' to="doing" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} onClick={closeNav}>About</Link></li>
                    <li className='nav__list'><Link className='nav__link' to="contact" 
      spy={true} 
      smooth={true} 
      offset={100} 
      duration={500} onClick={closeNav}>Contact</Link></li>
                    <li className='nav__list'><Link className='nav__link' to="check" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} onClick={closeNav}>Services</Link></li>
                </ul>
                <ul className='secondary__list'>
                    <li className='nav__list'><a className='nav__link' href="">Sign in</a></li>
                    <li className='nav__list'><a className='nav__link__button' href="">Sign in</a></li>
                </ul>
                {/* </div> */}
                
            </nav>
     
      
        </div>
   
      </header>
    </>
  )
}

export default Navbar
