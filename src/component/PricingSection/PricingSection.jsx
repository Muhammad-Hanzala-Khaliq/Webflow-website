import React from 'react'
import './PricingSection.css'
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";


const PricingSection = () => {
  return (
    <section className='pricing__section'  >
     <div className="container">
      <div className="pricing__section1">
        <h3 className='pricing__section__heading'>Pricing</h3>
        <p className='pricing__section__para'>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
        <div className="small__div">
        <h4 className='pricing__section__heading2'>Let’s Schedule a Meeting</h4>
        <button className='pricing__button'><a href="">Schedule Meeting</a></button>
        </div>
      </div>

      <div className="pricing__section2" >
         <h5 className='price__section__heading3'>Unlimited Services</h5>
         <p className='pricing__section__para2'>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
         <div className="two_col">
            <div className="one__col">
                <li><CiCircleCheck className='check_icon' /> Unlimited requests</li>
                <li><CiCircleCheck className='check_icon'  /> Unlimited requests</li>
                <li><CiCircleCheck className='check_icon' /> Unlimited requests</li>
            </div>
            <div className="second__col">
            <li><CiCircleCheck className='check_icon'  /> Unlimited requests</li>
                <li><CiCircleCheck className='check_icon'  /> Unlimited requests</li>
                <li><CiCircleCheck className='check_icon'  /> Unlimited requests</li>
            </div>
         </div>
         <div className="pricing__amount">
         <div className="amount__heading">
          <h2>$3,250 <span style={{color:"#8987A1", fontSize:"15px"}}>/ mo</span></h2>
          </div>
          <div className="amount__icon">
          <IoIosArrowRoundForward />
          </div>
         </div>
      </div>
     </div> 
    </section>
  )
}

export default PricingSection
