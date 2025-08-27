import React from 'react';
import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { BookingForm } from '@/components/BookingForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-bg font-body">
      <Header />
      <AboutSection />
      
      {/* Booking Section */}
      <section id="booking-section" className="py-20 px-6 bg-gradient-to-b from-cream-bg to-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-blue mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl font-body text-slate-blue/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Take the first step towards healing, growth, and positive change. 
              Schedule a consultation in a safe, supportive environment.
            </p>
            
            {/* Journey Image */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 lg:w-64 lg:h-64 overflow-hidden bg-slate-blue/10 rounded-2xl shadow-lg">
                <img 
                  src="/everyting.png" 
                  alt="Begin your journey to personal growth and transformation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;