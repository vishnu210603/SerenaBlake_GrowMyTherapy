// "use client"

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/app/components/ui/accordion";

// export const FAQSection = () => {
//   const faqs = [
//     {
//       question: "Do you accept insurance?",
//       answer: "No, I do not accept insurance directly. However, I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find they can recoup a portion of their session fees this way."
//     },
//     {
//       question: "Are online sessions available?",
//       answer: "Yes! All virtual sessions are conducted via Zoom and provide the same quality of care as in-person sessions. Virtual therapy can be especially convenient for those with busy schedules, mobility concerns, or who prefer the comfort of their own space."
//     },
//     {
//       question: "What is your cancellation policy?",
//       answer: "I require 24-hour notice for cancellations. This allows me to potentially offer the time slot to another client who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee."
//     }
//   ];

//   return (
//     <section id="faq" className="py-12 lg:py-20 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-xl text-muted-foreground">
//               Common questions about therapy sessions and my practice
//             </p>
//           </div>

//           <Accordion type="single" collapsible className="w-full space-y-6">
//             {faqs.map((faq, index) => (
//               <AccordionItem 
//                 key={index} 
//                 value={`item-${index}`}
//                 className="border border-border rounded-lg px-6 py-2 bg-card/50 backdrop-blur-sm"
//               >
//                 <AccordionTrigger className="text-left font-serif text-lg font-medium hover:no-underline hover:text-primary transition-colors">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };



"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, I do not accept insurance directly. However, I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find they can recoup a portion of their session fees this way.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes! All virtual sessions are conducted via Zoom and provide the same quality of care as in-person sessions. Virtual therapy can be especially convenient for those with busy schedules, mobility concerns, or who prefer the comfort of their own space.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24-hour notice for cancellations. This allows me to potentially offer the time slot to another client who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee.",
    },
  ];

  return (
    <section id="faq" className="py-12 lg:py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#111] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Common questions about therapy sessions and my practice
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="relative rounded-xl bg-white/80 backdrop-blur-sm overflow-hidden px-6 py-4"
                style={{
                  boxShadow:
        "0 25px 50px rgba(101, 163, 13, 0.2), 0 15px 35px rgba(0, 0, 0, 0.05)",
                }}
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-[#1a1a1a] hover:text-[#4CAF50] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
