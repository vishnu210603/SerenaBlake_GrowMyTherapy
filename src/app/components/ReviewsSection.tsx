// "use client"

// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { Card, CardContent } from "@/app/components/ui/card";
// import { Button } from "@/app/components/ui/button";

// const reviews = [
//   {
//     name: "Sarah M.",
//     rating: 5,
//     text: "Dr. Blake helped me work through years of anxiety with such compassion and expertise. I finally feel like myself again.",
//     location: "Los Angeles, CA",
//     avatar: "SM",
//   },
//   {
//     name: "Michael & Lisa R.",
//     rating: 5,
//     text: "Our couples therapy sessions transformed our relationship. We learned to communicate better and reconnect on a deeper level.",
//     location: "Beverly Hills, CA",
//     avatar: "ML",
//   },
//   {
//     name: "Jennifer K.",
//     rating: 5,
//     text: "The trauma recovery work was life-changing. Dr. Blake created such a safe space for healing. I'm forever grateful.",
//     location: "Santa Monica, CA",
//     avatar: "JK",
//   },
//   {
//     name: "David L.",
//     rating: 5,
//     text: "Professional, caring, and incredibly insightful. The virtual sessions were just as effective as in-person therapy.",
//     location: "West Hollywood, CA",
//     avatar: "DL",
//   },
//   {
//     name: "Amanda T.",
//     rating: 5,
//     text: "Dr. Blake's approach to anxiety management gave me tools I use every day. My life has completely changed for the better.",
//     location: "Pasadena, CA",
//     avatar: "AT",
//   },
// ];

// export const ReviewsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 10s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % reviews.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % reviews.length);
//   };

//   const getTransform = (index: number) => {
//     const diff = (index - currentIndex + reviews.length) % reviews.length;
//     const position = diff > reviews.length / 2 ? diff - reviews.length : diff;

//     const translateX = position * 320;
//     const scale = position === 0 ? 1 : Math.max(0.8, 1 - Math.abs(position) * 0.1);
//     const opacity = position === 0 ? 1 : 0.6;
//     const blur = position === 0 ? "blur(0px)" : Math.abs(position) === 1 ? "blur(2px)" : "blur(4px)";
//     const zIndex = 50 - Math.abs(position) * 10;

//     return {
//       position: "absolute" as const,
//       top: "50%",
//       left: "50%",
//       transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
//       transition: "transform 0.7s ease, opacity 0.7s ease, filter 0.7s ease",
//       zIndex,
//       opacity,
//       filter: blur,
//       width: "300px",
//       height: "280px",
//     };
//   };

//   const getCardStyle = (position: number) => {
//     if (position === 0) {
//       return {
//         background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
//         backdropFilter: "blur(20px)",
//         border: "2px solid #4CAF50",
//         borderRadius: "16px",
//         boxShadow: "0 25px 50px rgba(76, 175, 80, 0.25), 0 15px 35px rgba(0, 0, 0, 0.1)",
//       };
//     } else {
//       return {
//         background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.75))",
//         backdropFilter: "blur(10px)",
//         border: "1px solid rgba(76, 175, 80, 0.3)",
//         borderRadius: "16px",
//         boxShadow: "0 15px 30px rgba(76, 175, 80, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)",
//       };
//     }
//   };

//   const renderStars = (rating: number) =>
//     Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
//       />
//     ));

//   return (
//     <section className="relative w-full py-20 bg-gradient-to-br from-neutral-100 to-rose-100 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">What Clients Are Saying</h2>
//           <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
//             Real stories from people who found healing and growth through therapy
//           </p>
//         </div>

//         <div className="relative h-[360px] max-w-5xl mx-auto">
//           <Button
//             onClick={handlePrev}
//             variant="outline"
//             size="icon"
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 border-sage-300 h-12 w-12 rounded-full shadow-xl hidden md:flex"
//           >
//             <ChevronLeft />
//           </Button>

//           <Button
//             onClick={handleNext}
//             variant="outline"
//             size="icon"
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 border-sage-300 h-12 w-12 rounded-full shadow-xl hidden md:flex"
//           >
//             <ChevronRight />
//           </Button>

//           <div className="relative w-full h-full">
//             {reviews.map((review, i) => {
//               const diff = (i - currentIndex + reviews.length) % reviews.length;
//               const position = diff > reviews.length / 2 ? diff - reviews.length : diff;
//               return (
//                 <div key={i} style={getTransform(i)}>
//                   <Card style={getCardStyle(position)}>
//                     <CardContent className="p-6 h-full flex flex-col justify-between">
//                       <div>
//                         <div className="flex items-center gap-3 mb-4">
//                           <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
//                             {review.avatar}
//                           </div>
//                           <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
//                         </div>
//                         <blockquote className="text-muted-foreground leading-relaxed mb-4 italic text-sm font-medium line-clamp-4">
//                           "{review.text}"
//                         </blockquote>
//                       </div>
//                       <div>
//                         <p className="font-semibold text-foreground text-base">{review.name}</p>
//                         <p className="text-xs text-muted-foreground">{review.location}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Dr. Blake helped me work through years of anxiety with such compassion and expertise. I finally feel like myself again.",
    location: "Los Angeles, CA",
    avatar: "SM",
  },
  {
    name: "Michael & Lisa R.",
    rating: 5,
    text: "Our couples therapy sessions transformed our relationship. We learned to communicate better and reconnect on a deeper level.",
    location: "Beverly Hills, CA",
    avatar: "ML",
  },
  {
    name: "Jennifer K.",
    rating: 5,
    text: "The trauma recovery work was life-changing. Dr. Blake created such a safe space for healing. I'm forever grateful.",
    location: "Santa Monica, CA",
    avatar: "JK",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Professional, caring, and incredibly insightful. The virtual sessions were just as effective as in-person therapy.",
    location: "West Hollywood, CA",
    avatar: "DL",
  },
  {
    name: "Amanda T.",
    rating: 5,
    text: "Dr. Blake's approach to anxiety management gave me tools I use every day. My life has completely changed for the better.",
    location: "Pasadena, CA",
    avatar: "AT",
  },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const getTransform = (index: number) => {
    const diff = (index - currentIndex + reviews.length) % reviews.length;
    const position = diff > reviews.length / 2 ? diff - reviews.length : diff;

    const translateX = position * 320;
    const scale = position === 0 ? 1 : Math.max(0.8, 1 - Math.abs(position) * 0.1);
    const opacity = position === 0 ? 1 : 0.6;
    const blur = position === 0 ? "blur(0px)" : Math.abs(position) === 1 ? "blur(2px)" : "blur(4px)";
    const zIndex = 50 - Math.abs(position) * 10;

    return {
      position: "absolute" as const,
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
      transition: "transform 0.7s ease, opacity 0.7s ease, filter 0.7s ease",
      zIndex,
      opacity,
      filter: blur,
      width: "300px",
      height: "280px",
    };
  };

  const getCardStyle = (position: number) => {
    return {
      background: "rgba(240, 250, 250, 0.95)", // gray-50 tone
      boxShadow: position === 0
        ? "0 25px 50px rgba(101, 163, 13, 0.2), 0 15px 35px rgba(0, 0, 0, 0.05)"
        : "0 10px 20px rgba(0, 0, 0, 0.06)",
      backdropFilter: "blur(8px)",
    };
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ));

  return (
    <section className="relative w-full py-20 bg-[#f2f7f2] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-xl sm:text-2xl text-gray-800 max-w-3xl mx-auto">
            Real stories from people who found healing and growth through therapy
          </p>
        </div>

        <div className="relative h-[360px] max-w-5xl mx-auto">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border-green-700 h-12 w-12 rounded-full shadow-md hidden md:flex"
          >
            <ChevronLeft className="text-green-700"/>
          </Button>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border-green-700 h-12 w-12 rounded-full shadow-md hidden md:flex"
          >
            <ChevronRight className="text-green-700"/>
          </Button>

          <div className="relative w-full h-full">
            {reviews.map((review, i) => {
              const diff = (i - currentIndex + reviews.length) % reviews.length;
              const position = diff > reviews.length / 2 ? diff - reviews.length : diff;
              return (
                <div key={i} style={getTransform(i)}>
                  <Card style={getCardStyle(position)}>
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                            {review.avatar}
                          </div>
                          <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                        </div>
                        <blockquote className="text-gray-700 leading-relaxed mb-4 italic text-sm font-medium line-clamp-4">
                          "{review.text}"
                        </blockquote>
                      </div>
                      <div>
                        <p className="font-semibold text-[#4CAF50] text-base">{review.name}</p>
                        <p className="text-sm text-black">{review.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
