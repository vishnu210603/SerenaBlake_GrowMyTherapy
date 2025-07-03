// "use client"

// export const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
//             {/* Brand Section */}
//             <div className="lg:col-span-5">
//               <h3 className="font-serif text-3xl font-bold mb-6 bg-gradient-to-r from-sage-300 to-warm-300 bg-clip-text text-transparent">
//                 Dr. Serena Blake, PsyD
//               </h3>
//               <p className="text-slate-300 leading-relaxed mb-8 max-w-md text-lg">
//                 Licensed Clinical Psychologist providing compassionate, evidence-based therapy 
//                 for individuals and couples in Los Angeles.
//               </p>
//               <div className="flex items-center gap-6 text-slate-400">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
//                   <span className="text-sm font-medium">PSY 12345</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-warm-400 rounded-full"></div>
//                   <span className="text-sm font-medium">© 2024 All rights reserved</span>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="lg:col-span-4">
//               <h4 className="font-serif text-xl font-semibold mb-6 text-white">Get in Touch</h4>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4 group">
//                   <div className="w-10 h-10 bg-sage-600/20 rounded-lg flex items-center justify-center group-hover:bg-sage-600/30 transition-colors">
//                     <span className="text-sage-300 text-lg">📍</span>
//                   </div>
//                   <div className="text-slate-300">
//                     <p className="font-medium">1287 Maplewood Drive</p>
//                     <p>Los Angeles, CA 90026</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4 group">
//                   <div className="w-10 h-10 bg-sage-600/20 rounded-lg flex items-center justify-center group-hover:bg-sage-600/30 transition-colors">
//                     <span className="text-sage-300 text-lg">📞</span>
//                   </div>
//                   <p className="text-slate-300 font-medium">(323) 555-0192</p>
//                 </div>
//                 <div className="flex items-center gap-4 group">
//                   <div className="w-10 h-10 bg-sage-600/20 rounded-lg flex items-center justify-center group-hover:bg-sage-600/30 transition-colors">
//                     <span className="text-sage-300 text-lg">📧</span>
//                   </div>
//                   <p className="text-slate-300 font-medium">serena@blakepsychology.com</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hours & Rates */}
//             <div className="lg:col-span-3">
//               <h4 className="font-serif text-xl font-semibold mb-6 text-white">Practice Details</h4>
//               <div className="space-y-6">
//                 <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
//                   <p className="font-semibold text-sage-300 mb-2">Office Hours</p>
//                   <div className="text-sm text-slate-300 space-y-1">
//                     <p>In-person: Tue & Thu</p>
//                     <p className="text-slate-400">10 AM–6 PM</p>
//                     <p>Virtual: Mon, Wed & Fri</p>
//                     <p className="text-slate-400">1 PM–5 PM</p>
//                   </div>
//                 </div>
//                 <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
//                   <p className="font-semibold text-warm-300 mb-2">Session Fees</p>
//                   <div className="text-sm text-slate-300 space-y-1">
//                     <p>Individual: <span className="font-medium">$200</span></p>
//                     <p>Couples: <span className="font-medium">$240</span></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-slate-700/50 mt-12 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-slate-400 text-center md:text-left">
//                 Building healthier minds, one conversation at a time.
//               </p>
//               <div className="flex items-center gap-6">
//                 <div className="w-8 h-8 bg-gradient-to-r from-sage-600 to-warm-600 rounded-full opacity-60"></div>
//                 <div className="w-6 h-6 bg-gradient-to-r from-warm-600 to-sage-600 rounded-full opacity-40"></div>
//                 <div className="w-4 h-4 bg-gradient-to-r from-sage-600 to-warm-600 rounded-full opacity-20"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };



"use client";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-3xl font-bold bg-gradient-to-r from-sage-300 to-warm-300 bg-clip-text text-[#43705e]">
                Dr. Serena Blake, PsyD
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Licensed Clinical Psychologist offering compassionate, evidence-based therapy for individuals and couples in Los Angeles.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                  <span>PSY 12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-400 rounded-full"></div>
                  <span>© 2024 All rights reserved</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="font-serif text-xl font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    label: (
                      <>
                        <p className="font-medium">1287 Maplewood Drive</p>
                        <p className="text-slate-400">Los Angeles, CA 90026</p>
                      </>
                    )
                  },
                  {
                    icon: "📞",
                    label: <p className="font-medium">(323) 555-0192</p>
                  },
                  {
                    icon: "📧",
                    label: <p className="font-medium">serena@blakepsychology.com</p>
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-sage-700/20 rounded-lg flex items-center justify-center group-hover:bg-sage-600/30 transition-colors">
                      <span className="text-sage-300 text-lg">{item.icon}</span>
                    </div>
                    <div className="text-slate-300 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours & Rates */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="font-serif text-xl font-semibold text-white">Practice Details</h4>

              <div className="space-y-4">
                <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                  <p className="font-semibold text-sage-300 mb-2">Office Hours</p>
                  <div className="text-sm text-slate-300 space-y-1">
                    <p>In-person: Tue & Thu <span className="text-slate-400">10 AM – 6 PM</span></p>
                    <p>Virtual: Mon, Wed & Fri <span className="text-slate-400">1 PM – 5 PM</span></p>
                  </div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                  <p className="font-semibold text-warm-300 mb-2">Session Fees</p>
                  <div className="text-sm text-slate-300 space-y-1">
                    <p>Individual: <span className="font-medium">$200</span></p>
                    <p>Couples: <span className="font-medium">$240</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-400 text-center md:text-left">
              Building healthier minds, one conversation at a time.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-sage-600 to-warm-600 rounded-full opacity-60"></div>
              <div className="w-6 h-6 bg-gradient-to-r from-warm-600 to-sage-600 rounded-full opacity-40"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-sage-600 to-warm-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
