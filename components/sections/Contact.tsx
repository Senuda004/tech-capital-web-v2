"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validate credentials
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are not configured");
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_name: "Tech Capital Team", // This will be used in your template
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@techcapital.com",
      link: "mailto:info@techcapital.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business Ave, Tech City, TC 12345",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you need IT support, cloud solutions, or cybersecurity services, 
                  our team of experts is here to help. Reach out to us through any of the 
                  following channels, and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-200">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                              <p className="text-gray-600">{info.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-xl p-6 border border-primary-100"
              >
                <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-primary font-medium mt-2">24/7 Emergency Support Available</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your IT needs..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Thank you! We&apos;ll get back to you within 24 hours.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
