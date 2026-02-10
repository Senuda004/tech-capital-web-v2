"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

const ClientCompanies = () => {
  // Placeholder companies - you can replace with actual client logos
  const companies = [
    { name: "Microsoft", logo: "https://via.placeholder.com/150x60/4A90E2/FFFFFF?text=Microsoft" },
    { name: "Amazon", logo: "https://via.placeholder.com/150x60/FF9900/FFFFFF?text=Amazon" },
    { name: "Google", logo: "https://via.placeholder.com/150x60/4285F4/FFFFFF?text=Google" },
    { name: "IBM", logo: "https://via.placeholder.com/150x60/054ADA/FFFFFF?text=IBM" },
    { name: "Oracle", logo: "https://via.placeholder.com/150x60/F80000/FFFFFF?text=Oracle" },
    { name: "Salesforce", logo: "https://via.placeholder.com/150x60/00A1E0/FFFFFF?text=Salesforce" },
    { name: "SAP", logo: "https://via.placeholder.com/150x60/0FAAFF/FFFFFF?text=SAP" },
    { name: "Cisco", logo: "https://via.placeholder.com/150x60/1BA0D7/FFFFFF?text=Cisco" },
    { name: "Dell", logo: "https://via.placeholder.com/150x60/007DB8/FFFFFF?text=Dell" },
    { name: "HP", logo: "https://via.placeholder.com/150x60/0096D6/FFFFFF?text=HP" },
    { name: "Intel", logo: "https://via.placeholder.com/150x60/0071C5/FFFFFF?text=Intel" },
    { name: "Adobe", logo: "https://via.placeholder.com/150x60/FF0000/FFFFFF?text=Adobe" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with some of the world's most innovative companies
          </p>
        </AnimatedSection>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full h-24 flex items-center justify-center border border-gray-200 hover:border-primary-200">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
              <p className="text-gray-600 font-medium">Industries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Client Retention Rate</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientCompanies;
