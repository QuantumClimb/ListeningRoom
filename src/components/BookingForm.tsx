import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingFormData {
  name: string;
  date: Date | undefined;
  time: string;
  service: string;
  duration: string;
}

const services = [
  "Assertiveness",
  "Decision-Making", 
  "Time Use & Focus",
  "Life Skills Reset"
];

const durations = [
  { value: "0.5", label: "30 min (Quick Reset)", price: 500 }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    date: undefined,
    time: '',
    service: '',
    duration: ''
  });

  const selectedDuration = durations.find(d => d.value === formData.duration);
  const totalPrice = selectedDuration ? selectedDuration.price : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.date || !formData.time || !formData.service || !formData.duration) {
      alert('Please fill in all fields');
      return;
    }

    const message = `Hi Bhavani — I'd like to book a 30-minute Quick Reset on ${format(formData.date, 'PPP')} at ${formData.time}. Focus area: ${formData.service}. (Total: ₹${totalPrice}).`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918939918007?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-cream-bg border-0">
        <CardHeader className="text-center py-12 bg-cream-bg">
          <CardTitle className="text-3xl lg:text-4xl font-heading font-bold text-slate-blue mb-4">
            Book Your 30-min Quick Reset
          </CardTitle>
          <p className="text-lg font-body text-slate-blue/70 max-w-2xl mx-auto leading-relaxed">
            Fast, focused, practical. Pick a slot and a focus area — get quick, clear outcomes you can use today.
          </p>
        </CardHeader>
        
        <CardContent className="p-8 md:p-12">
          {/* Booking Form Layout - Image on left, Form on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Booking Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 lg:w-96 lg:h-96 overflow-hidden bg-slate-blue/10 rounded-2xl shadow-lg">
                <img 
                  src="/unstoppable.png" 
                  alt="Unstoppable mindset and growth coaching" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right: Booking Form */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Field */}
            <div className="space-y-3">
              <Label htmlFor="name" className="text-slate-blue font-body font-medium text-lg">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                className="h-14 border-slate-blue/20 focus:border-warm-orange focus:ring-warm-orange/20 text-lg font-body"
              />
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Date Picker */}
              <div className="space-y-3">
                <Label className="text-slate-blue font-body font-medium text-lg">
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-14 justify-start text-left font-body text-lg border-slate-blue/20",
                        !formData.date && "text-slate-blue/50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 border-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => setFormData(prev => ({ ...prev, date }))}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selector */}
              <div className="space-y-3">
                <Label className="text-slate-blue font-body font-medium text-lg">
                  Time
                </Label>
                <Select value={formData.time} onValueChange={(time) => setFormData(prev => ({ ...prev, time }))}>
                  <SelectTrigger className="h-14 border-slate-blue/20 focus:border-warm-orange focus:ring-warm-orange/20 text-lg font-body">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time} className="font-body">{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Service and Duration Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Service Selector */}
              <div className="space-y-3">
                <Label className="text-slate-blue font-body font-medium text-lg">
                  Focus Area
                </Label>
                <Select value={formData.service} onValueChange={(service) => setFormData(prev => ({ ...prev, service }))}>
                  <SelectTrigger className="h-14 border-slate-blue/20 focus:border-warm-orange focus:ring-warm-orange/20 text-lg font-body">
                    <SelectValue placeholder="Choose focus area" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="font-body">{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Duration Selector */}
              <div className="space-y-3">
                <Label className="text-slate-blue font-body font-medium text-lg">
                  Session Type
                </Label>
                <Select value={formData.duration} onValueChange={(duration) => setFormData(prev => ({ ...prev, duration }))}>
                  <SelectTrigger className="h-14 border-slate-blue/20 focus:border-warm-orange focus:ring-warm-orange/20 text-lg font-body">
                    <SelectValue placeholder="Select session type" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value} className="font-body">
                        {duration.label} - ₹{duration.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Display */}
            {totalPrice > 0 && (
              <div className="bg-cream-bg p-6 border-2 border-warm-orange">
                <div className="flex justify-between items-center">
                  <span className="font-body font-medium text-slate-blue text-lg">
                    Total Amount:
                  </span>
                  <span className="text-2xl font-heading font-semibold text-warm-orange">₹{totalPrice}</span>
                </div>
                <p className="text-sm text-slate-blue/80 mt-2 font-body">Rate reference: ₹1,000/hr (₹500 for 30 min)</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="bg-whatsapp-green hover:bg-slate-blue text-white font-heading font-medium py-6 px-12 text-xl transition-all duration-300 w-full md:w-auto"
              >
                Book 30-min Quick Reset
              </Button>
            </div>
            
            <p className="text-sm text-center text-slate-blue/60 font-body">
              You'll confirm via WhatsApp. We'll reply quickly with a calendar invite.
            </p>
          </form>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
  );
}