// "use client";

// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
// import { Button } from '@/app/components/ui/button';
// import { Brain, CheckCircle, Calendar, Check } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import * as ProgressPrimitive from "@radix-ui/react-progress";
// import { cn } from "@/app/lib/utils";

// // Radix Progress Component
// const RadixProgress = ({
//   value,
//   color,
//   className,
// }: {
//   value: number;
//   color: string;
//   className?: string;
// }) => (
//   <ProgressPrimitive.Root
//     className={cn("relative h-3 w-full overflow-hidden rounded-full bg-gray-200", className)}
//   >
//     <ProgressPrimitive.Indicator
//       className={`h-full transition-all ${color}`}
//       style={{ transform: `translateX(-${100 - value}%)` }}
//     />
//   </ProgressPrimitive.Root>
// );

// // Type definitions
// interface Question {
//   id: number;
//   question: string;
//   options: { value: number; text: string }[];
// }

// interface QuizResult {
//   score: number;
//   category: string;
//   description: string;
//   recommendations: string[];
//   metrics: {
//     anxiety: number;
//     depression: number;
//     stress: number;
//     relationships: number;
//     overall: number;
//   };
// }

// export default function MentalHealthQuizPage() {
//   const router = useRouter();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<number[]>([]);
//   const [showResult, setShowResult] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);

//   const questions: Question[] = [
//     {
//       id: 1,
//       question: 'Over the past two weeks, how often have you felt down, depressed, or hopeless?',
//       options: [
//         { value: 0, text: 'Not at all' },
//         { value: 1, text: 'Several days' },
//         { value: 2, text: 'More than half the days' },
//         { value: 3, text: 'Nearly every day' },
//       ],
//     },
//     {
//       id: 2,
//       question: 'How often do you feel nervous, anxious, or on edge?',
//       options: [
//         { value: 0, text: 'Not at all' },
//         { value: 1, text: 'Several days' },
//         { value: 2, text: 'More than half the days' },
//         { value: 3, text: 'Nearly every day' },
//       ],
//     },
//     {
//       id: 3,
//       question: 'How well are you able to manage daily stress?',
//       options: [
//         { value: 0, text: 'Very well' },
//         { value: 1, text: 'Fairly well' },
//         { value: 2, text: 'Not very well' },
//         { value: 3, text: 'Not at all well' },
//       ],
//     },
//     {
//       id: 4,
//       question: 'How often do you have trouble falling or staying asleep?',
//       options: [
//         { value: 0, text: 'Never' },
//         { value: 1, text: 'Sometimes' },
//         { value: 2, text: 'Often' },
//         { value: 3, text: 'Always' },
//       ],
//     },
//     {
//       id: 5,
//       question: 'How satisfied are you with your relationships?',
//       options: [
//         { value: 0, text: 'Very satisfied' },
//         { value: 1, text: 'Somewhat satisfied' },
//         { value: 2, text: 'Somewhat dissatisfied' },
//         { value: 3, text: 'Very dissatisfied' },
//       ],
//     },
//     {
//       id: 6,
//       question: 'How often do you feel overwhelmed by your responsibilities?',
//       options: [
//         { value: 0, text: 'Never' },
//         { value: 1, text: 'Sometimes' },
//         { value: 2, text: 'Often' },
//         { value: 3, text: 'Always' },
//       ],
//     },
//     {
//       id: 7,
//       question: 'How would you rate your overall energy levels?',
//       options: [
//         { value: 0, text: 'High energy' },
//         { value: 1, text: 'Moderate energy' },
//         { value: 2, text: 'Low energy' },
//         { value: 3, text: 'Very low energy' },
//       ],
//     },
//     {
//       id: 8,
//       question: 'How often do you engage in activities you enjoy?',
//       options: [
//         { value: 0, text: 'Daily' },
//         { value: 1, text: 'Several times a week' },
//         { value: 2, text: 'Once a week or less' },
//         { value: 3, text: 'Rarely or never' },
//       ],
//     },
//   ];

//   const calculateResult = (): QuizResult => {
//     const totalScore = answers.reduce((sum, val) => sum + val, 0);
//     const percentage = (totalScore / (questions.length * 3)) * 100;
//     const anxiety = ((answers[1] + answers[2]) / 6) * 100;
//     const depression = ((answers[0] + answers[6]) / 6) * 100;
//     const stress = ((answers[2] + answers[5]) / 6) * 100;
//     const relationships = (answers[4] / 3) * 100;

//     const result: QuizResult = {
//       score: percentage,
//       category: '',
//       description: '',
//       recommendations: [],
//       metrics: {
//         anxiety,
//         depression,
//         stress,
//         relationships,
//         overall: percentage,
//       },
//     };

//     if (percentage <= 25) {
//       result.category = 'Excellent Mental Wellness';
//       result.description = 'You are resilient and managing your mental health very well.';
//       result.recommendations = ['Keep up healthy habits', 'Share positivity with others'];
//     } else if (percentage <= 50) {
//       result.category = 'Good Mental Health';
//       result.description = 'Your mental health is good with room for minor improvement.';
//       result.recommendations = ['Maintain work-life balance', 'Try mindfulness exercises'];
//     } else if (percentage <= 75) {
//       result.category = 'Moderate Concerns';
//       result.description = 'You may be experiencing some mental health issues.';
//       result.recommendations = ['Talk to a counselor', 'Focus on stress relief activities'];
//     } else {
//       result.category = 'High Risk';
//       result.description = 'You may be facing serious mental health challenges. Seek help soon.';
//       result.recommendations = ['Reach out to a therapist', 'Lean on trusted support groups'];
//     }

//     return result;
//   };

//   const handleAnswer = (value: number) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = value;
//     setAnswers(newAnswers);

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const getProgressColor = (value: number) => {
//     if (value <= 33) return 'bg-green-500';
//     if (value <= 66) return 'bg-yellow-500';
//     return 'bg-red-500';
//   };

//   const progress = ((currentQuestion + 1) / questions.length) * 100;
//   const result = showResult ? calculateResult() : null;

//   if (!quizStarted) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
//         <Brain className="w-12 h-12 text-[#43705e] mb-4" />
//         <h1 className="text-4xl font-bold text-[#43705e]">Mental Health Assessment</h1>
//         <p className="mt-3 max-w-2xl text-gray-600">
//           Take our quiz to gain insights into your mental wellbeing and receive personalized tips and next steps.
//         </p>
//         <div className="mt-8 p-6 border rounded-lg max-w-xl shadow-md text-left">
//           <h3 className="text-[#43705e] font-semibold mb-2">What You'll Get:</h3>
//           <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
//             <li>8 simple questions</li>
//             <li>Results with insight on anxiety, stress, etc.</li>
//             <li>Visual feedback & custom advice</li>
//           </ul>
//           <div className="bg-[#f0f7f5] text-sm text-gray-700 p-3 rounded-md mt-4">
//             <strong>Note:</strong> This quiz is 100% confidential and takes less than 5 minutes.
//           </div>
//           <Button onClick={() => setQuizStarted(true)} className="mt-4 w-full bg-[#43705e] text-white">
//             Take Free Assessment
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   if (showResult && result) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-[#f9fdfc]">
//         <div className="w-full max-w-xl space-y-6">
//           <Card className="bg-white shadow-md">
//             <CardHeader className="text-center">
//               <CheckCircle className="w-10 h-10 mx-auto text-[#43705e]" />
//               <CardTitle className="text-2xl font-bold text-[#43705e] mt-2">Your Results</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-center mb-4">{result.description}</p>
//               <div className="space-y-4 mb-6">
//                 {Object.entries(result.metrics).map(([key, val]) => (
//                   <div key={key}>
//                     <div className="flex justify-between text-sm">
//                       <span className="capitalize">{key}</span>
//                       <span>{Math.round(val)}%</span>
//                     </div>
//                     <RadixProgress value={val} color={getProgressColor(val)} />
//                   </div>
//                 ))}
//               </div>
//               <h3 className="text-[#43705e] font-semibold mb-2">Recommendations:</h3>
//               <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
//                 {result.recommendations.map((tip, idx) => (
//                   <li key={idx}>{tip}</li>
//                 ))}
//               </ul>
//               <div className="flex gap-3">
//                 <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
//                   Retake Quiz
//                 </Button>
//                 <Button onClick={() => router.push('/#contact')} className="w-full bg-[#43705e] text-white">
//                   <Calendar className="w-4 h-4 mr-2" /> Book Consultation
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-[#f9fdfc]">
//       <div className="w-full max-w-xl">
//         <div className="fixed top-0 left-0 w-full z-10">
//           <RadixProgress value={progress} color="bg-[#43705e]" className="h-2 rounded-none" />
//         </div>
//         <div className="mb-4 mt-10">
//           <div className="flex justify-between">
//             <h2 className="text-xl font-semibold text-[#43705e]">Question {currentQuestion + 1} of {questions.length}</h2>
//             <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
//           </div>
//           <RadixProgress value={progress} color="bg-[#43705e]" />
//         </div>
//         <Card className="bg-white shadow-md rounded-lg">
//           <CardContent className="p-6">
//             <h3 className="text-lg font-medium text-[#43705e] mb-4">{questions[currentQuestion].question}</h3>
//             <div className="space-y-3">
//               {questions[currentQuestion].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswer(option.value)}
//                   className="w-full p-4 text-left border border-gray-200 rounded-lg hover:bg-[#eef6f3] flex items-center gap-3"
//                 >
//                   <div className="w-5 h-5 border-2 border-[#43705e] rounded-full flex items-center justify-center">
//                     <Check className="w-3 h-3 text-[#43705e]" />
//                   </div>
//                   <span className="text-[#43705e]">{option.text}</span>
//                 </button>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brain, CheckCircle, Calendar, Check, HeartHandshake, Smile, Activity } from "lucide-react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

// Reusable Progress Component
const RadixProgress = ({
  value,
  color,
  className,
}: {
  value: number;
  color: string;
  className?: string;
}) => (
  <ProgressPrimitive.Root
    className={cn("relative h-3 w-full overflow-hidden rounded-full bg-gray-200", className)}
  >
    <ProgressPrimitive.Indicator
      className={`h-full transition-all ${color}`}
      style={{ transform: `translateX(-${100 - value}%)` }}
    />
  </ProgressPrimitive.Root>
);

// Types
interface Question {
  id: number;
  question: string;
  options: { value: number; text: string }[];
}
interface QuizResult {
  score: number;
  category: string;
  description: string;
  recommendations: string[];
  metrics: {
    anxiety: number;
    depression: number;
    stress: number;
    relationships: number;
    overall: number;
  };
}

export default function MentalHealthQuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
      options: [
        { value: 0, text: "Not at all" },
        { value: 1, text: "Several days" },
        { value: 2, text: "More than half the days" },
        { value: 3, text: "Nearly every day" },
      ],
    },
    {
      id: 2,
      question: "How often do you feel nervous, anxious, or on edge?",
      options: [
        { value: 0, text: "Not at all" },
        { value: 1, text: "Several days" },
        { value: 2, text: "More than half the days" },
        { value: 3, text: "Nearly every day" },
      ],
    },
    {
      id: 3,
      question: "How well are you able to manage daily stress?",
      options: [
        { value: 0, text: "Very well" },
        { value: 1, text: "Fairly well" },
        { value: 2, text: "Not very well" },
        { value: 3, text: "Not at all well" },
      ],
    },
    {
      id: 4,
      question: "How often do you have trouble falling or staying asleep?",
      options: [
        { value: 0, text: "Never" },
        { value: 1, text: "Sometimes" },
        { value: 2, text: "Often" },
        { value: 3, text: "Always" },
      ],
    },
    {
      id: 5,
      question: "How satisfied are you with your relationships?",
      options: [
        { value: 0, text: "Very satisfied" },
        { value: 1, text: "Somewhat satisfied" },
        { value: 2, text: "Somewhat dissatisfied" },
        { value: 3, text: "Very dissatisfied" },
      ],
    },
    {
      id: 6,
      question: "How often do you feel overwhelmed by your responsibilities?",
      options: [
        { value: 0, text: "Never" },
        { value: 1, text: "Sometimes" },
        { value: 2, text: "Often" },
        { value: 3, text: "Always" },
      ],
    },
    {
      id: 7,
      question: "How would you rate your overall energy levels?",
      options: [
        { value: 0, text: "High energy" },
        { value: 1, text: "Moderate energy" },
        { value: 2, text: "Low energy" },
        { value: 3, text: "Very low energy" },
      ],
    },
    {
      id: 8,
      question: "How often do you engage in activities you enjoy?",
      options: [
        { value: 0, text: "Daily" },
        { value: 1, text: "Several times a week" },
        { value: 2, text: "Once a week or less" },
        { value: 3, text: "Rarely or never" },
      ],
    },
  ];

  const calculateResult = (): QuizResult => {
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const percentage = (totalScore / (questions.length * 3)) * 100;
    const anxiety = ((answers[1] + answers[2]) / 6) * 100;
    const depression = ((answers[0] + answers[6]) / 6) * 100;
    const stress = ((answers[2] + answers[5]) / 6) * 100;
    const relationships = (answers[4] / 3) * 100;

    const result: QuizResult = {
      score: percentage,
      category: "",
      description: "",
      recommendations: [],
      metrics: {
        anxiety,
        depression,
        stress,
        relationships,
        overall: percentage,
      },
    };

    if (percentage <= 25) {
      result.category = "Excellent Mental Wellness";
      result.description = "You are resilient and managing your mental health very well.";
      result.recommendations = ["Keep up healthy habits", "Share positivity with others"];
    } else if (percentage <= 50) {
      result.category = "Good Mental Health";
      result.description = "Your mental health is good with room for minor improvement.";
      result.recommendations = ["Maintain work-life balance", "Try mindfulness exercises"];
    } else if (percentage <= 75) {
      result.category = "Moderate Concerns";
      result.description = "You may be experiencing some mental health issues.";
      result.recommendations = ["Talk to a counselor", "Focus on stress relief activities"];
    } else {
      result.category = "High Risk";
      result.description = "You may be facing serious mental health challenges. Seek help soon.";
      result.recommendations = ["Reach out to a therapist", "Lean on trusted support groups"];
    }

    return result;
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getProgressColor = (value: number) => {
    if (value <= 33) return "bg-green-500";
    if (value <= 66) return "bg-yellow-500";
    return "bg-red-500";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const result = showResult ? calculateResult() : null;

  // Initial Landing Page
  if (!quizStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
        <Brain className="w-12 h-12 text-[#43705e] mb-4" />
        <h1 className="text-4xl font-bold text-[#43705e]">Mental Health Assessment</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Take our quiz to gain insights into your mental wellbeing and receive personalized tips.
        </p>
        <div className="mt-8 p-6 border rounded-lg max-w-xl shadow-md text-left">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>8 simple questions</li>
            <li>Results with insight on anxiety, stress, etc.</li>
            <li>Visual feedback & personalized advice</li>
          </ul>
          <Button onClick={() => setQuizStarted(true)} className="mt-6 w-full bg-[#43705e] text-white">
            Start Assessment
          </Button>
        </div>
      </div>
    );
  }

  // Result Page
  if (showResult && result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-[#f9fdfc]">
        <div className="w-full max-w-xl space-y-6">
          <Card className="bg-white shadow-md">
            <CardHeader className="text-center">
              <CheckCircle className="w-10 h-10 mx-auto text-[#43705e]" />
              <CardTitle className="text-2xl font-bold text-[#43705e] mt-2">Your Results</CardTitle>
              <p className="text-sm text-gray-800 mt-1">Total Score: {Math.round(result.score)}%</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-6 mb-6">
                <Smile className="text-green-600 w-8 h-8" />
                <HeartHandshake className="text-pink-500 w-8 h-8" />
                <Activity className="text-yellow-500 w-8 h-8" />
              </div>
              <p className="text-center text-gray-800 mb-4">{result.description}</p>
              <div className="space-y-4 mb-6">
                {Object.entries(result.metrics).map(([key, val]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm text-gray-900">
                      <span className="capitalize">{key}</span>
                      <span>{Math.round(val)}%</span>
                    </div>
                    <RadixProgress value={val} color={getProgressColor(val)} />
                  </div>
                ))}
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Recommendations:</h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-4">
                {result.recommendations.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button onClick={() => window.location.reload()} className="w-full bg-gray-800 text-white">
                  Retake Assessment
                </Button>
                <Button onClick={() => router.push("/#contact")} className="w-full bg-[#43705e] text-white">
                  <Calendar className="w-4 h-4 mr-2" /> Book Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Quiz Page
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-[#f9fdfc]">
      <div className="w-full max-w-xl">
        <div className="fixed top-0 left-0 w-full z-10">
          <RadixProgress value={progress} color="bg-[#43705e]" className="h-2 rounded-none" />
        </div>
        <div className="mb-4 mt-10">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-[#43705e]">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <RadixProgress value={progress} color="bg-[#43705e]" />
        </div>
        <Card className="bg-white shadow-md rounded-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-[#43705e] mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 text-left border border-gray-200 rounded-lg hover:bg-[#eef6f3] flex items-center gap-3"
                >
                  <div className="w-5 h-5 border-2 border-[#43705e] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#43705e]" />
                  </div>
                  <span className="text-[#43705e]">{option.text}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
