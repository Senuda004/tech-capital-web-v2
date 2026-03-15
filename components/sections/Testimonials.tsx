"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nadeesha Perera",
      role: "Operations Director",
      company: "VertexOne Solutions",
      image: "https://api.dicebear.com/9.x/personas/svg?seed=Nadeesha-Perera&backgroundColor=fde7e7,f9d5d3,fce1df",
      content: "Tech Capital handled our software development project with real discipline. They turned a manual workflow into a custom internal platform that cut processing time and gave our team much better visibility.",
      rating: 5,
    },
    {
      name: "Kasun Jayawardena",
      role: "Founder",
      company: "Lanka Commerce Lab",
      image: "https://api.dicebear.com/9.x/personas/svg?seed=Kasun-Jayawardena&backgroundColor=fde7e7,f9d5d3,fce1df",
      content: "Their web development team rebuilt our online presence from the ground up. The new site is faster, easier to manage, and it started generating stronger leads within the first few weeks.",
      rating: 5,
    },
    {
      name: "Sachini Fernando",
      role: "Product Manager",
      company: "BlueOrbit Digital",
      image: "https://api.dicebear.com/9.x/personas/svg?seed=Sachini-Fernando&backgroundColor=fde7e7,f9d5d3,fce1df",
      content: "We brought Tech Capital in for UI/UX designing, and the difference was immediate. The new user flows are cleaner, onboarding is simpler, and our customers now complete tasks with far less friction.",
      rating: 5,
    },
    {
      name: "Tharushi Silva",
      role: "CEO",
      company: "Mediva Health Systems",
      image: "https://api.dicebear.com/9.x/personas/svg?seed=Tharushi-Silva&backgroundColor=fde7e7,f9d5d3,fce1df",
      content: "The mobile app development work was excellent. Tech Capital delivered a stable app experience for both patients and staff, and they were practical and responsive throughout the rollout.",
      rating: 5,
    },
    {
      name: "Dilan Wickramasinghe",
      role: "Infrastructure Lead",
      company: "CoreGrid Analytics",
      image: "https://api.dicebear.com/9.x/personas/svg?seed=Dilan-Wickramasinghe&backgroundColor=fde7e7,f9d5d3,fce1df",
      content: "Their cloud services and cybersecurity support gave us a much stronger foundation. We migrated critical workloads cleanly, improved resilience, and tightened security without slowing down the business.",
      rating: 5,
    },
    {
      name: "Malmi Gunasekara",
      role: "Managing Director",
      company: "Axis Retail Group",
      image: "https://api.dicebear.com/9.x/personas/svg?seed=Malmi-Gunasekara&backgroundColor=fde7e7,f9d5d3,fce1df",
      content: "Their IT support and consulting team has been dependable from day one. They helped us prioritize the right systems, improve uptime, and make better technology decisions as we expanded.",
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
