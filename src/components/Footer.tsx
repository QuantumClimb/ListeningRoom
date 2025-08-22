import React from 'react';
import { Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cream-bg py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="space-y-8 text-center">
          
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-slate-blue">
              Bhavani Janakiram
            </h3>
            
            <p className="text-lg font-body text-slate-blue/80 leading-relaxed">
              Family Counsellor | Leadership Coach | POSH Consultant
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-6">
            <a 
              href="mailto:bhavani.janakiram@gmail.com" 
              className="flex items-center gap-3 text-slate-blue hover:text-warm-orange transition-colors font-body font-medium group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base">bhavani.janakiram@gmail.com</span>
            </a>
            
            <a 
              href="tel:+918939918007" 
              className="flex items-center gap-3 text-slate-blue hover:text-warm-orange transition-colors font-body font-medium group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base">+91 89399 18007</span>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-slate-blue/10">
            <p className="text-sm font-body text-slate-blue/60">
              © 2025 The Listening Room. Creating safe spaces for healing, growth, and transformation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}