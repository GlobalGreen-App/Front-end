import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseIcon, TrendingUp, FileBarChart, Scale, Building2, Landmark, Globe } from 'lucide-react';
import { useState } from 'react';
import ScheduleModal from '../../components/UI/ScheduleModal';

const Advisory = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-600" />,
      title: "Sustainability Strategy",
      description: "Custom roadmaps to integrate sustainability into your core business strategy, aligning environmental goals with business growth."
    },
    {
      icon: <FileBarChart className="h-8 w-8 text-teal-600" />,
      title: "Carbon Accounting & Reporting",
      description: "Expert guidance on measuring, tracking, and reporting your carbon footprint according to global standards and frameworks."
    },
    {
      icon: <Scale className="h-8 w-8 text-teal-600" />,
      title: "Regulatory Compliance",
      description: "Navigate the complex landscape of environmental regulations and ensure your business remains compliant across jurisdictions."
    },
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-teal-600" />,
      title: "ESG Integration",
      description: "Develop comprehensive Environmental, Social, and Governance frameworks that enhance your company's reputation and resilience."
    },
    {
      icon: <Building2 className="h-8 w-8 text-teal-600" />,
      title: "Sustainable Supply Chain",
      description: "Analyze and optimize your supply chain to reduce emissions and implement sustainable procurement practices."
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-600" />,
      title: "Climate Risk Assessment",
      description: "Identify and mitigate climate-related risks to your business operations, assets, and long-term strategy."
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Specialized solutions for manufacturing facilities to reduce operational emissions, optimize energy use, and implement circular economy principles.",
      clients: "Global manufacturing leaders across automotive, electronics, and consumer goods."
    },
    {
      name: "Technology",
      description: "Strategies for tech companies to address data center emissions, hardware lifecycle management, and sustainable product design.",
      clients: "Leading technology corporations, SaaS providers, and hardware manufacturers."
    },
    {
      name: "Finance",
      description: "Advisory services for financial institutions on sustainable investing, climate risk disclosure, and green finance initiatives.",
      clients: "International banks, asset managers, and insurance companies."
    },
    {
      name: "Retail & Consumer Goods",
      description: "Support for retailers and CPG companies in tackling supply chain emissions, sustainable packaging, and consumer engagement.",
      clients: "Major retail chains, e-commerce platforms, and consumer brands."
    },
    {
      name: "Energy & Utilities",
      description: "Transition planning for energy companies moving toward renewable sources and implementing carbon reduction technologies.",
      clients: "Energy producers, utility companies, and renewable energy developers."
    }
  ];

  const caseStudies = [
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Needed to reduce emissions across 12 international facilities while maintaining production efficiency.",
      solution: "Implemented real-time emissions monitoring and AI-powered recommendations, resulting in process optimizations.",
      results: "32% emissions reduction in 18 months while increasing production output by 5%."
    },
    {
      company: "TechForward Inc.",
      industry: "Technology",
      challenge: "Struggling to meet ambitious carbon neutrality goals with rapidly expanding data center footprint.",
      solution: "Comprehensive data center efficiency program combined with strategic renewable energy procurement.",
      results: "Achieved carbon neutrality for all operations one year ahead of schedule, saving $4.2M in energy costs."
    },
    {
      company: "Retail Excellence Group",
      industry: "Retail",
      challenge: "Needed to address Scope 3 emissions across a complex global supply chain with thousands of suppliers.",
      solution: "Supplier engagement program with tiered emissions requirements and collaborative reduction initiatives.",
      results: "15% reduction in supply chain emissions and improved relationships with key suppliers."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-50 opacity-70 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-teal-800 mb-6">
              Sustainability Advisory
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Expert guidance to help your organization navigate the transition to a low-carbon future.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100">
              <p className="text-xl text-gray-600">
                Our team of sustainability experts works with organizations of all sizes to develop actionable strategies for reducing emissions, meeting regulatory requirements, and building a more sustainable business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Approach
            </h2>
            
            <div className="space-y-12">
              <div className="bg-teal-50 p-8 rounded-xl shadow-sm border border-teal-100">
                <h3 className="text-2xl font-semibold text-teal-800 mb-4">Data-Driven Methodology</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We begin every advisory engagement with a comprehensive assessment of your current emissions profile, business operations, and sustainability goals. Our approach combines rigorous data analysis with industry expertise to develop strategies that deliver measurable results.
                </p>
                <p className="text-lg text-gray-700">
                  Unlike traditional consultancies, our advisory services are powered by the same advanced analytics platform that drives our software solutions, giving you access to real-time insights and predictive modeling throughout your sustainability journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
                  <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-teal-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Assess</h3>
                  <p className="text-gray-600">Comprehensive analysis of your current sustainability position, challenges, and opportunities.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
                  <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-teal-800 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan</h3>
                  <p className="text-gray-600">Develop a tailored strategy with clear targets, timelines, and implementation roadmap.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
                  <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-teal-800 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Implement</h3>
                  <p className="text-gray-600">Execute with expert guidance and access to our platform for real-time progress tracking.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Advisory Services
            </h2>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-md border border-teal-100"
                >
                  <div className="bg-teal-50 p-3 inline-block rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Industry Experience
            </h2>
            
            <div className="space-y-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-teal-100">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-3">{industry.description}</p>
                  <p className="text-sm text-gray-500"><span className="font-medium">Clients include:</span> {industry.clients}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Success Stories
            </h2>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-teal-100">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <h3 className="text-xl font-semibold text-gray-800">{study.company}</h3>
                      <p className="text-teal-600 text-sm mb-2">{study.industry}</p>
                    </div>
                    <div className="md:w-3/4 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">Results:</h4>
                        <p className="text-gray-600 font-medium">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Frameworks & Standards
            </h2>
            
            <p className="text-center text-gray-600 mb-8">
              Our advisory services align with and support implementation of leading sustainability frameworks:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">GHG Protocol</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">TCFD</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">SBTi</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">CDP</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">GRI</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">SASB</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">EU CSRD</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <Landmark className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                <p className="font-medium text-gray-800">ISSB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Sustainability Journey
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Connect with our advisory team to discuss your organization's specific challenges and goals.
            </p>
            <button onClick={() => setIsScheduleModalOpen(true)} className="inline-flex items-center bg-white text-teal-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-50 transition duration-300">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      <ScheduleModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
    </div>
  );
};

export default Advisory;