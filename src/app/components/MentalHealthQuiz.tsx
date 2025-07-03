// // "use client";

// // import { Button } from '@/app/components/ui/button';
// // import { Card, CardContent } from '@/app/components/ui/card';
// // import { Brain } from 'lucide-react';
// // import { useRouter } from 'next/navigation';

// // export const MentalHealthQuiz = () => {
// //   const router = useRouter();

// //   const handleTakeAssessment = () => {
// //     router.push('/quiz?start=true'); // Added query param
// //   };
  

// //   return (
// //     <section
// //       id="quiz"
// //       className="py-16 bg-gradient-to-br from-white via-white to-[#f3f7f5]"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <div className="mb-10">
// //             <Brain className="w-16 h-16 mx-auto text-[#43705e] mb-4" />
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#43705e] mb-4">
// //               Mental Health Assessment
// //             </h2>
// //             <p className="text-xl text-[#5b7467] max-w-3xl mx-auto mb-8">
// //               Take our comprehensive mental health quiz to gain personalized insights into your
// //               wellbeing and receive a tailored report to guide your next steps.
// //             </p>
// //           </div>

// //           <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg border border-[#d9e3dd] shadow-md">
// //             <CardContent className="p-8">
// //               <div className="space-y-6 text-left">
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-[#43705e] mb-3">What You'll Get:</h3>
// //                   <ul className="text-sm text-[#4e635b] space-y-2 list-disc list-inside">
// //                     <li>Comprehensive 8-question mental health check</li>
// //                     <li>Insightful metrics based on your responses</li>
// //                     <li>Clear next steps and recommendations</li>
// //                     <li>Optional consultation with a mental health professional</li>
// //                   </ul>
// //                 </div>
// //                 <div className="bg-[#f3f7f5] p-4 rounded-lg border border-[#d9e3dd]">
// //                   <p className="text-sm text-[#4e635b]">
// //                     <strong>Note:</strong> This quiz is 100% confidential and takes less than 5 minutes.
// //                   </p>
// //                 </div>
// //                 <Button
// //                   onClick={handleTakeAssessment}
// //                   className="w-full bg-[#43705e] hover:bg-[#2e5347] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium"
// //                 >
// //                   Take Free Assessment
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };




// "use client";

// import { Button } from '@/app/components/ui/button';
// import { Card, CardContent } from '@/app/components/ui/card';
// import { Brain } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export const MentalHealthQuiz = () => {
//   const router = useRouter();

//   const [completed, setCompleted] = useState(false);
//   const [score, setScore] = useState<number | null>(null);

//   const questions = [
//     'I often feel overwhelmed or anxious.',
//     'I have difficulty sleeping or relaxing.',
//     'I struggle with negative thoughts about myself.',
//     'I feel disconnected from others or isolated.',
//     'I find it hard to focus or concentrate.',
//     'I experience mood swings or irritability.',
//     'I avoid activities I once enjoyed.',
//     'I have difficulty managing stress in daily life.',
//   ];

//   const handleTakeAssessment = () => {
//     router.push('/quiz?start=true');
//   };

//   const handleSubmitQuiz = () => {
//     const simulatedScore = Math.floor(Math.random() * 101); // Simulated score
//     setScore(simulatedScore);
//     setCompleted(true);
//   };

//   const handleRetake = () => {
//     setScore(null);
//     setCompleted(false);
//   };

//   return (
//     <section
//       id="quiz"
//       className="py-16 bg-gradient-to-br from-white via-white to-[#f3f7f5]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-10">
//             <Brain className="w-16 h-16 mx-auto text-[#43705e] mb-4" />
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#43705e] mb-4">
//               Mental Health Assessment
//             </h2>
//             <p className="text-xl text-[#5b7467] max-w-3xl mx-auto mb-8">
//               Take our comprehensive mental health quiz to gain personalized insights into your
//               wellbeing and receive a tailored report to guide your next steps.
//             </p>
//           </div>

//           {!completed ? (
//             <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg border border-[#d9e3dd] shadow-md">
//               <CardContent className="p-8">
//                 <div className="space-y-6 text-left">
//                   <div>
//                     <h3 className="text-lg font-semibold text-[#43705e] mb-3">What You'll Get:</h3>
//                     <ul className="text-sm text-[#4e635b] space-y-2 list-disc list-inside">
//                       <li>Comprehensive 8-question mental health check</li>
//                       <li>Insightful metrics based on your responses</li>
//                       <li>Clear next steps and recommendations</li>
//                       <li>Optional consultation with a mental health professional</li>
//                     </ul>
//                   </div>
//                   <div className="bg-[#f3f7f5] p-4 rounded-lg border border-[#d9e3dd]">
//                     <p className="text-sm text-[#4e635b]">
//                       <strong>Note:</strong> This quiz is 100% confidential and takes less than 5 minutes.
//                     </p>
//                   </div>
//                   <Button
//                     onClick={handleSubmitQuiz}
//                     className="w-full bg-[#43705e] hover:bg-[#2e5347] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium"
//                   >
//                     Take Free Assessment
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ) : (
//             <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg border border-[#d9e3dd] shadow-md">
//               <CardContent className="p-8 text-left">
//                 <h3 className="text-xl font-semibold text-[#43705e] mb-4">Your Report</h3>
//                 <p className="text-[#4e635b] mb-6">
//                   Your mental health score is <strong>{score}/100</strong>. This score suggests your current
//                   stress and wellbeing level based on your responses. Consider reviewing your coping strategies,
//                   support system, and overall wellness.
//                 </p>
//                 <ul className="list-disc list-inside text-sm text-[#4e635b] space-y-2 mb-6">
//                   <li>Practice daily mindfulness or breathing exercises</li>
//                   <li>Reach out to close friends or family for support</li>
//                   <li>Consider scheduling a session with a licensed therapist</li>
//                 </ul>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button
//                     onClick={handleRetake}
//                     className="w-full sm:w-auto bg-white border border-[#43705e] text-[#43705e] hover:bg-[#f0f5f2]"
//                   >
//                     Re-Take Assessment
//                   </Button>
//                   <Button
//                     onClick={() => router.push('/contact')}
//                     className="w-full sm:w-auto bg-[#43705e] hover:bg-[#2e5347] text-white"
//                   >
//                     Book a Consultation
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";

import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Brain } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const MentalHealthQuiz = () => {
  const router = useRouter();

  const handleTakeAssessment = () => {
    router.push('/quiz?start=true');
  };

  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-white via-white to-[#f3f7f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <Brain className="w-16 h-16 mx-auto text-[#43705e] mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#43705e] mb-4">
              Mental Health Assessment
            </h2>
            <p className="text-xl text-[#5b7467] max-w-3xl mx-auto mb-8">
              Take our comprehensive mental health quiz to gain personalized insights into your
              wellbeing and receive a tailored report to guide your next steps.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg border border-[#d9e3dd] shadow-md">
            <CardContent className="p-8">
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-[#43705e] mb-3">What You'll Get:</h3>
                  <ul className="text-sm text-[#4e635b] space-y-2 list-disc list-inside">
                    <li>Comprehensive 8-question mental health check</li>
                    <li>Insightful metrics based on your responses</li>
                    <li>Clear next steps and recommendations</li>
                    <li>Optional consultation with a mental health professional</li>
                  </ul>
                </div>
                <div className="bg-[#f3f7f5] p-4 rounded-lg border border-[#d9e3dd]">
                  <p className="text-sm text-[#4e635b]">
                    <strong>Note:</strong> This quiz is 100% confidential and takes less than 5 minutes.
                  </p>
                </div>
                <Button
                  onClick={handleTakeAssessment}
                  className="w-full bg-[#43705e] hover:bg-[#2e5347] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium"
                >
                  Take Free Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
