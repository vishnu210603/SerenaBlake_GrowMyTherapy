"use client";

import { Card, CardContent } from '@/app/components/ui/card';
import { useState, useRef } from 'react';

export const ServicesSection = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to manage overwhelming thoughts and feelings. We'll work together to develop coping strategies that help you feel more grounded, confident, and in control of your daily life.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen communication, rebuild trust, and deepen intimacy in your partnerships. Whether you're navigating conflict or wanting to enhance connection, therapy can help you and your partner grow together.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past experiences in a safe, supportive environment. Using trauma-informed approaches, we'll work at your pace to process difficult experiences and develop resilience for moving forward.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];
  

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = cardRefs.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-[#43705e] mb-6">
              Services I Offer
            </h2>
            <p className="text-xl text-[#6b8c7b] max-w-3xl mx-auto">
              Personalized therapeutic approaches tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => (cardRefs.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                style={{
                  background:
                    hoveredCard === index
                      ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(67, 112, 94, 0.1), transparent 40%)`
                      : '',
                }}
              >
                {/* Glowing border ring */}
                <div className="absolute -inset-[2px] rounded-[22px] bg-gradient-to-br from-[#43705e] via-[#9eb5aa] to-white opacity-40 group-hover:opacity-100 transition-opacity blur-sm z-0" />

                {/* Card content */}
                <Card className="relative z-10 overflow-hidden rounded-[20px] shadow-lg bg-white">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-[20px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-[#43705e] mb-3 group-hover:text-[#2e5347] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4e635b] leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>

                  {/* Cursor-following light */}
                  {hoveredCard === index && (
                    <div
                      className="absolute pointer-events-none rounded-full blur-2xl opacity-60"
                      style={{
                        left: mousePosition.x - 75,
                        top: mousePosition.y - 75,
                        width: '150px',
                        height: '150px',
                        background:
                          'radial-gradient(circle, rgba(67,112,94,0.25) 0%, rgba(67,112,94,0.05) 50%, transparent 70%)',
                        zIndex: 5,
                      }}
                    />
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
