import React from 'react'
import './ContactSection.css'
import { useForm, ValidationError } from '@formspree/react';


const ContactSection = () => {
  const [state, handleSubmit] = useForm("mpzvbyob");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='section-contact' id="contact" >
       <div className="container" data-aos="fade-up"
    data-aos-duration="1000">
      
        <h2 className="section-contact-heading">Let’s Get in Touch
                  </h2>
    </div>

    <div className="container" data-aos="fade-up"
    data-aos-duration="1000">
    <div className='registration-form'>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="example@email.com" autoComplete='off' required/>
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                </div>
                <div className="mb-3">
                <label htmlFor="subject">Name</label>
                <input type="text" name="subject" id="subject" placeholder="full name" autoComplete='off' required/>
                </div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="write your message...." autoComplete='off' required></textarea>
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

         
                <button type="submit" className="contact-button"><a href="">Get in Touch</a></button>
              
        </form>
        </div>
    </div>
    </div>
  )
}

export default ContactSection
