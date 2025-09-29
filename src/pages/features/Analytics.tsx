import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, BarChart2, PieChart, LineChart, Calendar, Filter, CheckCircle, Database } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  const navigate = useNavigate();
  // Mock data
  const analyticsFeatures = [
    { 
      icon: <TrendingUp className="h-8 w-8 text-indigo-500" />,
      title: 'Trend Analysis',
      description: 'Track carbon emission trends over time across all aspects of your operations',
      capabilities: ['Monthly, quarterly, and yearly comparisons', 'Customizable date ranges', 'Seasonality detection']
    },
    { 
      icon: <BarChart2 className="h-8 w-8 text-indigo-500" />,
      title: 'Breakdown Analysis',
      description: 'Analyze carbon footprint by department, activity, and source',
      capabilities: ['Department-level attribution', 'Activity-based emissions analysis', 'Source categorization']
    },
    { 
      icon: <PieChart className="h-8 w-8 text-indigo-500" />,
      title: 'Comparative Analysis',
      description: 'Compare performance against industry benchmarks and your own targets',
      capabilities: ['Industry peer comparison', 'Target vs actual performance', 'Best-in-class benchmarking']
    },
    { 
      icon: <LineChart className="h-8 w-8 text-indigo-500" />,
      title: 'Predictive Analysis',
      description: 'AI-powered forecasting of future emissions based on historical patterns',
      capabilities: ['Emission forecasting', 'What-if scenario modeling', 'Reduction opportunity identification']
    }
  ];

  const dashboardFeatures = [
    'Interactive data visualizations and charts',
    'Customizable dashboards for different stakeholders',
    'Role-based access controls and permissions',
    'Export and share capabilities for reports',
    'Automated insights and anomaly detection',
    'Mobile-friendly interface for on-the-go analysis',
    'Real-time data refresh and updates',
    'Historical data archiving and retrieval'
  ];

  const insightCategories = [
    {
      title: 'Operational Insights',
      icon: <Database className="h-6 w-6 text-indigo-500" />,
      examples: [
        'Energy usage patterns across facilities',
        'Process efficiency impact on carbon footprint',
        'Seasonal variations in emissions',
        'Peak usage periods and optimization opportunities'
      ]
    },
    {
      title: 'Strategic Insights',
      icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
      examples: [
        'Long-term emission reduction trajectories',
        'ROI of sustainability initiatives',
        'Competitor benchmarking and positioning',
        'Regulatory compliance forecasting'
      ]
    },
    {
      title: 'Tactical Insights',
      icon: <Filter className="h-6 w-6 text-indigo-500" />,
      examples: [
        'Department-level emission hotspots',
        'Resource allocation opportunities',
        'Quick-win identification for rapid reduction',
        'Behavioral impact analysis'
      ]
    }
  ];

  // testimonials removed as requested

  return (
    <div className="pt-16 sm:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                  Historical Trends
                </span> & Analytics
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Harness the power of data to understand your carbon footprint, 
                identify patterns, and make informed sustainability decisions.
              </p>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              {/* Analytics dashboard mockup */}
              <div className="relative max-w-full">
                <div className="absolute -inset-4 bg-indigo-100 rounded-xl opacity-50 blur-xl hidden sm:block"></div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-full">
                  <div className="bg-gray-800 px-4 py-3 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white text-sm mx-auto">Carbon Analytics Dashboard</div>
                  </div>
                  <div className="p-4 overflow-x-auto max-w-full">
                    <div className="flex justify-between mb-4 items-center">
                      <h3 className="font-medium text-gray-800">Emission Trends (12 Months)</h3>
                      <div className="flex space-x-2">
                        <div className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Monthly</div>
                        <div className="px-2 py-1 bg-indigo-100 rounded text-xs text-indigo-600">Quarterly</div>
                        <div className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Yearly</div>
                      </div>
                    </div>
                    
                    {/* Testimonials section removed */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Total Emissions</div>
                        <div className="text-xl font-bold text-gray-800">1,240 <span className="text-sm font-normal text-gray-500">tCO₂e</span></div>
                        <div className="flex items-center text-xs text-green-600 mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>-12.5% vs prev. year</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Emissions Intensity</div>
                        <div className="text-xl font-bold text-gray-800">0.43 <span className="text-sm font-normal text-gray-500">kg/unit</span></div>
                        <div className="flex items-center text-xs text-green-600 mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>-8.7% vs prev. quarter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Analytics Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our powerful analytics platform offers a wide range of tools to help you understand
              and act on your carbon emissions data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-indigo-50 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <h4 className="font-medium text-gray-700 mb-2 text-sm">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {feature.capabilities.map((capability, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visualizations Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Dashboards</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our intuitive, customizable dashboards make it easy to visualize complex carbon 
                data and share insights across your organization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {dashboardFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-indigo-500" />
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
              {/* Dashboard visualization samples */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Emissions by Source</h3>
                  <div className="h-40 relative">
                    {/* Simple pie chart visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-28 h-28">
                        <div className="absolute inset-0 rounded-full border-8 border-indigo-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 0 100%, 0 50%)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0)' }}></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 mr-1"></div>
                          <span className="text-gray-600">Energy (42%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 mr-1"></div>
                          <span className="text-gray-600">Transport (18%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 mr-1"></div>
                          <span className="text-gray-600">Supply Chain (28%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 mr-1"></div>
                          <span className="text-gray-600">Facilities (12%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Department Breakdown</h3>
                  <div className="h-40 relative">
                    {/* Simple bar chart visualization */}
                    <div className="absolute inset-0 flex items-end justify-around px-2 pt-6 pb-10">
                      <div className="flex flex-col items-center">
                        <div className="bg-indigo-500 w-6 rounded-t-sm" style={{ height: '60%' }}></div>
                        <span className="text-xs text-gray-500 mt-1">Ops</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-indigo-500 w-6 rounded-t-sm" style={{ height: '85%' }}></div>
                        <span className="text-xs text-gray-500 mt-1">Mfg</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-indigo-500 w-6 rounded-t-sm" style={{ height: '40%' }}></div>
                        <span className="text-xs text-gray-500 mt-1">Sales</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-indigo-500 w-6 rounded-t-sm" style={{ height: '25%' }}></div>
                        <span className="text-xs text-gray-500 mt-1">Admin</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-indigo-500 w-6 rounded-t-sm" style={{ height: '55%' }}></div>
                        <span className="text-xs text-gray-500 mt-1">R&D</span>
                      </div>
                    </div>
                    <div className="absolute top-2 left-0 right-0 flex justify-end">
                      <div className="text-xs text-gray-500">Units: tCO₂e</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Monthly Comparison</h3>
                  <div className="h-40 relative">
                    {/* Simple comparison visualization */}
                    <div className="absolute inset-x-0 bottom-0 top-8 flex items-end">
                      <div className="flex-1 mx-0.5 flex items-end">
                        <div className="w-1/2 h-full relative mx-0.5">
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-300 rounded-t-sm" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-indigo-400 rounded-t-sm" style={{ height: '60%' }}></div>
                        </div>
                        <div className="w-1/2 h-full relative mx-0.5">
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-300 rounded-t-sm" style={{ height: '75%' }}></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-indigo-400 rounded-t-sm" style={{ height: '65%' }}></div>
                        </div>
                      </div>
                      <div className="flex-1 mx-0.5 flex items-end">
                        <div className="w-1/2 h-full relative mx-0.5">
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-300 rounded-t-sm" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-indigo-400 rounded-t-sm" style={{ height: '70%' }}></div>
                        </div>
                        <div className="w-1/2 h-full relative mx-0.5">
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-300 rounded-t-sm" style={{ height: '65%' }}></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-indigo-400 rounded-t-sm" style={{ height: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 left-0 right-0 flex justify-between text-xs text-gray-500">
                      <span>Q1</span>
                      <span>Q2</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-300 mr-1"></div>
                        <span className="text-gray-600">Last Year</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-400 mr-1"></div>
                        <span className="text-gray-600">This Year</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Emission Targets</h3>
                  <div className="h-40 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-500">2025 Target</span>
                          <span className="text-xs font-medium text-gray-700">68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-500">2030 Target</span>
                          <span className="text-xs font-medium text-gray-700">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-500">2050 Target</span>
                          <span className="text-xs font-medium text-gray-700">12%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 italic">
                      Percentage of 2020 baseline emissions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Actionable Insights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our analytics platform doesn't just present data—it generates valuable insights 
              to drive your sustainability strategy forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insightCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">{example}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Period Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Time Period Analysis</h2>
              <p className="text-lg text-gray-600 mb-6">
                Analyze your carbon data across any time period—from hourly to yearly—to 
                identify patterns and make informed decisions.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-indigo-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">Time Period Options</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-indigo-50 rounded-lg text-center">
                    <div className="text-sm font-medium text-indigo-700">Hourly</div>
                    <div className="text-xs text-gray-500 mt-1">Real-time analysis</div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg text-center">
                    <div className="text-sm font-medium text-indigo-700">Daily</div>
                    <div className="text-xs text-gray-500 mt-1">Day-to-day patterns</div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg text-center">
                    <div className="text-sm font-medium text-indigo-700">Weekly</div>
                    <div className="text-xs text-gray-500 mt-1">Operational cycles</div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg text-center">
                    <div className="text-sm font-medium text-indigo-700">Monthly</div>
                    <div className="text-xs text-gray-500 mt-1">Budget periods</div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg text-center">
                    <div className="text-sm font-medium text-indigo-700">Quarterly</div>
                    <div className="text-xs text-gray-500 mt-1">Reporting cycles</div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg text-center">
                    <div className="text-sm font-medium text-indigo-700">Yearly</div>
                    <div className="text-xs text-gray-500 mt-1">Long-term trends</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm italic">
                Custom date ranges also available for specific projects or initiatives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pattern Discovery</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Seasonal Variations</h4>
                    <div className="relative h-20">
                      {/* Seasonal pattern visualization */}
                      <svg className="w-full h-full" viewBox="0 0 100 40">
                        <path 
                          d="M0,20 C5,15 10,10 15,15 C20,20 25,25 30,20 C35,15 40,10 45,15 C50,20 55,25 60,20 C65,15 70,10 75,15 C80,20 85,25 90,20 C95,15 100,10 100,15" 
                          fill="none" 
                          stroke="#818CF8" 
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute bottom-0 w-full flex justify-between px-2 text-xs text-gray-400">
                        <span>Winter</span>
                        <span>Spring</span>
                        <span>Summer</span>
                        <span>Fall</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Weekly Patterns</h4>
                    <div className="relative h-20">
                      {/* Weekly pattern visualization */}
                      <div className="absolute inset-0 flex items-end justify-between">
                        {[65, 80, 85, 75, 65, 40, 30].map((value, i) => (
                          <div key={i} className="flex flex-col items-center w-full">
                            <div 
                              className="bg-indigo-400 w-4 rounded-t-sm transition-all duration-1000" 
                              style={{ height: `${value}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 w-full flex justify-between px-2 text-xs text-gray-400">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Anomaly Detection</h4>
                    <div className="relative h-20">
                      {/* Anomaly detection visualization */}
                      <svg className="w-full h-full" viewBox="0 0 100 40">
                        <path 
                          d="M0,20 C10,22 20,18 30,20 C40,22 50,18 60,20 C70,22 80,18 90,20" 
                          fill="none" 
                          stroke="#CBD5E1" 
                          strokeWidth="1"
                          strokeDasharray="2,2"
                        />
                        <path 
                          d="M0,20 C10,22 20,18 30,20 C40,22 50,5 60,20 C70,22 80,18 90,20" 
                          fill="none" 
                          stroke="#818CF8" 
                          strokeWidth="2"
                        />
                        <circle cx="50" cy="5" r="3" fill="#EF4444" />
                      </svg>
                      <div className="absolute top-3 left-0 right-0 flex justify-center">
                        <div className="px-2 py-0.5 bg-red-100 rounded text-xs text-red-600">Anomaly Detected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            
          </motion.div>

          {/* Testimonials removed */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Transform Data into Action</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Unlock the power of your carbon data with our advanced analytics platform.
              Start making data-driven sustainability decisions today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Request a Demo
              </button>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;