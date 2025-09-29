import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  Building, 
  Globe, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  MessageCircle,
  HelpCircle,
  BarChart4,
  Clock,
  ShieldCheck,
  Link
} from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import CarbonGauge from '../components/UI/CarbonGauge';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    companySize: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const TURNSTILE_SITE_KEY = (import.meta.env.VITE_TURNSTILE_SITE_KEY as string) || '';

  useEffect(() => {
    const SITE_KEY = TURNSTILE_SITE_KEY;
    if (!SITE_KEY || typeof window === 'undefined') return;

    // Load the Turnstile script if not already present
    if (!(window as any).turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (turnstileRef.current && (window as any).turnstile) {
          try {
            (window as any).turnstile.render(turnstileRef.current, {
              sitekey: SITE_KEY,
              action: 'submit',
              callback: (token: string) => setTurnstileToken(token)
            });
          } catch (e) {
            // ignore render errors
          }
        }
      };
    } else {
      try {
        if (turnstileRef.current && (window as any).turnstile) {
          (window as any).turnstile.render(turnstileRef.current, {
            sitekey: SITE_KEY,
            action: 'submit',
            callback: (token: string) => setTurnstileToken(token)
          });
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [chatMessages, setChatMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'bot', text: 'Hello! I\'m GreenBot, your sustainability assistant. How can I help you today?' }
  ]);
  const [messageInput, setMessageInput] = useState('');

  const industries = [
    'Manufacturing',
    'Retail & E-commerce',
    'Food & Beverage',
    'Technology',
    'Automotive',
    'Pharmaceuticals',
    'Logistics & Transportation',
    'Energy',
    'Construction',
    'Healthcare',
    'Finance',
    'Other'
  ];

  const companySizes = [
    '1-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const inquiryTypes = [
    'Demo Request',
    'Partnership Inquiry',
    'Technical Support',
    'Pricing Information',
    'Integration Question',
    'Other'
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Sustainability Ave, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@globalgreen-app.com',
      coords: { lat: 37.7749, lng: -122.4194 }
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Green Street, London, EC2A 4BH',
      phone: '+44 20 1234 5678',
      email: 'london@globalgreen-app.com',
      coords: { lat: 51.5074, lng: -0.1278 }
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '8 Marina View, #12-01, Singapore 018960',
      phone: '+65 6123 4567',
      email: 'singapore@globalgreen-app.com',
      coords: { lat: 1.3521, lng: 103.8198 }
    },
    {
      city: 'Berlin',
      country: 'Germany',
      address: 'Friedrichstraße 123, 10117 Berlin',
      phone: '+49 30 1234 5678',
      email: 'berlin@globalgreen-app.com',
      coords: { lat: 52.5200, lng: 13.4050 }
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we integrate GlobalGreen with our existing systems?',
      answer: 'Most companies can be up and running within 2-4 weeks. Our implementation team provides comprehensive onboarding support, including API configuration, data mapping, and user training. For enterprise clients with complex infrastructure, we offer custom integration roadmaps that ensure minimal disruption to your operations.'
    },
    {
      question: 'What security measures do you have in place to protect our data?',
      answer: 'GlobalGreen employs enterprise-grade security including SOC 2 Type II compliance, end-to-end encryption, regular penetration testing, and secure API gateways. All customer data is stored in compliance with GDPR, CCPA, and other regional regulations. We also maintain strict access controls and provide detailed audit logs for all data operations.'
    },
    {
      question: 'How accurate is your carbon footprint measurement?',
      answer: 'Our carbon accounting methodology achieves 95%+ accuracy through a combination of direct data integration, AI-powered analysis, and verification against established emission factors. We continuously update our models with the latest climate science and industry-specific benchmarks to ensure your carbon measurements meet the highest standards for corporate reporting and compliance.'
    },
    {
      question: 'Do you offer custom reporting for regulatory compliance?',
      answer: 'Yes, GlobalGreen supports all major ESG reporting frameworks including GHG Protocol, TCFD, CDP, and GRI. Our enterprise plan includes custom report builders that allow you to generate documentation for specific regulations like EU CSRD, SEC climate disclosure rules, and country-specific carbon reporting requirements.'
    },
    {
      question: 'Can we track emissions across our entire supply chain?',
      answer: 'Absolutely. Our platform specializes in Scope 3 emissions tracking, allowing you to map your entire supply chain\'s carbon footprint. We provide supplier onboarding tools, data collection templates, and collaborative reduction planning features to help you engage your suppliers in your sustainability journey.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const PROXY_URL = (import.meta.env.VITE_CONTACT_PROXY_URL as string) || '';
    const FORM_ID = (import.meta.env.VITE_FORMSPREE_FORM_ID as string) || '';
    // If a proxy URL is provided (e.g., Cloudflare Worker), prefer it. Otherwise fall back to Formspree endpoint.
    const endpoint = PROXY_URL || (FORM_ID ? `https://formspree.io/f/${FORM_ID}` : '');

    try {
      if (!endpoint) {
        throw new Error('Formspree form ID is not configured. Set VITE_FORMSPREE_FORM_ID in your .env file.');
      }

      const payload: Record<string, any> = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        companySize: formData.companySize,
        inquiryType: formData.inquiryType,
        message: formData.message
      };

      // If Turnstile is used on the client, include the token for server-side verification
      if (turnstileToken) {
        payload['cf_turnstile_token'] = turnstileToken;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const err = data?.error || data?.errors?.[0]?.message || 'Failed to send message';
        throw new Error(err);
      }

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ 
          name: '', 
          email: '', 
          company: '', 
          industry: '', 
          companySize: '',
          inquiryType: '',
          message: '' 
        });
      }, 5000);
    } catch (err: any) {
      setErrorMessage(err?.message || 'An unexpected error occurred');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    // Add user message
    setChatMessages([...chatMessages, { sender: 'user', text: messageInput }]);
    setMessageInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      const lowerCaseInput = messageInput.toLowerCase();
      
      if (lowerCaseInput.includes('demo') || lowerCaseInput.includes('schedule')) {
        botResponse = 'I\'d be happy to help you schedule a demo! When would be a good time for you? Alternatively, I can connect you with a sustainability consultant right away.';
      } else if (lowerCaseInput.includes('price') || lowerCaseInput.includes('cost') || lowerCaseInput.includes('pricing')) {
        botResponse = 'Our pricing starts at $499/month for small businesses. For your specific needs, I recommend speaking with our team to get a customized quote. Would you like me to arrange that?';
      } else if (lowerCaseInput.includes('integration') || lowerCaseInput.includes('api')) {
        botResponse = 'GlobalGreen offers seamless integration with most ERP, procurement, and logistics systems. Our API documentation is available, and we provide technical support throughout the integration process.';
      } else {
        botResponse = 'Thank you for your message. Would you like to speak with a member of our team for more detailed information about how GlobalGreen can help your organization?';
      }
      
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  // Prefill form if redirected from ScheduleModal
  const location = useLocation();
  useEffect(() => {
    const state = (location as any)?.state;
    if (state?.fromSchedule && state.formData) {
      const s = state.formData;
      setFormData(prev => ({
        ...prev,
        name: s.name || prev.name,
        email: s.email || prev.email,
        inquiryType: prev.inquiryType || 'Demo Request',
        message: `Preferred Date: ${s.date || ''} ${s.time || ''}\nPhone: ${s.phone || ''}\n\n${s.message || ''}`
      }));
      // optionally scroll to form or focus
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-100 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-72 h-72 bg-green-300 rounded-full opacity-20 -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-20 -bottom-20 -right-20"></div>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(81, 176, 119, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Build a 
              <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                {' '}Greener Supply Chain{' '}
              </span>
              Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reach out to our team for demos, partnerships, or support.
              We're here to help you transform your sustainability strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Chat Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Start Your Sustainability Journey
              </h2>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded">
                        {errorMessage}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Size
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your sustainability goals and how we can help..."
                      />
                    </div>

                    <div className="mt-4">
                      {TURNSTILE_SITE_KEY ? (
                        <div ref={turnstileRef} />
                      ) : (
                        <p className="text-sm text-gray-500">Turnstile not configured. Set `VITE_TURNSTILE_SITE_KEY` in your .env.</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Live Chat / Chatbot - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Chat with Our AI Assistant
                </h3>
                <p className="text-gray-600 mb-6">
                  Get quick answers to your questions or schedule a demo with our sustainability experts.
                </p>

                <div className="flex-grow flex flex-col overflow-hidden bg-gray-50 rounded-lg mb-4">
                  <div className="flex-grow overflow-y-auto p-4 space-y-4 max-h-[350px]">
                    {chatMessages.map((msg, index) => (
                      <div 
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-2xl p-3 ${
                            msg.sender === 'user' 
                              ? 'bg-green-600 text-white rounded-tr-none' 
                              : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleChatSubmit} className="p-3 bg-white border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </form>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    Need more detailed assistance? Talk to a human.
                  </p>
                  <div className="inline-flex items-center justify-center px-6 py-2 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices section removed per request */}

      {/* Partnerships & Enterprise Inquiries */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Enterprise & Partnership Solutions
                </h2>
                <p className="text-lg text-green-100 mb-8 leading-relaxed">
                  Looking to onboard your entire supply chain with GlobalGreen-App? Our enterprise solutions provide complete visibility across your value chain with dedicated support and custom integrations.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Building className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Multi-entity Management</h3>
                      <p className="text-green-100">Unified dashboard for all subsidiaries and suppliers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Users className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Supplier Engagement</h3>
                      <p className="text-green-100">Tools to collect emissions data from your entire supply chain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Link className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">API-First Integration</h3>
                      <p className="text-green-100">Connect with your existing ERP, procurement, and logistics systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-6 py-3 bg-white text-green-900 font-bold rounded-lg">
                  Request Enterprise Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="mb-6">
                    <CarbonGauge score={68} size={180} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Enterprise Impact</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span>Average emission reduction</span>
                        <span className="font-bold text-green-300">28%</span>
                      </div>
                      <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span>Supplier engagement rate</span>
                        <span className="font-bold text-green-300">85%</span>
                      </div>
                      <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span>Reporting compliance</span>
                        <span className="font-bold text-green-300">100%</span>
                      </div>
                      <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our platform, integration, and support.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2 + (index * 0.1) }
                }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-200 flex justify-between items-center ${
                    activeFaq === index 
                      ? 'bg-green-50 shadow-md' 
                      : 'bg-white border border-gray-200 hover:border-green-300'
                  }`}
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border-x border-b border-gray-200 rounded-b-lg">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Support
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg">
                <HelpCircle className="w-5 h-5 mr-2" />
                Support Center
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment Callout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-md p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter end={500} duration={2} suffix="+" />
                </div>
                <p className="text-gray-600">Companies Helped</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-md p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart4 className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter end={100} duration={2} suffix="k+" />
                </div>
                <p className="text-gray-600">Tons of CO₂ Reduced</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-md p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter end={20} duration={2} suffix="+" />
                </div>
                <p className="text-gray-600">Countries Supported</p>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Commitment to Sustainability
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As a carbon-neutral company, we practice what we preach. Our platform runs on renewable energy, and we invest in verified carbon offset projects to neutralize our remaining emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-8 md:mb-0"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Follow our sustainability journey and join the conversation
                </p>
                <div className="flex space-x-4">
                  <a
                    href="mailto:hello@globalgreen-app.com"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="text-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Fast Response</span>
                    </div>
                    <p className="text-sm text-gray-500">24-hour turnaround</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Secure Process</span>
                    </div>
                    <p className="text-sm text-gray-500">End-to-end encryption</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Expert Team</span>
                    </div>
                    <p className="text-sm text-gray-500">Dedicated support</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Every supply chain has an impact — 
              <br />
              let's make yours greener today.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg shadow-lg text-lg">
                Schedule a Demo
                <ArrowRight className="ml-2 w-6 h-6" />
              </div>
              
              <p className="mt-6 text-green-100">
                No commitment required. See how GlobalGreen can transform your sustainability strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;