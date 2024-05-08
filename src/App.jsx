import React from 'react'
import Navbar from './component/Navbar/Navbar'
import HeroSection from './component/HeroSection/HeroSection'
import DoingSection from './component/What to Section/DoingSection'
import CheckSection from './component/CheckSection/CheckSection'
import PricingSection from './component/PricingSection/PricingSection'
import FAQ from './component/FAQ Section/FAQ'
import ContactSection from './component/ContactSection/ContactSection'
import FooterSection from './component/Footer/FooterSection'

const App = () => {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <DoingSection/> 
     <CheckSection/>
     <PricingSection/>
     <FAQ/>
     <ContactSection/>
     <FooterSection/>
    </>
  )
}

export default App

