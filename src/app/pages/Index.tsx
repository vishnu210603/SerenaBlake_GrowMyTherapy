
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Chatbot } from '../components/Chatbot';
import { MentalHealthQuiz } from '../components/MentalHealthQuiz';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="hero-gradient">
          <HeroSection />
        </div>
        <div className="bg-gradient-to-br from-background to-sage-50">
          <AboutSection />
        </div>
        <div className="bg-gradient-to-br from-sage-50 to-warm-50">
          <ServicesSection />
        </div>
        <ReviewsSection />
        <div className="bg-gradient-to-br from-warm-50 to-background">
          <MentalHealthQuiz />
        </div>
        <div className="bg-gradient-to-br from-background to-sage-50">
          <FAQSection />
        </div>
        <div className="bg-gradient-to-br from-sage-50 to-warm-50">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
