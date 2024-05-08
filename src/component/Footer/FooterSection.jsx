import React from 'react'
import './FooterSection.css';
import img from '../../assets/Logo nav.png'
import { IoIosHeartEmpty } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <>
<footer className='footer__section'>
<div className='footer__background'></div>
    <div className='container'>
        <div className="footer_col">
            <div className="footer__first__col" >
                <div className="footer_logo">
                    <img src={img} alt="" />
                </div>
                <div className="footer__para">
                    <p>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</p>
                </div>
                <div className="footer__para2">
                    <p><IoIosHeartEmpty style={{fontSize:'1.5rem'}} />&nbsp;&nbsp; &nbsp;Made with love powered by inkyy.com</p>
                </div>
            </div>

            <div className="footer__sec__col" >
            <div className="first__footer__flex" >
            <ul className='primary__list'>
                    <li className='nav__list'><a className='nav__link' href="">Home</a></li>
                    <li className='nav__list'><a className='nav__link' href="">About</a></li>
                    <li className='nav__list'><a className='nav__link' href="">How It Works</a></li>
                    <li className='nav__list'><a className='nav__link' href="">Services</a></li>
                </ul>
                </div>
                <div className="icons">
                    <div className="insta">
                    <LuInstagram style={{fontSize:'1.8rem'}} />
                    </div>
                    <div className="insta">
                    <FaLinkedin style={{fontSize:'1.8rem'}} />
                    </div>
                    <div className="insta">
                    <IoLogoTiktok style={{fontSize:'1.8rem'}} />
                    </div>
                    <div className="insta">
                    <FaReact style={{fontSize:'1.8rem'}} />
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>


    </>
  )
}

export default FooterSection
