import React from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Megaphone } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-cream-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Two-column About Layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          
          {/* Left: Professional Image - Responsive sizing */}
          <div className="flex justify-center lg:justify-start">
            {/* Mobile: Square, centered, smaller */}
            <div className="w-64 h-64 lg:w-96 lg:h-96 overflow-hidden bg-slate-blue/10 rounded-2xl shadow-lg">
              <img 
                src="/counselling.png" 
                alt="Bhavani Janakiram - Professional counseling services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Personal Introduction - Responsive text sizing */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6 font-body text-slate-blue leading-relaxed text-base lg:text-lg">
              <p>
                I'm <span className="font-semibold text-warm-orange">Bhavani Janakiram</span> — a graduate in Psychology with postgraduate diplomas in Public Relations and Management. I bring over 30 years of professional experience across government, corporate, and nonprofit sectors, and have worked extensively in the area of Violence Against Women.
              </p>
              <p>
                I founded The Listening Room to offer safe, structured spaces for growth, clarity, and transformation — for individuals and institutions alike.
              </p>
            </div>

            {/* Credentials Cards - Responsive sizing */}
            <div className="grid grid-cols-1 gap-3 lg:gap-4 pt-4 lg:pt-6">
              <Card className="p-3 lg:p-4 bg-white/80 border-0">
                <div className="flex items-center gap-2 lg:gap-3">
                  <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-warm-orange" />
                  <span className="font-body font-medium text-slate-blue text-sm lg:text-base">Psychology & Management diplomas</span>
                </div>
              </Card>
              
              <Card className="p-3 lg:p-4 bg-white/80 border-0">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-sage-green" />
                  <span className="font-body font-medium text-slate-blue text-sm lg:text-base">30+ years across sectors</span>
                </div>
              </Card>
              
              <Card className="p-3 lg:p-4 bg-white/80 border-0">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Megaphone className="w-5 h-5 lg:w-6 lg:h-6 text-lavender" />
                  <span className="font-body font-medium text-slate-blue text-sm lg:text-base">Founder, Feminist Association for Social Action (1989–present)</span>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-slate-blue mb-4">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            <Card className="p-6 lg:p-8 bg-white/80 border-0 text-center">
              <h3 className="text-xl lg:text-2xl font-heading font-semibold text-slate-blue mb-3 lg:mb-4">
                Family Counselling
              </h3>
              <p className="font-body text-slate-blue/80 leading-relaxed text-sm lg:text-base">
                Conflict resolution, relationship repair, trauma support
              </p>
            </Card>

            <Card className="p-6 lg:p-8 bg-white/80 border-0 text-center">
              <h3 className="text-xl lg:text-2xl font-heading font-semibold text-slate-blue mb-3 lg:mb-4">
                Workplace Coaching
              </h3>
              <p className="font-body text-slate-blue/80 leading-relaxed text-sm lg:text-base">
                1:1 mentoring for mid/senior managers
              </p>
            </Card>

            <Card className="p-6 lg:p-8 bg-white/80 border-0 text-center">
              <h3 className="text-xl lg:text-2xl font-heading font-semibold text-slate-blue mb-3 lg:mb-4">
                POSH & ICC Training
              </h3>
              <p className="font-body text-slate-blue/80 leading-relaxed text-sm lg:text-base">
                Setup & workshops for safe, compliant workplaces
              </p>
            </Card>

            <Card className="p-6 lg:p-8 bg-white/80 border-0 text-center">
              <h3 className="text-xl lg:text-2xl font-heading font-semibold text-slate-blue mb-3 lg:mb-4">
                Women's Leadership Mentoring
              </h3>
              <p className="font-body text-slate-blue/80 leading-relaxed text-sm lg:text-base">
                Coaching with lived experience
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}