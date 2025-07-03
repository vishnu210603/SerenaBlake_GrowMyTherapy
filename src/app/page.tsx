"use client"
import React from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { MentalHealthQuiz } from './components/MentalHealthQuiz'
import { ReviewsSection } from './components/ReviewsSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { ContactSection } from './components/ContactSection'

const page = () => {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <MentalHealthQuiz/>
      <ReviewsSection/>
      <ContactSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default page
