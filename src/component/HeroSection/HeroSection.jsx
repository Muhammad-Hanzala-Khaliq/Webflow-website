import React from 'react'
import './HeroSection.css'
import img from '../../assets/Mask group.png'

const HeroSection = () => {
  return (
    <>
    <section className='hero__section' id="hero">
      <div className="container">
     <div className='banner-card'>
<img src={img} alt="" />
<div className="banner-text">
  <h1>Awesome UI Dark Template for Webflow Agency</h1>
  <button className='btn'><a className='hero__btn' href="">Get in Touch</a></button>
</div>
     </div>
       </div>
 
      </section>
    </>
  )
}

export default HeroSection
