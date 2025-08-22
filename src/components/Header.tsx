import React from 'react';
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-[75vh] bg-cream-bg overflow-hidden">
      {/* Hero Background Images - Responsive */}
      <div className="absolute inset-0">
        {/* Mobile Hero Image */}
        <img 
          src="/hero_mobile.png" 
          alt="The Listening Room - Professional counseling space" 
          className="w-full h-full object-cover md:hidden"
        />
        {/* Desktop Hero Image */}
        <img 
          src="/hero_desktop.png" 
          alt="The Listening Room - Professional counseling space" 
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-end">
            {/* Text Content with Background Box - 35% smaller */}
            <div className="max-w-xl text-center lg:text-right space-y-4 p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
              
              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-blue tracking-tight leading-tight">
                  The Listening Room
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-body font-light text-slate-blue/80 italic leading-relaxed">
                  Family & Workplace Counselling | Women in Leadership | POSH Compliance
                </p>
              </div>

              {/* Practitioner */}
              <div className="pt-3">
                <p className="text-sm md:text-base font-body font-medium text-slate-blue/70">
                  Bhavani Janakiram, Family Counsellor & Leadership Coach
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-5">
                <Button 
                  onClick={scrollToBooking}
                  className="bg-warm-orange hover:bg-slate-blue text-white font-heading font-medium px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}