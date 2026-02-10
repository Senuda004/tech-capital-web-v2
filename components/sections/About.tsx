"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
    { icon: Target, value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Leading the Way in{" "}
                  <span className="text-primary">IT Excellence</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Tech Capital Managed Services is your trusted partner for comprehensive 
                  IT solutions. With over 15 years of experience, we specialize in delivering 
                  innovative technology services that drive business growth and operational efficiency.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of certified experts works tirelessly to ensure your IT infrastructure 
                  is secure, scalable, and optimized for success. We don't just provide services; 
                  we build lasting partnerships with our clients.
                </p>
                
                {/* Mission Statement */}
                <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower businesses through innovative IT solutions that enhance productivity, 
                    security, and growth while delivering exceptional service and support.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Stats */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg p-8 text-center border border-primary-100 hover:shadow-xl transition-all"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
