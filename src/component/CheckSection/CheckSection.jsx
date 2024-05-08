import React from 'react'
import './CheckSection.css'
import img from '../../assets/checksection.png'
import img2 from '../../assets/sectionworkimg.png'
import img3 from '../../assets/check__section.png'
const CheckSection = () => {
  return (
    <>
      <section className='check__section' id="check">
      <div className="container" >
       <img src={img} alt="" className='check-section__img1' />
        <h4 className='check__section__heading'>Check Our Work</h4>
        <p className='check__section__para'>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
        <div className="background__material" ></div>
        <img src={img2} alt="" className='check-section__img2' />
       </div>
 
      </section>
    </>
  )
}

export default CheckSection
