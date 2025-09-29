import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Link as LinkIcon, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndSigns: React.FC = () => {
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
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
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
              <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/about" className="hover:text-primary-600 transition-colors">About</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-700">Terms and Conditions</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 mb-8"
              variants={sectionVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-primary-100 p-4 rounded-full">
                <FileText className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Terms and Conditions</h1>
                <p className="text-lg text-neutral-600 mt-2">Last updated: September 24, 2025</p>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg text-neutral-600 leading-relaxed"
              variants={sectionVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Please read these terms and conditions carefully before using Our Service.
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
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Interpretation and Definitions</h2>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Interpretation</h3>
                <p className="text-neutral-600 mb-6">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                  The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Definitions</h3>
                <p className="text-neutral-600 mb-4">For the purposes of these Terms and Conditions:</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Affiliate</strong> means an entity that controls, is controlled by or is under common 
                    control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities 
                    entitled to vote for election of directors or other managing authority.
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Country</strong> refers to: Sri Lanka
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" 
                    in this Agreement) refers to GlobalGreen-App.
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Device</strong> means any device that can access the Service such as a computer, 
                    a cellphone or a digital tablet.
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Service</strong> refers to the Website.
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Terms and Conditions</strong> (also referred as "Terms") mean these Terms and 
                    Conditions that form the entire agreement between You and the Company regarding the use of the Service.
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Third-party Social Media Service</strong> means any services or content (including data, 
                    information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
                    <strong className="text-neutral-800">Website</strong> refers to GlobalGreen-App, accessible from{' '}
                    <a 
                      href="https://globalgreen-app.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-1"
                    >
                      https://globalgreen-app.com/ <LinkIcon className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="border-l-4 border-primary-200 pl-4">
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
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Acknowledgment</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
                    These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                  </p>
                  <p>
                    Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
                    These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                  </p>
                  <p>
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of 
                    these Terms and Conditions then You may not access the Service.
                  </p>
                  <p className="bg-accent-50 border-l-4 border-accent-400 p-4 rounded">
                    <strong>Important:</strong> You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                  </p>
                  <p>
                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. 
                    Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use 
                    the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our{' '}
                    <Link to="/about/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</Link>{' '}
                    carefully before using Our Service.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Links to Other Websites</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                  </p>
                  <p>
                    The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. 
                    You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be 
                    caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                  </p>
                  <p>
                    We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Termination</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, 
                    including without limitation if You breach these Terms and Conditions.
                  </p>
                  <p>
                    Upon termination, Your right to use the Service will cease immediately.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and 
                    Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, 
                    or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, 
                    for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party 
                    hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the 
                    possibility of such damages and even if the remedy fails of its essential purpose.
                  </p>
                  <p>
                    Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of 
                    the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. 
                    To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective 
                    licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, 
                    including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise 
                    out of course of dealing, course of performance, usage or trade practice.
                  </p>
                  <p>
                    Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: 
                    (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; 
                    (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided 
                    through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, 
                    scripts, trojan horses, worms, malware, timebombs or other harmful components.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Governing Law</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. 
                    Your use of the Application may also be subject to other local, state, national, or international laws.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Disputes Resolution</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">For European Union (EU) Users</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">United States Legal Compliance</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, 
                    or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed 
                    on any United States government list of prohibited or restricted parties.
                  </p>
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

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Waiver</h3>
                <p className="text-neutral-600">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect 
                  a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute 
                  a waiver of any subsequent breach.
                </p>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Translation Interpretation</h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    These Terms and Conditions may have been translated if We have made them available to You on our Service.
                    You agree that the original English text shall prevail in the case of a dispute.
                  </p>
                </div>
              </motion.section>

              <motion.section 
                variants={sectionVariants}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to These Terms and Conditions</h2>
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
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Contact Us</h2>
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-lg border border-primary-100">
                  <p className="text-neutral-600 mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-neutral-700">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <a 
                        href="mailto:support@globalgreen-app.com" 
                        className="hover:text-primary-600 transition-colors"
                      >
                        support@globalgreen-app.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-700">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <a 
                        href="tel:0742536819" 
                        className="hover:text-primary-600 transition-colors"
                      >
                        0742536819
                      </a>
                    </div>
                  </div>
                </div>
              </motion.section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndSigns;