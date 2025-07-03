// "use client"
// import { useState } from 'react';
// import { Button } from '@/app/components/ui/button';

// export const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-sage-200/30 shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="font-serif font-bold text-2xl bg-gradient-to-r from-primary to-sage-600 bg-clip-text text-transparent">
//             Dr. Serena Blake
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-12">
//             <button
//               onClick={() => scrollToSection('about')}
//               className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
//             >
//               About
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </button>
//             <button
//               onClick={() => scrollToSection('services')}
//               className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
//             >
//               Services
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </button>
//             <button
//               onClick={() => scrollToSection('quiz')}
//               className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
//             >
//               Mental Health Quiz
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </button>
//             <button
//               onClick={() => scrollToSection('faq')}
//               className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
//             >
//               FAQ
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
//             >
//               Contact
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </button>
//           </div>

//           <div className="hidden md:block">
//             <Button
//               onClick={() => scrollToSection('contact')}
//               className="bg-gradient-to-r from-primary to-sage-600 hover:from-primary/90 hover:to-sage-600/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               Book Consult
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-sage-100/50 transition-colors"
//             aria-label="Toggle menu"
//           >
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
//               <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//               <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//               <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-sage-200/30 bg-background/95 backdrop-blur-lg rounded-b-2xl shadow-lg">
//             <div className="px-4 pt-4 pb-6 space-y-3">
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-sage-50 transition-all duration-300 w-full text-left rounded-lg font-medium"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection('services')}
//                 className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-sage-50 transition-all duration-300 w-full text-left rounded-lg font-medium"
//               >
//                 Services
//               </button>
//               <button
//                 onClick={() => scrollToSection('quiz')}
//                 className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-sage-50 transition-all duration-300 w-full text-left rounded-lg font-medium"
//               >
//                 Mental Health Quiz
//               </button>
//               <button
//                 onClick={() => scrollToSection('faq')}
//                 className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-sage-50 transition-all duration-300 w-full text-left rounded-lg font-medium"
//               >
//                 FAQ
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-sage-50 transition-all duration-300 w-full text-left rounded-lg font-medium"
//               >
//                 Contact
//               </button>
//               <div className="pt-2">
//                 <Button
//                   onClick={() => scrollToSection('contact')}
//                   className="w-full bg-gradient-to-r from-primary to-sage-600 hover:from-primary/90 hover:to-sage-600/90 text-white py-3 rounded-full shadow-lg"
//                 >
//                   Book Consult
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };



"use client"
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#43705E]/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-serif font-bold text-2xl bg-gradient-to-r from-[#43705E] to-[#78A28F] bg-clip-text text-transparent">
            Dr. Serena Blake
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {["about", "services", "quiz", "faq", "contact"].map((section, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(section)}
                className="relative text-gray-700 hover:text-[#43705E] transition-all duration-300 font-medium group"
              >
                {section === "quiz" ? "Mental Health Quiz" : section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#43705E] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#43705E] to-[#78A28F] hover:from-[#35594B] hover:to-[#6E9C87] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Consult
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#43705E]/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#43705E]/30 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {["about", "services", "quiz", "faq", "contact"].map((section, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(section)}
                  className="block px-4 py-3 text-gray-700 hover:text-[#43705E] hover:bg-[#43705E]/10 transition-all duration-300 w-full text-left rounded-lg font-medium"
                >
                  {section === "quiz" ? "Mental Health Quiz" : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-[#43705E] to-[#78A28F] hover:from-[#35594B] hover:to-[#6E9C87] text-white py-3 rounded-full shadow-lg"
                >
                  Book Consult
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
