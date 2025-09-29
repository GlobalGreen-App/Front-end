import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Database, ServerCog, Layers, Code, Shield, CheckCircle } from 'lucide-react';

const IntegrationsPage: React.FC = () => {
  const navigate = useNavigate();
  // Mock data
  const integrationCategories = [
    { 
      icon: <Database className="h-8 w-8 text-violet-500" />,
      title: 'ERP Systems',
      description: 'Seamlessly connect with major ERP systems to automatically import operational data',
      examples: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite']
    },
    { 
      icon: <ServerCog className="h-8 w-8 text-violet-500" />,
      title: 'Supply Chain Management',
      description: 'Integrate with supply chain platforms to track emissions across your entire value chain',
      examples: ['Ariba', 'Coupa', 'Manhattan Associates', 'Blue Yonder']
    },
    { 
      icon: <Layers className="h-8 w-8 text-violet-500" />,
      title: 'IoT & Sensor Networks',
      description: 'Connect with IoT devices and sensor networks for real-time data collection',
      examples: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT']
    },
    { 
      icon: <Code className="h-8 w-8 text-violet-500" />,
      title: 'API & Custom Integrations',
      description: 'Flexible API options for custom integrations with your existing systems',
      examples: ['REST API', 'GraphQL', 'Webhooks', 'SOAP']
    }
  ];

  const benefits = [
    'Eliminate manual data entry and reduce human error',
    'Automate data collection from multiple sources',
    'Ensure data consistency across systems',
    'Reduce reporting time and administrative burden',
    'Enable real-time carbon footprint monitoring',
    'Streamline compliance and reporting processes',
    'Scale your sustainability program efficiently',
    'Improve data accuracy and reliability'
  ];

  const securityFeatures = [
    'End-to-end data encryption',
    'Role-based access controls',
    'Secure API authentication',
    'Regular security audits',
    'Compliance with data protection regulations',
    'Detailed audit logging',
    'Data residency options',
    'Single sign-on (SSO) support'
  ];

  const integrationSteps = [
    { number: 1, title: 'Connect Data Sources', description: 'Link ERPs, IoT devices, and other data systems for ingestion.' },
    { number: 2, title: 'Validate & Map', description: 'Automatically map and validate incoming data fields.' },
    { number: 3, title: 'Transform & Store', description: 'Normalize and store data securely for analysis.' },
    { number: 4, title: 'Monitor & Alert', description: 'Enable monitoring and alerting for data anomalies.' }
  ];

  return (
    <div className="pt-16 sm:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">
                  System
                </span> Integrations
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Connect our platform with your existing business systems for seamless 
                data flow and automated carbon footprint tracking.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              {/* Integration visualization */}
              <div className="relative max-w-full">
                <div className="absolute -inset-4 bg-violet-100 rounded-xl opacity-50 blur-xl hidden sm:block"></div>
                <div className="bg-white rounded-xl shadow-lg p-8 relative max-w-full overflow-x-auto">
                  {/* Central hub */}
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-violet-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">GlobalGreen</span>
                    </div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-0 right-0 flex justify-center">
                    <div className="w-0.5 h-16 bg-violet-200 absolute -top-20"></div>
                    <div className="w-0.5 h-16 bg-violet-200 absolute top-8"></div>
                    <div className="w-16 h-0.5 bg-violet-200 absolute -left-8 rotate-45"></div>
                    <div className="w-16 h-0.5 bg-violet-200 absolute -right-8 rotate-[-45deg]"></div>
                  </div>
                  
                  {/* Integration points */}
                  <div className="grid grid-cols-2 gap-4 max-w-full">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="p-2 bg-blue-100 rounded-md mr-3">
                        <Database className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">ERP Systems</div>
                        <div className="text-xs text-gray-500">SAP, Oracle...</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="p-2 bg-green-100 rounded-md mr-3">
                        <Layers className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">IoT Networks</div>
                        <div className="text-xs text-gray-500">Sensors, Devices...</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="p-2 bg-amber-100 rounded-md mr-3">
                        <ServerCog className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">SCM Systems</div>
                        <div className="text-xs text-gray-500">Logistics, Inventory...</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center">
                      <div className="p-2 bg-red-100 rounded-md mr-3">
                        <Code className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Custom APIs</div>
                        <div className="text-xs text-gray-500">REST, GraphQL...</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="text-sm font-medium text-gray-800">Seamless Data Flow</div>
                    <div className="text-xs text-gray-500">Automated, Secure, Real-time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Integration Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform connects with a wide range of business systems to automate data 
              collection and ensure accurate carbon footprint tracking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-violet-50 rounded-lg inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Supported Systems:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{example}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Integrating our platform with your existing systems delivers numerous 
                benefits for your sustainability program and operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-violet-500" />
                    </div>
                    <p className="text-gray-700 text-sm">{benefit}</p>
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
              {/* Integration benefits visualization */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Integration Impact</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Time Savings</span>
                      <div className="flex items-center">
                        <span className="text-violet-600 font-bold mr-2">85%</span>
                        <span className="text-xs text-green-600">Reduction</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-violet-500 rounded-full w-[85%]"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Manual data collection time</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Data Accuracy</span>
                      <div className="flex items-center">
                        <span className="text-violet-600 font-bold mr-2">97%</span>
                        <span className="text-xs text-green-600">Improvement</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-violet-500 rounded-full w-[97%]"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Error reduction through automation</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Reporting Frequency</span>
                      <div className="flex items-center">
                        <span className="text-violet-600 font-bold mr-2">12x</span>
                        <span className="text-xs text-green-600">Increase</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-violet-500 rounded-full w-[90%]"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">From quarterly to daily updates</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-6 italic">
                  Based on average results from enterprise customers after integration implementation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven integration methodology ensures a smooth and efficient connection 
              between your systems and our platform.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-violet-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {integrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-violet-600 font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API & Developer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Developer-Friendly API</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive API enables custom integrations and automation 
                for complete flexibility.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-violet-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">RESTful API</h4>
                    <p className="text-sm text-gray-600">Industry-standard REST API with JSON responses for easy integration</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-violet-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">GraphQL Support</h4>
                    <p className="text-sm text-gray-600">Query exactly the data you need with our flexible GraphQL endpoint</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-violet-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Webhook Events</h4>
                    <p className="text-sm text-gray-600">Subscribe to real-time events and notifications through webhooks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-violet-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">SDK Libraries</h4>
                    <p className="text-sm text-gray-600">Client libraries for major programming languages (Python, Node.js, Java, .NET)</p>
                  </div>
                </div>
                
                {/* Removed 'View API Documentation' button (dead link) */}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              {/* API code sample */}
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-xs">carbon-emissions-api.js</div>
                </div>
                <div className="p-4 font-mono text-sm overflow-x-auto text-gray-300">
                  <pre className="whitespace-pre"><code>{`// Get carbon emissions data by department
const fetchEmissionsByDepartment = async (options) => {
  const { timeframe, departments } = options;
  
  const response = await fetch(
    'https://api.globalgreen.com/v1/emissions/by-department',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${API_KEY}\`
      },
      body: JSON.stringify({
        timeframe,
        departments,
        format: 'detailed'
      })
    }
  );

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch emissions data');
  }
  
  return data;
};

// Example usage
fetchEmissionsByDepartment({
  timeframe: { start: '2023-01-01', end: '2023-06-30' },
  departments: ['manufacturing', 'logistics', 'operations']
})
  .then(data => console.log('Emissions data:', data))
  .catch(error => console.error('Error:', error));`}</code></pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our integrations are built with security as a top priority, ensuring your 
              data remains protected throughout the entire process.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="p-4 bg-violet-100 rounded-full">
              <Shield className="h-16 w-16 text-violet-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-violet-500" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials removed */}

      {/* Supported Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Platforms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We integrate with a wide range of platforms and continuously add new integrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 p-4 rounded-xl flex items-center justify-center border border-gray-100"
              >
                <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Removed 'View All Integrations' button (dead action) */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-violet-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Connect Your Systems?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our integration specialists to discuss 
              how we can connect with your existing business systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-8 py-3 bg-white text-violet-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default IntegrationsPage;