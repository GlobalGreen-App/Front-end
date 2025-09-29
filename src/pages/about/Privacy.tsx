import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Eye, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="flex items-center gap-2 text-sm text-neutral-600 mb-6"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-700">Privacy Policy</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 mb-8"
              variants={sectionVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
                <div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Privacy Policy</h1>
                <p className="text-lg text-neutral-600 mt-2">Last updated: September 26, 2025</p>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg text-neutral-600 leading-relaxed"
              variants={sectionVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="prose prose-lg prose-neutral max-w-none">
              
              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Introduction
                </h2>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  GlobalGreen-App.com ("we," "our," or "us") is committed to protecting and respecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website and use our services.
                </p>

                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                  please do not access or use our services.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Definitions</h3>
                <p className="text-neutral-600 mb-4">For the purposes of this Privacy Policy:</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Company</strong> (referred to as "the Company", "we", "us" or "our") 
                    refers to GlobalGreen-App.com.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Service</strong> refers to the website and related services provided by the Company.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Personal Data</strong> means any information that relates to an identified 
                    or identifiable individual.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Cookies</strong> are small files that are placed on your computer, mobile device 
                    or any other device by a website, containing details of your browsing history.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Device</strong> means any device that can access the Service such as a computer, 
                    a cellphone or a digital tablet.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Usage Data</strong> refers to data collected automatically, either generated by 
                    the use of the Service or from the Service infrastructure itself.
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">Website</strong> refers to GlobalGreen-App.com, accessible from{' '}
                    <a 
                      href="https://globalgreen-app.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      https://globalgreen-app.com/
                    </a>
                  </li>
                  <li className="border-l-4 border-blue-200 pl-4">
                    <strong className="text-neutral-800">You</strong> means the individual accessing or using the Service, or the company, 
                    or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information We Collect</h2>
                <div className="space-y-6 text-neutral-600">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">Personal Information</h3>
                    <p className="mb-4">
                      We may collect personal information that you provide to us, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Account credentials (username, password)</li>
                      <li>Company information (company name, industry, size)</li>
                      <li>Payment information (processed securely through third-party payment processors)</li>
                      <li>Communication preferences and subscription information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">Usage Information</h3>
                    <p className="mb-4">
                      We automatically collect certain information when you use our services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Log data (IP address, browser type, operating system)</li>
                      <li>Device information (device type, unique device identifiers)</li>
                      <li>Usage patterns (pages viewed, time spent, click-through rates)</li>
                      <li>Location information (general geographic location based on IP address)</li>
                    </ul>
                  </div>
                  
                  <p className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <strong>Important:</strong> We do not knowingly collect personal information from children under 13. 
                    If you are under 13, please do not provide any personal information to us.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-neutral-600">
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and administrative messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, offers, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                    <li>Personalize and improve the services</li>
                  </ul>
                  <p className="mt-6">
                    We may also use your information for other purposes with your consent or as permitted by applicable law.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                    Cookies are files with a small amount of data which may include an anonymous unique identifier.
                  </p>
                  <p>
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                    if you do not accept cookies, you may not be able to use some portions of our Service.
                  </p>
                  <p>
                    We may use both session and persistent cookies to enhance user experience and analyze website traffic patterns.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Data Security
                </h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
                    to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                  <p>
                    We regularly review our security procedures and may update them as new technologies become available or as we deem necessary.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Privacy Rights</h2>
                <div className="space-y-4 text-neutral-600">
                  <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access and receive a copy of your personal information</li>
                    <li>The right to rectify inaccurate personal information</li>
                    <li>The right to erase your personal information in certain circumstances</li>
                    <li>The right to restrict processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing of your personal information</li>
                    <li>The right to withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Retention</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                    Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p>
                    We will also retain usage data for internal analysis purposes, typically for a shorter period of time.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Children's Privacy</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal 
                    information from children under 13. If we become aware that a child under 13 has provided us with personal 
                    information, we will take steps to delete such information.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has provided us with personal information, 
                    please contact us immediately.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">International Data Transfers</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. These countries may 
                    have different data protection laws.
                  </p>
                  <p>
                    We will take appropriate measures to ensure that your personal information receives an adequate level of 
                    protection in the jurisdictions in which we process it.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Third-Party Disclosure</h2>
                <div className="space-y-4 text-neutral-600">
                  <p className="mb-4">
                    We may share your information with third parties in certain circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With service providers who assist us in operating our business</li>
                    <li>When required by law or to respond to legal process</li>
                    <li>To protect our rights, property, or safety, or that of others</li>
                    <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Severability and Waiver</h2>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Severability</h3>
                <p className="text-neutral-600 mb-4">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish 
                  the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>

                <p className="text-neutral-600 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <p className="text-neutral-600">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
                  are effective when they are posted on this page.
                </p>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mb-12"
              >
                <div className="space-y-4 text-neutral-600">
                  <p>
                    We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make 
                    reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
                    will be determined at Our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. 
                    If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                <p className="text-blue-100 text-center mb-8">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <Phone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-blue-100">0742536819</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <Mail className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-blue-100">support@globalgreen-app.com</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-blue-100">34 Katugastota Road<br />Kandy</p>
                  </motion.div>
                </div>
              </motion.section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;