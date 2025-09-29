import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import CarbonGauge from '../../components/UI/CarbonGauge';

const CarbonScorePage: React.FC = () => {
  const navigate = useNavigate();
  // Mock data
  const carbonScore = 78;
  const industryAverage = 62;
  const monthlyScores = [65, 68, 70, 72, 75, 78];
  
  const benefits = [
    'Accurate assessment of your organization\'s carbon footprint',
    'Industry-specific benchmarking and comparison',
    'AI-powered insights and personalized scores',
    'Granular breakdown by departments and activities',
    'Transparent methodology based on international standards',
    'Monthly scoring to track progress over time'
  ];

  const howItWorks = [
    {
      icon: <img src="/images/Data Collection(How Our Carbon Score Works).svg" className="h-8 w-8" alt="Data Collection" />,
      title: 'Data Collection',
      description: 'Our system collects data from your operations, supply chain, and energy usage through automated integrations.'
    },
    {
      icon: <img src="/images/(How Our Carbon Score Works).svg" className="h-8 w-8" alt="AI Analysis" />,
      title: 'AI Analysis',
      description: 'Our proprietary AI algorithms analyze your data against industry benchmarks and global standards.'
    },
    {
      icon: <img src="/images/(How Our Carbon Score Works) (3).svg" className="h-8 w-8" alt="Score Generation" />,
      title: 'Score Generation',
      description: 'A comprehensive carbon score is generated, with detailed breakdowns by category and activity.'
    },
    {
      icon: <img src="/images/(How Our Carbon Score Works) (2).svg" className="h-8 w-8" alt="Recommendations" />,
      title: 'Recommendations',
      description: 'You receive tailored recommendations to improve your score and reduce your carbon footprint.'
    }
  ];

  // testimonials removed as requested

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  AI-Powered
                </span> Carbon Footprint Score
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gain unprecedented insights into your environmental impact with our advanced 
                carbon footprint scoring system. Backed by AI and industry-specific benchmarks.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm">
                {/* Small gauge/visual */}
                <CarbonGauge score={carbonScore} />

                <div className="mt-6 grid grid-cols-1 gap-4">
                  {howItWorks.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-md">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benchmarking Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Benchmarking</h2>
              <p className="text-lg text-gray-600 mb-6">
                Understand how your organization compares to industry peers. Our database includes 
                carbon footprint data from thousands of companies across dozens of industries.
              </p>
              
              <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Your Score</span>
                  <span className="font-bold text-green-600">{carbonScore}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${carbonScore}%` }}></div>
                </div>
                
                <div className="flex justify-between mt-6 mb-2">
                  <span className="font-medium text-gray-700">Industry Average</span>
                  <span className="font-bold text-orange-500">{industryAverage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${industryAverage}%` }}></div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 italic">
                Your carbon score is {carbonScore - industryAverage} points above the industry average, 
                putting you in the top 15% of companies in your sector.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h3>
                <p className="text-gray-600 mb-6">
                  Track how your carbon score has improved over time with our monthly assessments.
                </p>
                
                <div className="h-64 relative">
                  {/* Simple chart visualization */}
                  <div className="absolute inset-0 flex items-end justify-between">
                    {monthlyScores.map((score, index) => (
                      <div key={index} className="flex flex-col items-center w-full">
                        <div 
                          className="bg-green-500 w-8 rounded-t-md transition-all duration-1000" 
                          style={{ 
                            height: `${score * 0.7}%`,
                            opacity: 0.7 + (index * 0.05)
                          }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-2">
                          Month {index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 italic mt-4">
                  Your carbon score has improved by {monthlyScores[monthlyScores.length - 1] - monthlyScores[0]} points in the last 6 months.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carbon scoring system provides numerous advantages for organizations 
              committed to sustainability and environmental responsibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            
          </motion.div>

          <div className="">{/* Testimonials removed */}</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Sustainability Strategy?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get your personalized carbon footprint score today and start your journey 
              toward more sustainable operations.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Request a Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarbonScorePage;