"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2,
  Smartphone,
  Globe,
  PenTool,
  Cloud,
  Shield, 
  Wrench,
  HeadphonesIcon,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software solutions built to streamline operations, automate workflows, and support business growth.",
      features: ["Custom Applications", "Business Automation", "System Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps designed for performance, usability, and long-term scalability.",
      features: ["iOS Apps", "Android Apps", "Cross-Platform Solutions"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web platforms built to strengthen your digital presence and conversion flow.",
      features: ["Business Websites", "Web Applications", "E-commerce Solutions"],
    },
    {
      icon: PenTool,
      title: "UI/UX Designing",
      description: "User-focused interface and experience design that improves usability, engagement, and product clarity.",
      features: ["Wireframing", "Prototype Design", "User Experience Audits"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and infrastructure management across leading platforms and environments.",
      features: ["Cloud Migration", "Infrastructure Setup", "Performance Optimization"],
    },
    {
      icon: Wrench,
      title: "IT Support",
      description: "Reliable technical assistance to keep systems running efficiently and resolve day-to-day operational issues.",
      features: ["Help Desk Support", "System Troubleshooting", "On-site Assistance"],
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic guidance to align technology investments with business goals, growth plans, and operational needs.",
      features: ["Technology Roadmaps", "Digital Strategy", "Process Optimization"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security-first services to protect infrastructure, applications, and data from modern cyber threats.",
      features: ["Threat Prevention", "Security Assessments", "Compliance Support"],
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary-200 group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
