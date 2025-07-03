// "use client";

// import { Button } from "@/app/components/ui/button";
// import { useState, useEffect } from "react";
// import { Heart, Shield, Users, Star } from "lucide-react";

// interface HeroSectionProps {
//   onBookClick: () => void;
// }

// export const HeroSection = ({ onBookClick }: HeroSectionProps) => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typeSpeed, setTypeSpeed] = useState(150);

//   const phrases = [
//     "Real-Life Challenges",
//     "Anxiety & Stress",
//     "Relationship Issues",
//     "Trauma Recovery",
//     "Personal Growth",
//     "Life Transitions",
//   ];

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentPhrase = phrases[currentIndex];
//       if (isDeleting) {
//         setCurrentText((prev) => prev.slice(0, -1));
//         setTypeSpeed(75);
//       } else {
//         setCurrentText((prev) => currentPhrase.substring(0, prev.length + 1));
//         setTypeSpeed(150);
//       }

//       if (!isDeleting && currentText === currentPhrase) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && currentText === "") {
//         setIsDeleting(false);
//         setCurrentIndex((prev) => (prev + 1) % phrases.length);
//       }
//     };

//     const timer = setTimeout(handleTyping, typeSpeed);
//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, currentIndex, typeSpeed]);

//   const scrollToQuiz = () => {
//     const element = document.getElementById("quiz");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=1080&q=80"
//           alt="Peaceful nature scene"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
//       </div>

//       {/* Foreground Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="max-w-6xl mx-auto animate-fade-in">
//           <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-black mb-4">
//             Compassionate Therapy for
//           </h1>
//           <div className="text-3xl sm:text-5xl font-serif font-semibold text-[#43705e]">
//             <span className="inline-block min-w-[280px] text-center">
//               {currentText}
//               <span className="animate-pulse">|</span>
//             </span>
//           </div>

//           <h2 className="text-lg sm:text-xl lg:text-2xl text-black mt-6 mb-8 font-light leading-relaxed px-2">
//             Helping individuals and couples find clarity, connection, and calm in Los Angeles.
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 px-4">
//             <Button
//               onClick={onBookClick}
//               size="lg"
//               className="w-full sm:w-auto bg-[#43705e] hover:bg-[#35594B] text-lg px-6 py-4 rounded-full shadow-lg transition-all duration-300"
//             >
//               Book a Free Consult
//             </Button>

//             <Button
//               onClick={scrollToQuiz}
//               variant="outline"
//               size="lg"
//               className="w-full sm:w-auto text-lg px-6 py-4 rounded-full border-[#A5C0B2] bg-black text-white hover:bg-[#E9F2ED] hover:border-[#43705E] hover:text-black"
//             >
//               Take Mental Health Quiz
//             </Button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-8 text-sm text-[#222]">
//             <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
//               <Shield className="w-4 h-4 text-[#43705e]" />
//               <span>Licensed Clinical Psychologist</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
//               <Heart className="w-4 h-4 text-[#43705e]" />
//               <span>8 Years Experience</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
//               <Star className="w-4 h-4 text-[#43705e]" />
//               <span>5-Star Rated</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow">
//               <Users className="w-4 h-4 text-[#43705e]" />
//               <span>500+ Successful Sessions</span>
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

export const HeroSection = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToQuiz = () => {
    const element = document.getElementById("quiz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Peaceful nature scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

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
              onClick={scrollToContact}
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
