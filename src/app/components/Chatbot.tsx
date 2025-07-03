"use client"

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRecommended, setShowRecommended] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm here to help you learn more about therapy services. How can I assist you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const quickReplies = [
    "What services do you offer?",
    "How do I book a consultation?",
    "What are your rates?",
    "Do you offer online sessions?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "Thank you for your message. Dr. Blake offers personalized therapy sessions for anxiety, relationship counseling, and trauma recovery. Would you like to book a consultation?", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    
    setInputValue('');
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = { id: Date.now(), text: reply, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    
    setTimeout(() => {
      let response = "";
      if (reply.includes("services")) {
        response = "I offer anxiety & stress management, relationship counseling, and trauma recovery services. Each session is tailored to your unique needs.";
      } else if (reply.includes("book")) {
        response = "You can book a consultation by clicking the 'Book Consult' button or scrolling to the contact section. I'll get back to you within 24 hours.";
      } else if (reply.includes("rates")) {
        response = "Session rates vary based on the type of therapy and duration. Please contact me for detailed pricing information.";
      } else {
        response = "Yes, I offer both in-person and online therapy sessions via secure video conferencing platforms.";
      }
      
      const botResponse = { id: Date.now() + 1, text: response, isBot: true };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-sage-600 hover:from-primary/90 hover:to-sage-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div ref={chatRef} className="fixed bottom-24 right-6 w-80 h-[480px] z-50">
          <Card className="h-full flex flex-col shadow-2xl border-sage-200/50 bg-background/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-primary to-sage-600 text-white rounded-t-lg p-4 flex-shrink-0">
              <h3 className="font-semibold text-lg">Therapy Assistant</h3>
              <p className="text-sm opacity-90">Ask me anything about our services</p>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl text-sm break-words ${
                        message.isBot
                          ? 'bg-sage-100 text-foreground'
                          : 'bg-primary text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommended Messages */}
              <div className="p-3 border-t border-sage-200/50 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">Quick Questions</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowRecommended(!showRecommended)}
                    className="h-6 w-6 p-0"
                  >
                    {showRecommended ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </Button>
                </div>
                {showRecommended && (
                  <div className="grid grid-cols-1 gap-2 mb-3">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs p-2 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors text-left border border-sage-200 hover:border-sage-300"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-sage-200/50 flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-sage-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
