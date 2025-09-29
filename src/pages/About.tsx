import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Award, ArrowRight, Globe, Leaf, Zap, CheckCircle } from 'lucide-react';
import { experts, pricingPlans } from '../data/mockData';

const About: React.FC = () => {
  const values = [
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating sustainable solutions that scale across industries and borders'
    },
    {
      icon: Leaf,
      title: 'Environmental Focus',
      description: 'Committed to reducing carbon emissions and protecting our planet'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge AI technology to solve complex sustainability challenges'
    }
  ];

  const milestones = [
    
    { year: '2023', title: ' Foundation', description: 'Released our first AI-powered carbon tracking platform' },
    { year: '2023', title: 'Beta Launch', description: 'Reached milestone of serving over 100 enterprise clients' },
    { year: '2024', title: 'Major Expansion', description: 'Expanded operations to 45+ countries worldwide' },
    { year: '2025', title: 'Global Recognition', description: 'Recognized as "Best Sustainability Tech Solution" by GreenTech Awards' },
    { year: '2025', title: 'Present Day', description: 'Launched advanced predictive analytics for carbon reduction' }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Pioneering AI for a 
              <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                {' '}Greener Future
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform how businesses understand and optimize 
              their environmental impact through innovative AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To empower businesses worldwide with AI-driven insights that make 
                sustainability measurable, actionable, and profitable. We believe 
                that environmental responsibility and business success go hand in hand.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                By providing real-time carbon footprint tracking and intelligent 
                recommendations, we help companies reduce their environmental impact 
                while improving operational efficiency and stakeholder value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.5M</div>
                  <div className="text-sm text-gray-600">Tons CO2 Reduced</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/about/mission"
                  className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video sm:aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-6xl">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Video Placeholder</div>
                  <div className="text-sm opacity-75">Our Mission Story</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped our mission to transform sustainability
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-0 sm:pl-8">
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year + index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12"
                >
                  <div className="sm:absolute sm:left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg mb-3 sm:mb-0"></div>
                  <div className="sm:ml-16 bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-gray-100 w-full">
                    <div className="flex items-start sm:items-center mb-2 gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-green-600 mr-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experts passionate about sustainability and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  {expert.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {expert.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">{expert.role}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
                  {expert.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {expert.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/about/team"
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Meet the Full Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plan Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect plan that fits your company's sustainability goals and budget
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left text-gray-700 font-semibold min-w-[200px]">Features</th>
                    {pricingPlans.map((plan) => (
                      <th 
                        key={plan.id}
                        className={`p-4 text-left min-w-[200px] ${plan.highlighted ? 'bg-green-50 border-b-2 border-green-500' : ''}`}
                      >
                        <div className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-green-700' : 'text-gray-800'}`}>
                          {plan.name}
                        </div>
                        <div className="flex items-end gap-1">
                          <span className="text-2xl font-bold">${plan.price}</span>
                          <span className="text-sm text-gray-500 mb-1">/mo</span>
                        </div>
                        {plan.highlighted && (
                          <div className="mt-1 inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                            Popular
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Data Collection Features */}
                  <tr className="border-b border-gray-200">
                    <td colSpan={4} className="p-4 bg-gray-50 font-medium text-gray-700">Data Collection</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Manual Data Upload</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Automated Data Collection</td>
                    <td className="p-4 text-center">Limited</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">IoT Device Integration</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Up to 10 devices</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Real-time Data Processing</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>

                  {/* Analytics Features */}
                  <tr className="border-b border-gray-200">
                    <td colSpan={4} className="p-4 bg-gray-50 font-medium text-gray-700">Analytics & Insights</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Basic Carbon Footprint Score</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Advanced Analytics Dashboard</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Custom</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">AI-Driven Recommendations</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Predictive Modeling</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                  </tr>

                  {/* Reporting Features */}
                  <tr className="border-b border-gray-200">
                    <td colSpan={4} className="p-4 bg-gray-50 font-medium text-gray-700">Reporting & Compliance</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Standard Reports</td>
                    <td className="p-4 text-center">Monthly</td>
                    <td className="p-4 text-center">Weekly</td>
                    <td className="p-4 text-center">Daily</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Custom Report Builder</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Regulatory Compliance Tools</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Enterprise</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Stakeholder Reporting</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Limited</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>

                  {/* Support Features */}
                  <tr className="border-b border-gray-200">
                    <td colSpan={4} className="p-4 bg-gray-50 font-medium text-gray-700">Support & Services</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Customer Support</td>
                    <td className="p-4 text-center">Email</td>
                    <td className="p-4 text-center">Email & Chat</td>
                    <td className="p-4 text-center">24/7 Priority</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Onboarding Support</td>
                    <td className="p-4 text-center">Self-serve</td>
                    <td className="p-4 text-center">2 sessions</td>
                    <td className="p-4 text-center">Full white glove</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Dedicated Account Manager</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Custom Integration Support</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Full</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className={`inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 rounded-lg font-semibold shadow-sm ${
                      plan.highlighted
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-all duration-300`}
                  >
                    Get {plan.name}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Need a custom plan for your enterprise? 
                <Link to="/contact" className="text-green-600 font-medium ml-1 hover:underline">
                  Contact our sales team
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-green-500 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Join Us in Building a Sustainable Future
            </h2>
            <p className="text-base sm:text-xl text-green-100 mb-6 sm:mb-8">
              Partner with us to transform your supply chain and make a lasting 
              environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto justify-center items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;