import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, BarChart, Globe, Bell, Zap, CheckCircle } from 'lucide-react';
import ScheduleModal from '../../components/UI/ScheduleModal';
import { useState } from 'react';

const RealTimeMonitoringPage: React.FC = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);
  // Mock data
  const monitoringStats = [
    { label: 'Data Points Collected', value: '2.4M+', icon: <BarChart className="h-6 w-6 text-blue-500" /> },
    { label: 'Update Frequency', value: 'Real-time', icon: <Clock className="h-6 w-6 text-blue-500" /> },
    { label: 'Global Locations', value: '180+', icon: <Globe className="h-6 w-6 text-blue-500" /> },
    { label: 'Alert Response Time', value: '<30 sec', icon: <Bell className="h-6 w-6 text-blue-500" /> },
  ];

  const features = [
    {
      icon: <Activity className="h-8 w-8 text-blue-500" />,
      title: 'Live Carbon Tracking',
      description: 'Monitor carbon emissions from all sources in real-time, with updates every 30 seconds.'
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-500" />,
      title: 'Instant Alerts',
      description: 'Receive notifications when emission patterns change or thresholds are exceeded.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Global Coverage',
      description: 'Track emissions across your entire supply chain, regardless of geographic location.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'Low Latency',
      description: 'Our architecture ensures minimal delay between data collection and visualization.'
    }
  ];

  const benefits = [
    'Immediate visibility into carbon emission spikes',
    'Rapid response to sustainability issues',
    'Track the impact of reduction initiatives in real-time',
    'Identify patterns and trends as they emerge',
    'Validate the effectiveness of sustainability measures instantly',
    'Share live dashboards with stakeholders and executives'
  ];

  // testimonials removed as requested

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Real-Time
                </span> Carbon Emission Monitoring
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gain unprecedented visibility into your carbon footprint with continuous, 
                up-to-the-minute monitoring across your entire organization.
              </p>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              {/* Live monitoring dashboard mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-xl opacity-50 blur-xl"></div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gray-800 px-4 py-3 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white text-sm mx-auto">Real-Time Carbon Monitoring Dashboard</div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {monitoringStats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center">
                          <div className="mr-3">{stat.icon}</div>
                          <div>
                            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mock activity graph */}
                    <div className="h-40 w-full bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-xs text-gray-500 mb-2">Carbon Emissions (Last 24 hours)</div>
                      <div className="relative h-28">
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-full">
                          {[35, 28, 42, 30, 45, 35, 55, 40, 48, 40, 42, 50].map((value, i) => (
                            <div
                              key={i}
                              className="bg-blue-500 w-full mx-0.5 rounded-sm opacity-80"
                              style={{ height: `${value}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="flex justify-between text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                        <span className="text-gray-600">System Operational</span>
                      </div>
                      <div className="text-gray-500">Last Update: Just now</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Monitoring Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our real-time monitoring platform provides comprehensive visibility and instant 
              alerts to help you stay on top of your carbon emissions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Real-Time Monitoring Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform uses advanced IoT sensors, API integrations, and AI to provide 
              continuous monitoring of your carbon emissions.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Collection</h3>
                <p className="text-gray-600 text-sm">
                  IoT sensors and integrations gather data from across your operations
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing</h3>
                <p className="text-gray-600 text-sm">
                  Our edge computing network processes data with minimal latency
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Analysis</h3>
                <p className="text-gray-600 text-sm">
                  AI algorithms analyze emissions patterns and detect anomalies
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Visualization</h3>
                <p className="text-gray-600 text-sm">
                  Results are displayed in real-time dashboards with actionable insights
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Real-time carbon monitoring doesn't just help the environment - it provides 
                tangible business advantages and operational improvements.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
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
              {/* Monitoring impact visualization */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Impact of Real-Time Monitoring</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Emission Reduction</span>
                      <span className="font-bold text-blue-600">32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Response Time Improvement</span>
                      <span className="font-bold text-blue-600">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Operational Efficiency</span>
                      <span className="font-bold text-blue-600">41%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '41%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Reporting Time Saved</span>
                      <span className="font-bold text-blue-600">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-6">
                  Based on average results from our enterprise customers after 6 months of implementation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials removed */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Monitor in Real-Time?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get started with our real-time carbon monitoring platform and take control 
              of your environmental impact today.
            </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={openScheduleModal}
                className="px-8 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Schedule a Demo
              </button>
             
            </div>
          </motion.div>
        </div>
      </section>
      <ScheduleModal isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
    </div>
  );
};

export default RealTimeMonitoringPage;