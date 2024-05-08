import React from 'react'
import './FAQ.css'
// import img from '../../assets/necklase.png'
import Acoordian from '../Accordian/Accordian'

const FAQ = () => {
  return (
    <section className='faq__section'>
    <div className='container'>
 
     <div className="faq__heading">
       <h2>Frequently Asked Questions</h2>
     </div>

     <div className="faq__accordian">
        <Acoordian/>
     </div>
     </div>

</section>
  )
}

export default FAQ
