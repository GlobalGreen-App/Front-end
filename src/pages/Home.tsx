import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ScheduleModal from '../components/UI/ScheduleModal';
import PaymentModal from '../components/UI/PaymentModal';
import {
  Activity,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  FileText,
  PieChart,
  Gauge,
  Link as LinkIcon,
  CircleDollarSign,
  ClipboardCheck,
  Award,
  Truck,
  Globe,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  MinusCircle,
  PlusCircle,
  BarChart2,
  BarChart,
  Lightbulb,
  ExternalLink,
  Clock,
  Database,
  LineChart,
  Zap,
  AlertCircle,
  Calendar,
  Quote
} from 'lucide-react';
import CarbonGauge from '../components/UI/CarbonGauge';
import TestimonialCard from '../components/UI/TestimonialCard';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import { testimonials, pricingPlans, features } from '../data/mockData';

interface FAQProps {
  question: string;
  answer: string;
  isInitiallyOpen?: boolean;
}

const FAQ: React.FC<FAQProps> = ({ question, answer, isInitiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  return (
    <motion.div
      className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="w-full p-4 flex justify-between items-center text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className="ml-4">
          {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  // State management for interactive elements
  const [demoScore, setDemoScore] = useState(75);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Modal handlers
  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);
  
  const openPaymentModal = (planId: string) => {
    setSelectedPlan(planId);
    setIsPaymentModalOpen(true);
  };
  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedPlan(null);
  };

  // Router navigate
  const navigate = useNavigate();
  // avoid unused variable lint when the variable is intentionally available for future use
  void opacity;
  void scale;
  void navigate;

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // How It Works steps
  const steps = [
    { number: 1, title: 'Connect Your Data', description: 'Integrate with existing ERP and supply chain systems', icon: '/images/Connect Your Data (how it works).svg' },
    { number: 2, title: 'AI Analysis', description: 'Our AI analyzes your supply chain for carbon emissions', icon: '/images/AI Analysis(how it works).svg' },
    { number: 3, title: 'Visualize Insights', description: 'Receive actionable insights to reduce emissions', icon: '/images/Get Insights(how it works).svg' },
    { number: 4, title: 'Optimize & Reduce', description: 'Monitor improvements and track your sustainability goals', icon: '/images/Track Progress(how it works).svg' }
  ];

  return (
    <div className="pt-20">
      {/* Schedule Consultation Modal */}
      <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
      
      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={closePaymentModal}
        planName={selectedPlan ? pricingPlans.find(p => p.id === selectedPlan)?.name || 'Starter' : 'Starter'}
        planPrice={selectedPlan ? pricingPlans.find(p => p.id === selectedPlan)?.price || 49 : 49}
        highlighted={selectedPlan ? pricingPlans.find(p => p.id === selectedPlan)?.highlighted || false : false}
      />
      
      {/* Hero Section (Above the Fold) - Section 1 */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background with network patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2322c55e' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Animated network lines */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 L100 50 M50 0 L50 100" stroke="#22C55E" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill="#22C55E" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                staggerChildren: 0.2,
              }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-clip-text text-transparent">
                    Measure and
                  </span>
                  <br />
                  <motion.span 
                    className="bg-gradient-to-r from-primary-500 to-primary-900 bg-clip-text text-transparent inline-block"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    Optimize
                  </motion.span>
                  <br />
                  <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-clip-text text-transparent">
                    Your Supply Chain Carbon Footprint
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl text-neutral-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Track emissions in real-time with AI-powered insights and make informed sustainability decisions that drive both profit and progress.

              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.a
                  href="https://app.globalgreen-app.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-900 text-white font-semibold rounded-lg shadow-lg hover:from-primary-600 hover:to-primary-900 transition-all duration-300 flex items-center justify-center"
                >
                  Analyze My Supply Chain
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </motion.a>
                
               
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-xl opacity-20"
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-100 relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Live Carbon Footprint Demo
                </h3>
                
                <div className="flex justify-center mb-6">
                  <CarbonGauge score={demoScore} size={250} />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Supplier Efficiency: {Math.round(demoScore)}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={demoScore}
                      onChange={(e) => setDemoScore(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round(demoScore * 0.8)}%
                      </div>
                      <div className="text-sm text-gray-600">Reduction Potential</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        ${Math.round(demoScore * 100)}K
                      </div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section (Step-by-Step Visual) - Section 2 */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transform your sustainability strategy with our AI-powered platform 
              in four simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-primary-100 -translate-x-1/2 hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.7,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="relative z-10 bg-white text-center p-6 rounded-xl border border-neutral-100 hover:border-primary-200 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 + index * 0.2, duration: 0.5 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md"
                  >
                    {step.number}
                  </motion.div>
                  
                  <div className="mt-8 mb-6">
                    <motion.div 
                      className="w-20 h-20 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-6"
                      whileHover={{ 
                        rotate: 5,
                        scale: 1.05,
                        backgroundColor: "#D1FAE5" // primary-100
                      }}
                    >
                      <img 
                        src={step.icon} 
                        alt={step.title} 
                        className="w-10 h-10" 
                      />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Animated callout - AI emphasis for step 2 */}
                  {step.number === 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="absolute -bottom-3 -right-3 bg-gradient-to-r from-accent-500 to-accent-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
                    >
                      AI-Powered
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Map illustration */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute inset-0 pointer-events-none opacity-5"
            >
              <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,50 Q400,20 750,50 T50,100 T750,150 T50,200 T750,250 T50,300 T750,350" 
                  stroke="#22C55E" strokeWidth="8" fill="none"/>
                <circle cx="150" cy="75" r="10" fill="#22C55E"/>
                <circle cx="650" cy="125" r="10" fill="#22C55E"/>
                <circle cx="150" cy="225" r="10" fill="#22C55E"/>
                <circle cx="650" cy="275" r="10" fill="#22C55E"/>
              </svg>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            
          </div>
        </div>
      </section>
      
      {/* Key Features Overview (Interactive Cards) - Section 3 */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our platform provides comprehensive tools to measure, analyze, and optimize 
              your supply chain's carbon footprint
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              // Handle both icon names and SVG paths
              let Icon;
              let isCustomSvg = false;
              
              if (feature.icon.startsWith('/images/')) {
                isCustomSvg = true;
              } else {
                // Map the icon name to the actual icon component
                switch (feature.icon) {
                  case 'gauge': Icon = Gauge; break;
                  case 'activity': Icon = Activity; break;
                  case 'lightbulb': Icon = PlusCircle; break;
                  case 'trending-up': Icon = TrendingUp; break;
                  case 'file-text': Icon = FileText; break;
                  case 'link': Icon = LinkIcon; break;
                  default: Icon = Gauge;
                }
              }
              
              return (
                <Link key={feature.id} to={feature.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{
                      y: -10,
                      rotateY: 5,
                      rotateX: 5,
                      z: 50,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="group bg-white rounded-xl p-8 border border-neutral-200 shadow-sm h-full transform transition-all duration-300 hover:border-primary-200 cursor-pointer"
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  >
                    <div className="relative flex items-center mb-6">
                      <div className="absolute inset-0 bg-primary-50 rounded-full transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                      <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                        {isCustomSvg ? (
                          <img 
                            src={feature.icon} 
                            alt={feature.title} 
                            className="w-8 h-8" 
                          />
                        ) : (
                          Icon && <Icon className="w-8 h-8 text-primary-600" />
                        )}
                      </div>
                      
                      <motion.div
                        className="absolute top-1 right-1 w-8 h-8 bg-neutral-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ rotate: 90 }}
                      >
                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-neutral-600">
                      {feature.description}
                    </p>

                    
                  </motion.div>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            
          </div>
        </div>
      </section>

      {/* Live Demo Preview (Enhanced) - Section 4 */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Try Our Interactive Demo
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how our platform calculates and visualizes your carbon footprint in real-time
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Interactive Carbon Footprint Dashboard</h3>
              <p className="text-neutral-600 mb-6">Adjust the sliders below to see how different factors affect your carbon footprint score and potential savings.</p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Supplier Efficiency: {Math.round(demoScore)}%</label>
                  <input type="range" min="0" max="100" value={demoScore} onChange={(e) => setDemoScore(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Transport Optimization: {Math.round(demoScore * 0.7)}%</label>
                  <input type="range" min="0" max="100" value={Math.round(demoScore * 0.7)} onChange={(e) => setDemoScore(Number(e.target.value) / 0.7)} className="w-full h-2 bg-neutral-200 rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Renewable Energy Use: {Math.round(demoScore * 0.9)}%</label>
                  <input type="range" min="0" max="100" value={Math.round(demoScore * 0.9)} onChange={(e) => setDemoScore(Number(e.target.value) / 0.9)} className="w-full h-2 bg-neutral-200 rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-accent-50 rounded-lg p-5">
                  <div className="text-sm text-accent-700 mb-1">Annual CO2 Reduction</div>
                  <div className="text-3xl font-bold text-neutral-800">{Math.round(demoScore * 125)} <span className="text-lg font-medium text-neutral-600">tons</span></div>
                </div>

                <div className="bg-primary-50 rounded-lg p-5">
                  <div className="text-sm text-primary-700 mb-1">Potential Savings</div>
                  <div className="text-3xl font-bold text-neutral-800">${Math.round(demoScore * 1250)} <span className="text-lg font-medium text-neutral-600">K</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="bg-white backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-neutral-100 relative">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Your Carbon Score</h3>
                <div className="flex justify-center mb-8">
                  <CarbonGauge score={demoScore} size={300} />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-neutral-500">Current</div>
                    <div className="text-2xl font-bold text-red-500">{Math.round((100 - demoScore) * 2.5)}</div>
                    <div className="text-xs text-neutral-500">tons CO2</div>
                  </div>

                  <div className="text-center border-l border-r border-neutral-100 px-2">
                    <div className="text-xs text-neutral-500">Potential</div>
                    <div className="text-2xl font-bold text-primary-500">{Math.round((100 - demoScore) * 0.7)}</div>
                    <div className="text-xs text-neutral-500">tons CO2</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-neutral-500">Reduction</div>
                    <div className="text-2xl font-bold text-accent-500">{Math.round(demoScore * 0.8)}%</div>
                    <div className="text-xs text-neutral-500">potential</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          
        </div>
      </section>

      {/* Benefits for Enterprises - Section 5 */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-4">
              ENTERPRISE SOLUTIONS
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Benefits for Your Business
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Our platform helps enterprises achieve sustainability goals while improving operational efficiency
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Reduce Costs',
                description: 'Lower operational expenses through optimized logistics and reduced carbon taxes',
                icon: CircleDollarSign
              },
              {
                title: 'Meet ESG Regulations',
                description: 'Stay compliant with evolving environmental regulations and reporting requirements',
                icon: ClipboardCheck
              },
              {
                title: 'Sustainable Identity',
                description: 'Enhance brand reputation as an environmental leader in your field.',
                icon: Award
              },
              {
                title: 'Optimize Logistics',
                description: 'Streamline your supply chain operations while reducing environmental impact',
                icon: Truck
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full blur-md opacity-20" />
                  <div className="w-16 h-16 relative bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-neutral-300 mb-4">
                  {benefit.description}
                </p>
                
                <motion.div
                  className="w-10 h-1 bg-primary-500 rounded"
                  whileInView={{ 
                    width: "40px",
                    transition: { delay: 0.5, duration: 0.8 }
                  }}
                  initial={{ width: "10px" }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            
          </div>
        </div>
      </section>

      {/* Sustainability Impact Metrics Section - Section 8 */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#22C55E" strokeWidth="0.5" opacity="0.3" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#22C55E" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
              GLOBAL IMPACT
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Collective Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Together with our clients, we're making a significant difference in global sustainability
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                label: 'CO2 Reduced', 
                value: 2.5, 
                suffix: 'M', 
                unit: 'tons',
                icon: Globe,
                color: 'from-green-400 to-green-600'
              },
              { 
                label: 'Companies Onboarded', 
                value: 500, 
                suffix: '+', 
                unit: 'enterprises',
                icon: Users,
                color: 'from-blue-400 to-blue-600'
              },
              { 
                label: 'Supply Chains Analyzed', 
                value: 10, 
                suffix: 'K+', 
                unit: 'globally',
                icon: Activity,
                color: 'from-purple-400 to-purple-600'
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl blur-xl opacity-20"
                  animate={{ 
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                />
                
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      className="inline-block"
                      duration={2.5}
                    />
                  </div>
                  <div className="text-gray-300 text-xl mb-1">{stat.label}</div>
                  <div className="text-green-400 text-sm">{stat.unit}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-16 max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Why Choose GlobalGreen-App Section - Section 9 */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Monitoring Makes the Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our approach revolutionizes carbon footprint tracking compared to traditional methods
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional Monitoring */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700">Traditional Monitoring</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  { text: 'Manual data collection process', icon: PlusCircle, negative: true },
                  { text: 'Quarterly or annual reporting cycles', icon: PlusCircle, negative: true },
                  { text: 'Limited visibility into supply chain', icon: PlusCircle, negative: true },
                  { text: 'Static reports with historical data', icon: PlusCircle, negative: true },
                  { text: 'Generic recommendations', icon: PlusCircle, negative: true }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <MinusCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-600">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <span className="text-gray-500 text-sm">Limited ROI & Compliance Focused</span>
              </div>
            </motion.div>
            
            {/* AI-Powered Monitoring */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">AI-Powered Monitoring</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  { text: 'Automated real-time data collection', icon: CheckCircle },
                  { text: 'Continuous monitoring and alerts', icon: CheckCircle },
                  { text: 'Complete visibility across supply chain', icon: CheckCircle },
                  { text: 'Dynamic dashboards with predictive analytics', icon: CheckCircle },
                  { text: 'Personalized AI-driven recommendations', icon: CheckCircle }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-green-100 text-center">
                <span className="text-green-600 font-medium">Maximized ROI & Strategic Advantage</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Ready to make the switch?</h4>
                <p className="text-gray-600">Our experts can guide you through the transition to AI-powered monitoring.</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300"
                onClick={openScheduleModal}
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Latest From Our Blog</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Expert insights on sustainability, supply chain optimization, and carbon reduction</p>
          </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { slug: 'top-5-ways-ai-reduces-supply-chain-emissions', title: 'Top 5 Ways AI Reduces Supply Chain Emissions', excerpt: 'Discover how AI is transforming supply chain sustainability.', category: 'AI & Sustainability', date: 'September 15, 2025', image: '/images/5%20Ways%20to%20Cut%20Supply%20Chain%20Emissions.png' },
              { slug: 'esg-reporting-whats-changing-in-2026', title: 'How AI is Revolutionizing Carbon Tracking', excerpt: 'Stay ahead of regulatory changes with our guide.', category: 'Compliance', date: 'September 10, 2025', image: '/images/How%20AI%20is%20Revolutionizing%20Carbon%20Tracking.png' },
              { slug: 'case-study-companyx-45-percent', title: 'Why Real-Time Monitoring Matters for Supply Chains', excerpt: 'Learn how a manufacturer achieved sustainability results in 12 months.', category: 'Case Study', date: 'September 5, 2025', image: '/images/Why%20Real-Time%20Monitoring%20Matters%20for%20Supply%20Chains.png' }
            ].map((post, index) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-100 group-hover:shadow-lg transition-shadow duration-200">
                    <div className="h-48 overflow-hidden bg-neutral-100">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4"><span className="text-xs font-medium text-primary-600 bg-primary-50 rounded-full px-3 py-1">{post.category}</span><span className="text-xs text-neutral-500 ml-2">{post.date}</span></div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{post.title}</h3>
                    <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                    <div className="pt-4 border-t border-neutral-100"><span className="text-primary-600 font-medium flex items-center">Read more <ArrowRight className="ml-2 w-4 h-4" /></span></div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center"><Link to="/blog"></Link></div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-700 opacity-90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-10">
            <span className="inline-block px-4 py-1 bg-white bg-opacity-20 text-white text-sm font-semibold rounded-full backdrop-blur-sm mb-6">TAKE ACTION TODAY</span>
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Measure Your Supply Chain Footprint?</h2>
            <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto">Join hundreds of forward-thinking companies already optimizing their supply chains for sustainability and profitability.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-xl hover:bg-primary-50 transition-all duration-300">
                Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
                Schedule a Demo <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-white text-left">
                <p className="font-medium">Join 500+ companies reducing their carbon footprint</p>
                <p className="text-sm opacity-80">New companies joining every day</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="400" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="500" cy="500" r="300" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="500" cy="500" r="200" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="500" cy="500" r="100" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </section>
      
      {/* Pricing Plans Section - New Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4">PRICING</span>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Simple, Predictable Pricing</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Plans built for teams of all sizes — scale as you grow.</p>
          </motion.div>
          
          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="flex items-center justify-center mb-10"
          >
            <div className="bg-neutral-100 p-1 rounded-lg inline-flex items-center">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`py-2 px-4 font-medium rounded-md ${billingCycle === 'monthly' ? 'bg-white text-neutral-800 shadow-sm' : 'text-neutral-600'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`py-2 px-4 font-medium rounded-md ${billingCycle === 'yearly' ? 'bg-white text-neutral-800 shadow-sm' : 'text-neutral-600'}`}
              >
                Yearly
              </button>
            </div>
            <div className="ml-3 bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Save 20%</div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.div 
                key={plan.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4 }} 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-xl border ${
                  plan.highlighted 
                    ? 'border-primary-300 bg-gradient-to-b from-primary-50 to-white shadow-lg' 
                    : 'border-neutral-100 bg-white hover:border-neutral-300 hover:shadow-md'
                } transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900">{plan.name}</h3>
                  {plan.highlighted && (
                    <div className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex items-end">
                    {/* Display price according to billing cycle; yearly shows annual price divided by 12 for visual parity, and shows /yr */}
                    {billingCycle === 'monthly' ? (
                      <>
                        <span className="text-3xl font-bold text-neutral-900">${plan.price}</span>
                        <span className="text-sm text-neutral-500 ml-1 mb-1">/mo</span>
                      </>
                    ) : (
                      // annual price with 20% discount
                      <>
                        <span className="text-3xl font-bold text-neutral-900">${Math.round(plan.price * 12 * 0.8)}</span>
                        <span className="text-sm text-neutral-500 ml-1 mb-1">/yr</span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-neutral-500">{billingCycle === 'monthly' ? 'billed monthly' : 'billed annually (20% off)'}</div>
                </div>

                <ul className="mb-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                      </div>
                      <span className="text-neutral-700">{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => openPaymentModal(plan.id)}
                      className={`inline-flex items-center justify-center w-full px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                        plan.highlighted 
                          ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg' 
                          : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
                
                {plan.highlighted && (
                  <div className="mt-4 text-center">
                    <span className="text-xs text-neutral-500">30-day money back guarantee</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Enterprise Custom Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-neutral-50 to-accent-50 p-8 rounded-xl border border-accent-100"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Need a custom solution?</h3>
                <p className="text-neutral-600">Enterprise plans with dedicated support, custom integrations, and advanced features.</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
               
              </motion.div>
            </div>
          </motion.div>
          
          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Frequently Asked Questions</h3>
              <p className="text-neutral-600">Everything you need to know about our pricing plans</p>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  question: "Can I change plans later?", 
                  answer: "Yes! You can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. When you downgrade, the new price will take effect on your next billing date." 
                },
                { 
                  question: "What payment methods do you accept?", 
                  answer: "We accept all major credit cards (Visa, MasterCard, American Express) and invoice payments for annual enterprise plans."
                },
                { 
                  question: "Is there a free trial available?", 
                  answer: "Yes! We offer a 14-day free trial on all our plans. No credit card required to get started."
                },
                { 
                  question: "What's included in the onboarding support?", 
                  answer: "Professional and Enterprise plans include personalized onboarding sessions with our sustainability experts to help you configure the platform, connect your data sources, and create your first dashboards."
                }
              ].map((faq, index) => (
                <FAQ 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isInitiallyOpen={index === 0}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-neutral-600">
                Have more questions about our pricing?{' '}
                <Link to="/contact" className="text-primary-600 font-medium hover:underline">
                  Contact our sales team
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials Section - New Section */}
      <section className="py-20 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real results from companies that transformed their sustainability efforts
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  company: "EcoTech Manufacturing",
                  logo: '/images/testimonial.png',
                  quote: "GlobalGreen-App helped us reduce our carbon emissions by 32% in just 12 months while identifying over $1.2M in supply chain cost savings.",
                  author: "Maria Chen",
                  title: "Chief Sustainability Officer",
                  impact: "32% Emissions Reduction"
                },
                {
                  company: "OceanBlue Logistics",
                  logo: '/images/testimonial (3).png',
                  quote: "The real-time monitoring capabilities allowed us to spot inefficiencies in our global shipping routes that we'd been missing for years.",
                  author: "James Reynolds",
                  title: "VP of Operations",
                  impact: "28% Fuel Savings"
                },
                {
                  company: "GreenFields Agricultural",
                  logo: '/images/testimonial (2).png',
                  quote: "The AI recommendations have transformed how we approach sustainability. We're now meeting our ESG targets a full year ahead of schedule.",
                  author: "Sophia Williams",
                  title: "Sustainability Director",
                  impact: "45% Reporting Time Saved"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-neutral-100 flex flex-col h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold mr-4 overflow-hidden">
                      <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">{testimonial.company}</h3>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <div className="text-primary-600 mb-2">
                      <Quote className="w-8 h-8 opacity-50" />
                    </div>
                    <p className="text-neutral-700 italic">{testimonial.quote}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-neutral-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                        <p className="text-sm text-neutral-500">{testimonial.title}</p>
                      </div>
                      <div className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                        {testimonial.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              
            </motion.div>
          </div>
        </div>
      </section>
      
     
    </div>
  );
};

export default Home;
