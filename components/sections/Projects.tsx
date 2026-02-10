"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Cloud Migration",
      client: "Fortune 500 Financial Services",
      description: "Successfully migrated legacy systems to AWS cloud infrastructure, reducing operational costs by 40% and improving system performance by 60%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      category: "Cloud Solutions",
      year: "2025",
      results: ["40% Cost Reduction", "60% Performance Boost", "Zero Downtime"],
    },
    {
      title: "Cybersecurity Overhaul",
      client: "Healthcare Provider Network",
      description: "Implemented comprehensive security infrastructure including threat detection, data encryption, and compliance frameworks for HIPAA requirements.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      category: "Cybersecurity",
      year: "2025",
      results: ["100% HIPAA Compliant", "Zero Security Breaches", "24/7 Monitoring"],
    },
    {
      title: "Digital Transformation",
      client: "Manufacturing Corporation",
      description: "End-to-end digital transformation including ERP implementation, IoT integration, and data analytics platform deployment.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      category: "IT Consulting",
      year: "2024",
      results: ["50% Efficiency Gain", "Real-time Analytics", "Automated Workflows"],
    },
    {
      title: "Network Infrastructure Redesign",
      client: "Multi-location Retail Chain",
      description: "Designed and deployed scalable network infrastructure across 50+ locations with unified management and enhanced security.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      category: "Network Solutions",
      year: "2024",
      results: ["50+ Locations", "Unified Network", "99.9% Uptime"],
    },
    {
      title: "Disaster Recovery Implementation",
      client: "E-commerce Platform",
      description: "Implemented robust disaster recovery and business continuity solutions with automated backup and failover systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Data Management",
      year: "2024",
      results: ["15-min RTO", "Automated Backup", "Business Continuity"],
    },
    {
      title: "AI-Powered Help Desk",
      client: "Technology Startup",
      description: "Developed and deployed an AI-powered IT support system, reducing ticket resolution time by 70% and improving user satisfaction.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      category: "IT Support",
      year: "2024",
      results: ["70% Faster Resolution", "95% Satisfaction", "AI-Powered"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-primary-600 font-medium">
                    {project.client}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
