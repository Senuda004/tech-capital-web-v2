"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What sets Tech Capital Managed Services apart from other IT service providers?",
      answer:
        "Tech Capital Managed Services excels in delivering personalized IT solutions that align closely with our clients' business goals. Our commitment to reliability, customer satisfaction, and continuous improvement ensures that we provide superior service compared to other providers.",
    },
    {
      question: "How does Tech Capital ensure the security of its managed IT services?",
      answer:
        "We employ state-of-the-art security technologies and practices, including regular audits, compliance checks, and proactive threat detection to ensure the utmost security and integrity of our clients' data and IT infrastructure.",
    },
    {
      question: "Can Tech Capital Managed Services help my business scale its operations?",
      answer:
        "Absolutely. Our resource outsourcing and infrastructure management services are designed to be scalable to meet the growing demands of your business, helping you expand seamlessly and efficiently.",
    },
    {
      question: "What industries does Tech Capital Managed Services serve?",
      answer:
        "We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, and government. Our solutions are tailored to meet industry-specific compliance requirements and operational needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can help your business
            </p>
          </motion.div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? "text-primary" : "text-gray-400"}`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-px bg-gray-100 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
