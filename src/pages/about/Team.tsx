import { motion } from 'framer-motion';
import { Globe, BookOpen } from 'lucide-react';

const Team = () => {
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

  const teamMembers = [
    {
      name: "Dr. Eliza Green",
      title: "Founder & CEO",
      image: "/images/Leadership Team.png",
      bio: "Former climate scientist with 15+ years of experience. Led international research teams before founding GlobalGreen to bring scientific rigor to corporate sustainability.",
      expertise: ["Climate Science", "Corporate Strategy", "Sustainable Business Models"],
      // social removed
    },
    {
      name: "Marcus Chen",
      title: "CTO",
      image: "/images/Leadership Team (2).png",
      bio: "AI and machine learning expert with background at leading tech companies. Pioneered GlobalGreen's predictive carbon emissions algorithms and real-time monitoring systems.",
      expertise: ["AI/ML", "Carbon Accounting", "IoT Sensors"],
      // social removed
    },
    {
      name: "Dr. Sophia Rodriguez",
      title: "Chief Science Officer",
      image: "/images/Leadership Team (3).png",
      bio: "Environmental scientist specializing in emissions modeling. Previously advised multinational corporations and governments on carbon reduction strategies.",
      expertise: ["Emissions Science", "Climate Modeling", "Policy Development"],
      // social removed
    },
    {
      name: "James Wilson",
      title: "Head of Customer Success",
      image: "/images/Leadership Team (4).png",
      bio: "Former sustainability consultant who has helped over 200 companies implement emissions reduction programs. Expert in change management and organizational transformation.",
      expertise: ["Customer Experience", "Sustainability Implementation", "Training"],
      // social removed
    },
    {
      name: "Aisha Patel",
      title: "Chief Product Officer",
      image: "/images/Leadership Team (5).png",
      bio: "Product leader with experience at top SaaS companies. Drives GlobalGreen's user-centered design approach, making complex carbon metrics accessible and actionable.",
      expertise: ["Product Strategy", "UX/UI Design", "Data Visualization"],
      // social removed
    },
    {
      name: "Dr. Robert Nakamura",
      title: "Head of Research",
      image: "/images/Leadership Team (6).png",
      bio: "Environmental engineer and former university professor. Leads GlobalGreen's research initiatives and ensures our methodologies align with the latest scientific standards.",
      expertise: ["Environmental Engineering", "Research Methods", "Academic Partnerships"],
      // social removed
    },
  ];

  const advisors = [
    {
      name: "Prof. Maria Thompson",
      title: "Climate Policy Advisor",
      organization: "Oxford University",
      bio: "Leading researcher on international climate policy frameworks and carbon trading mechanisms.",
    },
    {
      name: "Jonathan Hayes",
      title: "Corporate Sustainability Advisor",
      organization: "Former SVP of Sustainability at Fortune 100 Company",
      bio: "Implemented one of the first corporate carbon-neutral programs at scale.",
    },
    {
      name: "Dr. Li Wei",
      title: "Data Science Advisor",
      organization: "National Institute for Environmental Research",
      bio: "Specializes in large-scale environmental data modeling and analysis methodologies.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-50 opacity-70 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-800 mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Meet the experts and visionaries dedicated to transforming how businesses approach sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Leadership Team
            </h2>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100"
                >
                  <div className="h-64 w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-4">
                      {/* contact removed intentionally */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Culture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Innovative Environment</h3>
                <p className="text-gray-600">
                  We foster a culture of continuous learning and experimentation, encouraging our team to push boundaries and develop creative solutions to complex sustainability challenges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Mission-Driven</h3>
                <p className="text-gray-600">
                  Our team is united by a shared passion for environmental impact. We're motivated by the tangible difference our platform makes in reducing global carbon emissions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Collaborative Approach</h3>
                <p className="text-gray-600">
                  We believe in the power of interdisciplinary collaboration, bringing together experts in climate science, data analytics, software engineering, and business strategy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We practice what we preach by maintaining sustainable work practices, including flexible schedules, remote work options, and emphasis on personal wellbeing.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment to Diversity</h3>
              <p className="text-gray-600 mb-4">
                At GlobalGreen, we believe diverse teams build better solutions. We're committed to creating an inclusive workplace where varied perspectives and backgrounds are valued and celebrated.
              </p>
              <p className="text-gray-600">
                Our team spans multiple countries, cultures, and disciplines, reflecting the global nature of the climate challenges we're working to solve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Advisory Board
            </h2>
            
            <div className="space-y-6 mb-12">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-800">{advisor.name}</h3>
                      <p className="text-indigo-600">{advisor.title}</p>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-500 mb-2">{advisor.organization}</p>
                      <p className="text-gray-600">{advisor.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Partnerships</h3>
              <p className="text-gray-600 mb-6">
                We maintain active research partnerships with leading academic institutions around the world, collaborating on cutting-edge sustainability research and creating opportunities for the next generation of climate scientists.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <Globe className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">MIT Climate Initiative</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <BookOpen className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Oxford Sustainability Lab</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                  <Globe className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">ETH Zurich Climate Research</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              We're always looking for passionate individuals to help us build a more sustainable future.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;