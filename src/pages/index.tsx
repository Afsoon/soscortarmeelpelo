import React, { useState } from 'react'
import Footer from '../components/Footer'
import CTAImage from '../components/CTAImage'
import HowWorks from '../components/HowWorks'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowWorks />
      <CTAImage />
      <Footer />
    </>
  )
}
export default Home
