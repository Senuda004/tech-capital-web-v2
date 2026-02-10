"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      content: "Tech Capital transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% in operational costs while significantly improving our system performance. Absolutely fantastic!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "GlobalFinance Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      content: "The cybersecurity solutions provided by Tech Capital have given us peace of mind. Their 24/7 monitoring and proactive approach have protected our sensitive financial data exceptionally well.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      content: "Tech Capital's team is professional, responsive, and incredibly knowledgeable. They helped us achieve full HIPAA compliance and implemented systems that our entire organization relies on daily.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Operations Manager",
      company: "RetailPro Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      content: "We've been working with Tech Capital for 3 years now. Their managed IT services have been invaluable. Response times are quick, and they always go above and beyond to solve our problems.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Founder",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
      content: "As a growing startup, we needed scalable IT solutions. Tech Capital provided exactly that. Their consulting helped us make informed decisions that positioned us for rapid growth.",
      rating: 5,
    },
    {
      name: "Robert Williams",
      role: "Head of IT",
      company: "Manufacturing Plus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      content: "The digital transformation project led by Tech Capital exceeded all expectations. Our production efficiency increased dramatically, and the ROI was visible within months.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped transform
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary-200 relative">
                <CardContent className="pt-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center opacity-50">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center pt-4 border-t border-gray-200">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
