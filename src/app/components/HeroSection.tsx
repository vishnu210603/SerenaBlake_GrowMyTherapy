// "use client"

// import { Button } from '@/app/components/ui/button';
// import { useState, useEffect } from 'react';
// import { Heart, Shield, Users, Star } from 'lucide-react';

// export const HeroSection = () => {
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typeSpeed, setTypeSpeed] = useState(150);

//   const phrases = [
//     'Real-Life Challenges',
//     'Anxiety & Stress',
//     'Relationship Issues',
//     'Trauma Recovery',
//     'Personal Growth',
//     'Life Transitions',
//   ];

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentPhrase = phrases[currentIndex];

//       if (isDeleting) {
//         setCurrentText((prev) => prev.substring(0, prev.length - 1));
//         setTypeSpeed(75);
//       } else {
//         setCurrentText((prev) => currentPhrase.substring(0, prev.length + 1));
//         setTypeSpeed(150);
//       }

//       if (!isDeleting && currentText === currentPhrase) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && currentText === '') {
//         setIsDeleting(false);
//         setCurrentIndex((prev) => (prev + 1) % phrases.length);
//       }
//     };

//     const timer = setTimeout(handleTyping, typeSpeed);
//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, currentIndex, typeSpeed]);

//   const scrollToContact = () => {
//     const element = document.getElementById('contact');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToQuiz = () => {
//     const element = document.getElementById('quiz');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=1080&q=80"
//           alt="Peaceful nature scene"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-white/60 backdrop-blur-"></div>
//       </div>

//       {/* Wavy animated overlay */}
//       <div className="absolute inset-0 opacity-20">
//         <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
//           <path
//             d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z"
//             fill="url(#wave1)"
//             className="animate-wave-1"
//           />
//           <path
//             d="M0,400 Q250,350 500,400 T1000,400 L1000,1000 L0,1000 Z"
//             fill="url(#wave2)"
//             className="animate-wave-2"
//           />
//           <path
//             d="M0,500 Q250,450 500,500 T1000,500 L1000,1000 L0,1000 Z"
//             fill="url(#wave3)"
//             className="animate-wave-3"
//           />
//           <defs>
//             <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#A5C0B2" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#E1ECE6" stopOpacity="0.05" />
//             </linearGradient>
//             <linearGradient id="wave2" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#C9D9CF" stopOpacity="0.3" />
//               <stop offset="100%" stopColor="#F2F8F5" stopOpacity="0.1" />
//             </linearGradient>
//             <linearGradient id="wave3" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#DDE6E2" stopOpacity="0.15" />
//               <stop offset="100%" stopColor="#EEF3F1" stopOpacity="0.05" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Floating elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-[#43705e]/20 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#A5C0B2]/20 rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#43705E]/10 rounded-full blur-2xl animate-pulse-slow"></div>
//         <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-[#A5C0B2]/15 rounded-full blur-3xl animate-float-reverse"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="max-w-6xl mx-auto animate-fade-in">
//           <div className="mb-6">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-black leading-tight mb-2 sm:mb-4">
//               Compassionate Therapy for
//             </h1>
//             <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-[#43705e] leading-tight">
//               <span className="inline-block min-w-[280px] sm:min-w-[350px] lg:min-w-[400px] text-center">
//                 {currentText}
//                 <span className="animate-pulse">|</span>
//               </span>
//             </div>
//           </div>

//           <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-black mb-6 sm:mb-8 leading-relaxed px-2">
//             Helping individuals and couples find clarity, connection, and calm in Los Angeles.
//           </h2>

//           {/* Trust indicators (Hidden on mobile) */}
//           <div className="hidden sm:flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-xs sm:text-sm text-[#222222]">
//             <div className="flex items-center gap-2 bg-white/70 p-3 rounded-full shadow-md">
//               <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#43705e]" />
//               <span>Licensed Clinical Psychologist</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/70 p-3 rounded-full shadow-md">
//               <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#43705e]" />
//               <span>8 Years Experience</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/70 p-3 rounded-full shadow-md">
//               <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#43705e]" />
//               <span>5-Star Rated</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/70 p-3 rounded-full shadow-md">
//               <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#43705e]" />
//               <span>500+ Successful Sessions</span>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
//             <Button
//               onClick={scrollToContact}
//               size="lg"
//               className="w-full sm:w-auto bg-[#43705e] hover:bg-[#35594B] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Book a Free Consult
//             </Button>
//             <Button
//               onClick={scrollToQuiz}
//               variant="outline"
//               size="lg"
//               className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full border-[#A5C0B2] bg-black hover:bg-[#E9F2ED] hover:border-[#43705E] hover:text-black transition-all duration-300"
//             >
//               Take Mental Health Quiz
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
//             <div className="text-center p-4 rounded-lg bg-white/70 border border-[#43705E]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#43705E]/20">
//               <div className="text-xl sm:text-2xl font-bold text-[#43705E]">8+</div>
//               <div className="text-xs sm:text-sm text-[#497344]">Years Experience</div>
//             </div>
//             <div className="text-center p-4 rounded-lg bg-white/70 border border-[#43705E]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#43705E]/20">
//               <div className="text-xl sm:text-2xl font-bold text-[#43705E]">500+</div>
//               <div className="text-xs sm:text-sm text-[#497344]">Client Sessions</div>
//             </div>
//             <div className="text-center p-4 rounded-lg bg-white/70 border border-[#43705E]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#43705E]/20">
//               <div className="text-xl sm:text-2xl font-bold text-[#43705E]">95%</div>
//               <div className="text-xs sm:text-sm text-[#497344]">Success Rate</div>
//             </div>
//             <div className="text-center p-4 rounded-lg bg-white/70 border border-[#43705E]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#43705E]/20">
//               <div className="text-xl sm:text-2xl font-bold text-[#43705E]">24hr</div>
//               <div className="text-xs sm:text-sm text-[#497344]">Response Time</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




"use client";

import { Button } from "@/app/components/ui/button";
import { useState, useEffect } from "react";
import { Heart, Shield, Users, Star } from "lucide-react";

interface HeroSectionProps {
  onBookClick: () => void;
}

export const HeroSection = ({ onBookClick }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  const phrases = [
    "Real-Life Challenges",
    "Anxiety & Stress",
    "Relationship Issues",
    "Trauma Recovery",
    "Personal Growth",
    "Life Transitions",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypeSpeed(75);
      } else {
        setCurrentText((prev) => currentPhrase.substring(0, prev.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed]);

  const scrollToQuiz = () => {
    const element = document.getElementById("quiz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Peaceful nature scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-black mb-4">
            Compassionate Therapy for
          </h1>
          <div className="text-3xl sm:text-5xl font-serif font-semibold text-[#43705e]">
            <span className="inline-block min-w-[280px] text-center">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-black mt-6 mb-8 font-light leading-relaxed px-2">
            Helping individuals and couples find clarity, connection, and calm in Los Angeles.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 px-4">
            <Button
              onClick={onBookClick}
              size="lg"
              className="w-full sm:w-auto bg-[#43705e] hover:bg-[#35594B] text-lg px-6 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Book a Free Consult
            </Button>

            <Button
              onClick={scrollToQuiz}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-6 py-4 rounded-full border-[#A5C0B2] bg-black text-white hover:bg-[#E9F2ED] hover:border-[#43705E] hover:text-black"
            >
              Take Mental Health Quiz
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-8 text-sm text-[#222]">
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
              <Shield className="w-4 h-4 text-[#43705e]" />
              <span>Licensed Clinical Psychologist</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
              <Heart className="w-4 h-4 text-[#43705e]" />
              <span>8 Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
              <Star className="w-4 h-4 text-[#43705e]" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
              <Users className="w-4 h-4 text-[#43705e]" />
              <span>500+ Successful Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
