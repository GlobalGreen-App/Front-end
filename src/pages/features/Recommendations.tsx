import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScheduleModal from '../../components/UI/ScheduleModal';
import { Lightbulb, Leaf, Zap, Sprout, BarChart2, Droplet, CheckCircle } from 'lucide-react';

const RecommendationsPage: React.FC = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);
  // Mock data
  const recommendationCategories = [
    { 
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: 'Energy Efficiency',
      description: 'Smart recommendations for reducing energy consumption across operations',
      improvements: ['15-40% reduction in energy usage', 'Lower operational costs', 'Reduced carbon footprint']
    },
    { 
      icon: <Leaf className="h-8 w-8 text-amber-500" />,
      title: 'Supply Chain Optimization',
      description: 'Optimize your supply chain for sustainability and efficiency',
      improvements: ['Reduced transport emissions', 'Optimized logistics routes', 'Supplier sustainability scoring']
    },
    { 
      icon: <Sprout className="h-8 w-8 text-amber-500" />,
      title: 'Sustainable Materials',
      description: 'Recommendations for eco-friendly material alternatives',
      improvements: ['Lower embodied carbon', 'Reduced environmental impact', 'Enhanced brand reputation']
    },
    { 
      icon: <BarChart2 className="h-8 w-8 text-amber-500" />,
      title: 'Operational Efficiency',
      description: 'Process optimizations that reduce waste and emissions',
      improvements: ['Streamlined workflows', 'Reduced resource consumption', 'Improved operational efficiency']
    },
    { 
      icon: <Droplet className="h-8 w-8 text-amber-500" />,
      title: 'Resource Conservation',
      description: 'Smart recommendations for water and resource usage',
      improvements: ['Reduced water consumption', 'Waste reduction strategies', 'Circular economy approaches']
    }
  ];

  const features = [
    'AI-powered recommendations based on your unique operations',
    'Prioritized actions with greatest impact potential',
    'ROI estimates for each recommendation',
    'Implementation difficulty assessment',
    'Automated tracking of implemented recommendations',
    'Carbon reduction forecasting',
    'Regular updates as your operations evolve',
    'Customized recommendations by department'
  ];

  const implementationProcess = [
    {
      step: 1,
      title: 'Data Analysis',
      description: 'Our AI analyzes your operational data to identify carbon reduction opportunities.'
    },
    {
      step: 2,
      title: 'Recommendation Generation',
      description: 'Personalized recommendations are created based on your industry and specific operations.'
    },
    {
      step: 3,
      title: 'Implementation & Monitoring',
      description: 'We support implementation, track progress, and iterate on recommendations to ensure measurable reductions.'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Retail Chain',
      reduction: '38%',
      timeframe: '14 months',
      actions: 'Implemented 12 key recommendations focused on logistics optimization and store energy efficiency'
    },
    {
      company: 'Manufacturing Plant',
      reduction: '45%',
      timeframe: '18 months',
      actions: 'Focused on equipment upgrades, process optimization, and renewable energy integration'
    },
    {
      company: 'Tech Company HQ',
      reduction: '29%',
      timeframe: '8 months',
      actions: 'Adopted building management system upgrades and employee commute programs'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                  Carbon Reduction
                </span> Recommendations
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Transform your sustainability strategy with AI-powered recommendations 
                tailored to your specific operations and industry context.
              </p>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              {/* Recommendation visualization */}
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-100 rounded-xl opacity-50 blur-xl"></div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-md">
                  <div className="bg-amber-600 px-4 py-3">
                    <div className="text-white font-medium">Top Carbon Reduction Recommendations</div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-start mb-2">
                        <div className="p-2 bg-amber-100 rounded-lg mr-3">
                          <Zap className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Switch to renewable energy</h3>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">High Impact</span>
                            <span className="text-gray-500">Est. 28% reduction</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ml-10">Transition facility power to renewable sources through on-site generation or green power purchasing.</p>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-start mb-2">
                        <div className="p-2 bg-amber-100 rounded-lg mr-3">
                          <Sprout className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Optimize logistics routes</h3>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded mr-2">Medium Impact</span>
                            <span className="text-gray-500">Est. 14% reduction</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ml-10">Implement AI-driven route optimization to reduce transport emissions and fuel consumption.</p>
                    </div>
                    
                    <div>
                      <div className="flex items-start mb-2">
                        <div className="p-2 bg-amber-100 rounded-lg mr-3">
                          <Lightbulb className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Smart building controls</h3>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">High Impact</span>
                            <span className="text-gray-500">Est. 19% reduction</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 ml-10">Upgrade to IoT-enabled building management systems for optimal energy usage.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500">12 more recommendations available</span>
                    <button className="text-sm text-amber-600 font-medium">View All</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommendation Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommendation Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered system provides recommendations across multiple categories 
              to address all aspects of your carbon footprint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recommendationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-amber-50 rounded-lg inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <h4 className="font-medium text-gray-700 mb-2 text-sm">Key Improvements:</h4>
                <ul className="space-y-1">
                  {category.improvements.map((improvement, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Recommendation Features</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Our carbon reduction recommendation engine uses advanced AI to provide 
                actionable insights customized for your specific operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Recommendation ROI Visualization</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Renewable Energy</span>
                      <div className="flex items-center">
                        <span className="text-amber-600 font-bold mr-2">$187K</span>
                        <span className="text-xs text-green-600">Annual Savings</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-amber-500 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Implementation Cost: $450K</span>
                      <span className="text-xs text-gray-500">ROI: 2.4 years</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Process Optimization</span>
                      <div className="flex items-center">
                        <span className="text-amber-600 font-bold mr-2">$93K</span>
                        <span className="text-xs text-green-600">Annual Savings</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-amber-500 rounded-full w-11/12"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Implementation Cost: $75K</span>
                      <span className="text-xs text-gray-500">ROI: 0.8 years</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Supply Chain Adjustments</span>
                      <div className="flex items-center">
                        <span className="text-amber-600 font-bold mr-2">$142K</span>
                        <span className="text-xs text-green-600">Annual Savings</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-amber-500 rounded-full w-3/5"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Implementation Cost: $220K</span>
                      <span className="text-xs text-gray-500">ROI: 1.6 years</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-6 italic">
                  Sample ROI analysis based on typical implementation costs and savings for a mid-sized enterprise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">From Recommendation to Implementation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive process ensures recommendations translate into real-world carbon reductions.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-amber-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {implementationProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-amber-600 font-bold">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world carbon reduction achievements from organizations implementing our recommendations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{study.company}</h3>
                  <div className="text-4xl font-bold text-amber-600 mb-1">{study.reduction}</div>
                  <div className="text-gray-600">Carbon Reduction</div>
                  <div className="text-sm text-gray-500 mt-1">Achieved in {study.timeframe}</div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2 text-sm">Implementation Summary:</h4>
                  <p className="text-gray-600 text-sm">{study.actions}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials removed */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Reduce Your Carbon Footprint?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get customized, AI-powered recommendations tailored to your organization's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <button
                onClick={openScheduleModal}
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
    </div>
  );
};

export default RecommendationsPage;