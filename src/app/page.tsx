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
import { useState } from 'react'
const page = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <Navigation/>
     <HeroSection
  onBookClick={() => {
    setShowContact((prev) => {
      const newState = !prev;

      if (!newState) return newState; // If hiding, no need to scroll

      // Scroll only when opening
      setTimeout(() => {
        const form = document.getElementById("contact");
        form?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return newState;
    });
  }}
/>

{showContact && <ContactSection />}


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
