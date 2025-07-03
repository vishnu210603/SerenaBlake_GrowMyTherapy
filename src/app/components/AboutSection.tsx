// import SerenaB from '../lib/SerenaB.jpg'

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-12 lg:py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
//             {/* Left side (About Text) */}
//             <div className="order-2 lg:order-1">
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
//                 Meet <span className="text-primary">Dr. Serena Blake</span>
//               </h2>

//               <div className="text-lg text-muted-foreground mb-6">
//                 <p className="mb-4 font-medium text-primary">PsyD, Clinical Psychologist</p>
//                 <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
//                   Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
//                   with eight years of experience and over 500 client sessions. She blends evidence-based 
//                   approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
//                   personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
//                 </p>

//                 <p className="mt-4">
//                   Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
//                 </p>
//               </div>

//               {/* Contact and Location Info */}
//               <div className="mt-8 grid sm:grid-cols-2 gap-6">
//                 <div className="bg-white py-6 px-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-primary/5">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">Contact & Location</h3>
//                   <ul className="space-y-2 text-muted-foreground">
//                     <li><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</li>
//                     <li><strong>Phone:</strong> <a href="tel:+13235550192" className="text-primary hover:underline">(323) 555-0192</a></li>
//                     <li><strong>Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-primary hover:underline">serena@blakepsychology.com</a></li>
//                   </ul>
//                 </div>

//                 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-primary/5">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">Office Hours</h3>
//                   <ul className="space-y-2 text-muted-foreground">
//                     <li><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</li>
//                     <li><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Experience & Specialties */}
//             </div>

//             {/* Right side (Dr. Serena's Image) */}
//             <div className="order-1 lg:order-2">
//               <div className="relative group">
//               <img
//                   src={SerenaB}  // Use the imported image
//                   alt="Dr. Serena Blake, Clinical Psychologist"
//                   className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105"
//                 />
//                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-200 rounded-full blur-2xl opacity-50"></div>
//                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-warm-200 rounded-full blur-2xl opacity-50"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client"

// import SerenaB from '../lib/SerenaB.jpg';

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-12 lg:py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
//             {/* Left side (About Text) */}
//             <div className="order-2 lg:order-1">
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
//                 Meet <span className="text-primary">Dr. Serena Blake</span>
//               </h2>

//               <div className="text-lg text-muted-foreground mb-6">
//                 <p className="mb-4 font-medium text-primary">PsyD, Clinical Psychologist</p>
//                 <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
//                   Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
//                   with eight years of experience and over 500 client sessions. She blends evidence-based 
//                   approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
//                   personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
//                 </p>

//                 <p className="mt-4">
//                   Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
//                 </p>
//               </div>

//               {/* Contact and Location Info */}
//               <div className="mt-8 grid sm:grid-cols-2 gap-6">
//                 <div className="bg-white py-6 px-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-primary/5">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">Contact & Location</h3>
//                   <ul className="space-y-2 text-muted-foreground">
//                     <li><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</li>
//                     <li><strong>Phone:</strong> <a href="tel:+13235550192" className="text-primary hover:underline">(323) 555-0192</a></li>
//                     <li><strong>Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-primary hover:underline">serena@blakepsychology.com</a></li>
//                   </ul>
//                 </div>

//                 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-primary/5">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">Office Hours</h3>
//                   <ul className="space-y-2 text-muted-foreground">
//                     <li><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</li>
//                     <li><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Experience & Specialties */}
//             </div>

//             {/* Right side (Dr. Serena's Image) */}
//             <div className="order-1 lg:order-2">
//               <div className="relative group">
//                 <img
//                   src={SerenaB}  // Use the imported image
//                   alt="Dr. Serena Blake, Clinical Psychologist"
//                   className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105"
//                 />
//                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-200 rounded-full blur-2xl opacity-50"></div>
//                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-warm-200 rounded-full blur-2xl opacity-50"></div>

//                 {/* Hover Effect Button */}
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 hidden group-hover:block">
//                   <button className="w-full py-2 px-4 bg-[#43705E] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#233d33] transition-all duration-300">
//                     Starting from $200
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// "use client";

// import Image from "next/image";
// import SerenaB from "../lib/SerenaB.jpg";

// export const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="py-12 lg:py-20 bg-gradient-to-r from-[#4e3d3d] to-[#2e2e2e]
//  transition-colors"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Left: Text */}
//             <div className="order-2 lg:order-1">
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
//                 Meet <span className="text-[#43705E]">Dr. Serena Blake</span>
//               </h2>

//               <div className="text-lg text-muted-foreground mb-6">
//                 <p className="mb-4 font-medium text-[#43705E]">
//                   PsyD, Clinical Psychologist
//                 </p>
//                 <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
//                   Dr. Serena Blake is a licensed clinical psychologist (PsyD)
//                   based in Los Angeles, CA, with eight years of experience and
//                   over 500 client sessions. She blends evidence-based approaches
//                   — like cognitive-behavioral therapy and mindfulness — with
//                   compassionate, personalized care to help you overcome anxiety,
//                   strengthen relationships, and heal from trauma.
//                 </p>

//                 <p className="mt-4">
//                   Whether you meet in her Maplewood Drive office or connect
//                   virtually via Zoom, Dr. Blake is committed to creating a safe,
//                   supportive space for you to thrive.
//                 </p>
//               </div>

//               {/* Info Boxes */}
//               <div className="mt-8 grid sm:grid-cols-2 gap-6">
//                 <div className="bg-black/45 py-6 px-4 rounded-lg shadow-md hover:shadow-xl hover:bg-[#67f5bc0a] transition">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">
//                     Contact & Location
//                   </h3>
//                   <ul className="space-y-2 text-muted-foreground text-sm">
//                     <li>
//                       <strong>Location:</strong> 1287 Maplewood Drive, Los
//                       Angeles, CA 90026
//                     </li>
//                     <li>
//                       <strong>Phone:</strong>{" "}
//                       <a
//                         href="tel:+13235550192"
//                         className="text-[#43705E] hover:underline"
//                       >
//                         (323) 555-0192
//                       </a>
//                     </li>
//                     <li>
//                       <strong>Email:</strong>{" "}
//                       <a
//                         href="mailto:serena@blakepsychology.com"
//                         className="text-[#43705E] hover:underline"
//                       >
//                         serena@blakepsychology.com
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="bg-black/45 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-[#67f5bc0a] transition">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">
//                     Office Hours
//                   </h3>
//                   <ul className="space-y-2 text-muted-foreground text-sm">
//                     <li>
//                       <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
//                     </li>
//                     <li>
//                       <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5
//                       PM
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Image */}
//             <div className="order-1 lg:order-2">
//               <div className="relative group w-full max-w-md mx-auto">
//                 <Image
//                   src={SerenaB}
//                   alt="Dr. Serena Blake, Clinical Psychologist"
//                   className="rounded-2xl shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
//                   placeholder="blur"
//                 />
//                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#d3e6dd] rounded-full blur-2xl opacity-50"></div>
//                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#f2e7d6] rounded-full blur-2xl opacity-50"></div>

//                 {/* CTA Button on Hover */}
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 hidden group-hover:block">
//                   <button className="w-full py-2 px-4 bg-[#43705E] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#2d4d40] transition-all duration-300">
//                     Starting from $200
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




"use client"

import Image from 'next/image';
import SerenaB from '../lib/SerenaB.jpg';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-12 lg:py-20 bg-gradient-to-r from-[#1c2b2d] to-[#2f3e46] text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left side (About Text) */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
                Meet <span className="text-[#7ed6b7]">Dr. Serena Blake</span>
              </h2>

              <div className="text-lg text-gray-200 mb-6">
                <p className="mb-4 font-medium text-[#A8E6CF]">
                  PsyD, Clinical Psychologist
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>

                <p className="mt-4">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>

              {/* Contact and Location Info */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="bg-[#ffffff0a] py-6 px-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#43705e22]">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Contact & Location
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</li>
                    <li><strong>Phone:</strong> <a href="tel:+13235550192" className="text-[#A8E6CF] hover:underline">(323) 555-0192</a></li>
                    <li><strong>Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-[#A8E6CF] hover:underline">serena@blakepsychology.com</a></li>
                  </ul>
                </div>

                <div className="bg-[#ffffff0a] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#43705e22]">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Office Hours
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</li>
                    <li><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side (Dr. Serena's Image) */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img
                  src={SerenaB.src}
                  alt="Dr. Serena Blake, Clinical Psychologist"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#a8e6cf33] rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ffffff33] rounded-full blur-2xl opacity-50"></div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 hidden group-hover:block">
                  <button className="w-full py-2 px-4 bg-[#7ed6b7] text-[#1c2b2d] text-lg font-semibold rounded-lg shadow-md hover:bg-[#6ab49d] transition-all duration-300">
                    Starting from $200
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
