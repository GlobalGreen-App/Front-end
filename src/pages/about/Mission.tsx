import { motion } from 'framer-motion';
import { ArrowRight, Globe, Leaf, Heart, BarChart3, ShieldCheck, LightbulbIcon } from 'lucide-react';

const Mission = () => {
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

  const values = [
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Impact",
      description: "We're committed to creating solutions that address climate change on a global scale, transcending borders and industries."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Environmental Stewardship",
      description: "We believe in responsible use and protection of the natural environment through conservation and sustainable practices."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Passion for Sustainability",
      description: "Our team is driven by a genuine passion for creating a more sustainable future for generations to come."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Data-Driven Decisions",
      description: "We harness the power of data to drive change and empower organizations to make informed sustainability decisions."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      title: "Integrity & Transparency",
      description: "We operate with complete transparency and integrity, ensuring that our metrics and methodologies are accurate and verifiable."
    },
    {
      icon: <LightbulbIcon className="h-8 w-8 text-green-600" />,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge solutions for the most pressing environmental challenges."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-50 opacity-70 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Empowering businesses and individuals to reduce their carbon footprint through innovative technology and actionable insights.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
              <p className="text-xl italic text-gray-600">
                "We envision a world where every organization has the tools and knowledge to operate sustainably, where carbon neutrality is the standard, not the exception."
              </p>
              <p className="mt-4 text-lg font-semibold text-green-700">
                — Dr. Eliza Green, Founder & CEO
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Purpose & Vision
            </h2>
            <div className="bg-green-50 p-8 rounded-xl shadow-sm border border-green-100 mb-12">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission Statement</h3>
              <p className="text-lg text-gray-700 mb-6">
                At GlobalGreen, our mission is to accelerate the world's transition to sustainable business practices by providing powerful, accessible tools that measure, monitor, and reduce carbon emissions across organizations of all sizes.
              </p>
              <p className="text-lg text-gray-700">
                We believe that combining cutting-edge technology with environmental expertise creates the most effective path to meaningful climate action. Through our platform, we aim to demystify carbon accounting, eliminate barriers to sustainable operations, and enable every business to participate in creating a healthier planet.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Our 2030 Goals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
                <div className="text-green-600 font-bold text-5xl mb-2">1B+</div>
                <p className="text-gray-700">Tons of CO2 emissions reduced through our platform</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
                <div className="text-green-600 font-bold text-5xl mb-2">100K+</div>
                <p className="text-gray-700">Organizations empowered with carbon intelligence</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
                <div className="text-green-600 font-bold text-5xl mb-2">50+</div>
                <p className="text-gray-700">Countries with active carbon reduction programs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
                <div className="text-green-600 font-bold text-5xl mb-2">25%</div>
                <p className="text-gray-700">Average emission reduction for platform users</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Core Values
            </h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-md border border-green-100"
                >
                  <div className="bg-green-50 p-3 inline-block rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Journey
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-lg inline-block">2021</div>
                </div>
                <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Foundation</h3>
                  <p className="text-gray-600">GlobalGreen was founded by a team of climate scientists and tech innovators with a shared vision of making carbon reduction accessible to all businesses.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-lg inline-block">2022</div>
                </div>
                <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Beta Launch</h3>
                  <p className="text-gray-600">We launched our beta platform with 50 pilot companies, gathering crucial feedback and refining our carbon measurement algorithms.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-lg inline-block">2023</div>
                </div>
                <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Major Expansion</h3>
                  <p className="text-gray-600">Secured Series A funding and expanded our platform to include real-time monitoring and AI-powered recommendations. Grew to 5,000+ business customers.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-lg inline-block">2024</div>
                </div>
                <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Recognition</h3>
                  <p className="text-gray-600">Received the Green Tech Innovation Award and expanded to 25 countries. Launched enterprise-grade reporting tools for regulatory compliance.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-lg inline-block">2025</div>
                </div>
                <div className="md:w-3/4 bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Present Day</h3>
                  <p className="text-gray-600">Supporting over 50,000 organizations worldwide with our comprehensive carbon management platform, enabling measurable impact on global emissions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Creating a Sustainable Future
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Be part of the solution by implementing carbon reduction strategies in your organization.
            </p>
            <a
              href="https://app.globalgreen-app.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-50 transition duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;