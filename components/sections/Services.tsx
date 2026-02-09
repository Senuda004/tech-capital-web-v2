"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Network, 
  HeadphonesIcon,
  Settings,
  FileSearch
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate, manage, and optimize your cloud infrastructure with AWS, Azure, and Google Cloud expertise.",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"],
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data storage, backup solutions, and disaster recovery planning for business continuity.",
      features: ["Data Backup", "Disaster Recovery", "Database Optimization"],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions for seamless connectivity.",
      features: ["Network Design", "WiFi Solutions", "VPN Setup"],
    },
    {
      icon: Cpu,
      title: "IT Infrastructure",
      description: "End-to-end infrastructure management including servers, storage, and virtualization.",
      features: ["Server Management", "Virtualization", "Hardware Procurement"],
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to keep your business running smoothly.",
      features: ["Remote Support", "On-site Assistance", "Proactive Monitoring"],
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT planning and consulting to align technology with your business goals.",
      features: ["Strategy Planning", "Technology Roadmap", "Digital Transformation"],
    },
    {
      icon: FileSearch,
      title: "Compliance & Audit",
      description: "Ensure regulatory compliance and conduct thorough IT audits for risk management.",
      features: ["GDPR Compliance", "ISO Certification", "Risk Assessment"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
