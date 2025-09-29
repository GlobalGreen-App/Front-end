import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, Share2, BarChart2, Check, Lock, FileCheck, FileCog, Clock, FileSearch, FileSpreadsheet } from 'lucide-react';

const ReportsPage: React.FC = () => {
  const navigate = useNavigate();
  // Mock data
  const reportTypes = [
    { 
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      title: 'Carbon Disclosure Reports',
      description: 'Comprehensive reports formatted for CDP, GRI, TCFD, and other major disclosure frameworks',
      formats: ['PDF', 'Word', 'HTML']
    },
    { 
      icon: <BarChart2 className="h-8 w-8 text-teal-500" />,
      title: 'Executive Dashboards',
      description: 'High-level summaries for leadership teams with key metrics and performance indicators',
      formats: ['PDF', 'PowerPoint', 'Interactive']
    },
    { 
      icon: <FileSpreadsheet className="h-8 w-8 text-teal-500" />,
      title: 'Detailed Data Exports',
      description: 'Raw data exports for detailed analysis and integration with other systems',
      formats: ['Excel', 'CSV', 'JSON']
    },
    { 
      icon: <FileCog className="h-8 w-8 text-teal-500" />,
      title: 'Compliance Reports',
      description: 'Regulatory compliance reports tailored to specific jurisdictions and requirements',
      formats: ['PDF', 'Word', 'XML']
    }
  ];

  const features = [
    'Automated report generation on customizable schedules',
    'Multiple export formats including PDF, Excel, and interactive dashboards',
    'Customizable templates with your branding and design preferences',
    'Data validation and quality checks before report generation',
    'Secure sharing options with role-based access controls',
    'Historical report archiving and version control',
    'Interactive elements for digital report formats',
    'Integration with major ESG reporting frameworks'
  ];

  const complianceFrameworks = [
    {
      name: 'Carbon Disclosure Project (CDP)',
      description: 'Standardized reports for the global CDP environmental disclosure system',
      iconPath: '/images/Carbon Disclosure Project(report).svg'
    },
    {
      name: 'Task Force on Climate-related Financial Disclosures (TCFD)',
      description: 'Reports aligned with TCFD recommendations for climate-related financial risk',
      iconPath: '/images/Task Force (report).svg'
    },
    {
      name: 'Global Reporting Initiative (GRI)',
      description: 'Sustainability reports following GRI standards for comprehensive ESG reporting',
      iconPath: '/images/Global Reporting Initiative (reports).svg'
    },
    {
      name: 'Sustainability Accounting Standards Board (SASB)',
      description: 'Industry-specific sustainability accounting standards for investors',
      iconPath: '/images/Sustainability Accounting Standards Board(reports).svg'
    },
    {
      name: 'EU Corporate Sustainability Reporting Directive (CSRD)',
      description: 'Reports compliant with European sustainability reporting requirements',
      iconPath: '/images/EU Corporate Sustainability Reporting Directive(reports).svg'
    }
  ];

  // testimonials removed as requested

  return (
    <div className="pt-16 sm:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                  Exportable
                </span> Reports & Dashboards
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Transform your carbon data into professional reports and interactive dashboards 
                for stakeholders, regulators, and decision-makers.
              </p>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              {/* Report mockup */}
              <div className="relative max-w-full">
                <div className="absolute -inset-4 bg-teal-100 rounded-xl opacity-50 blur-xl hidden sm:block"></div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-full">
                  <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white text-sm">Carbon Footprint Report</div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-5 overflow-x-auto max-w-full">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-bold text-gray-800">2023 Carbon Disclosure Report</h2>
                      <span className="px-2 py-1 bg-green-100 rounded text-xs text-green-700">Published</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Total Carbon Emissions</div>
                        <div className="text-xl font-bold text-gray-800">12,480 <span className="text-sm font-normal text-gray-500">tCO₂e</span></div>
                        <div className="flex items-center text-xs text-green-600 mt-1">
                          <BarChart2 className="h-3 w-3 mr-1" />
                          <span>-8.5% from previous year</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-700">Report Sections</div>
                        <div className="space-y-1">
                          {['Executive Summary', 'Methodology', 'Emissions Data', 'Reduction Initiatives', 'Future Targets'].map((section, i) => (
                            <div key={i} className="flex items-center">
                              <Check className="h-4 w-4 text-teal-500 mr-2" />
                              <span className="text-sm text-gray-600">{section}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-700">Available Formats</div>
                        <div className="flex space-x-2">
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">PDF</span>
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Excel</span>
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Interactive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-5 py-3 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Generated: May 15, 2023</span>
                    </div>
                    <button className="w-full sm:w-auto text-sm text-teal-600 font-medium">Download</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Report Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform generates a wide range of report formats to meet the needs of 
              different stakeholders and reporting requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reportTypes.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-teal-50 rounded-lg inline-block">
                  {report.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{report.title}</h3>
                <p className="text-gray-600 mb-4">{report.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Available Formats:</h4>
                  <div className="flex flex-wrap gap-2">
                    {report.formats.map((format, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{format}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Reporting Features</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our reporting engine makes it easy to create professional, 
                customizable reports for all your sustainability needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-teal-500" />
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
              {/* Report generation process visualization */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Report Generation Process</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <FileSearch className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">Select Data & Template</h4>
                      <p className="text-sm text-gray-600">Choose the data sources, date ranges, and report template</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <FileCog className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">Customize & Configure</h4>
                      <p className="text-sm text-gray-600">Personalize the report with your branding and select sections to include</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <FileCheck className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">Review & Validate</h4>
                      <p className="text-sm text-gray-600">Preview the report and validate data accuracy before finalization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <Share2 className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">Export & Share</h4>
                      <p className="text-sm text-gray-600">Generate the final report in your preferred format and share securely</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Framework Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our reports are designed to meet the requirements of major sustainability 
              reporting frameworks and standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-teal-100 rounded-md mr-4 flex items-center justify-center">
                    {framework.iconPath ? (
                      <img src={framework.iconPath} alt={`${framework.name} logo`} className="h-6 w-6 object-contain" />
                    ) : (
                      <Lock className="h-5 w-5 text-teal-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800">{framework.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Digital Reports</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Beyond static PDFs, our platform generates interactive digital reports 
                that allow stakeholders to explore and analyze data.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Drill-Down Capabilities</h4>
                    <p className="text-sm text-gray-600">Allow users to click through high-level summaries to detailed underlying data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Filter & Search</h4>
                    <p className="text-sm text-gray-600">Enable users to filter data by department, time period, or emission source</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Custom Visualizations</h4>
                    <p className="text-sm text-gray-600">Users can create custom charts and graphs based on the data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Secure Access Controls</h4>
                    <p className="text-sm text-gray-600">Role-based permissions control who can access different sections of the report</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              {/* Interactive report mockup */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                  <div className="text-white text-sm">Interactive Carbon Report</div>
                  <div className="flex space-x-3">
                    <button className="px-2 py-1 bg-gray-700 rounded text-xs text-white">Share</button>
                    <button className="px-2 py-1 bg-gray-700 rounded text-xs text-white">Export</button>
                    <button className="px-2 py-1 bg-gray-700 rounded text-xs text-white">Print</button>
                  </div>
                </div>
                
                  <div className="p-5">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800">Emission Sources Breakdown</h3>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">2023</span>
                      <span className="px-2 py-1 bg-teal-100 rounded text-xs text-teal-600">Q2</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Energy</span>
                        <span className="text-sm font-bold text-teal-600">38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Transport</span>
                        <span className="text-sm font-bold text-teal-600">27%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '27%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Manufacturing</span>
                        <span className="text-sm font-bold text-teal-600">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Other</span>
                        <span className="text-sm font-bold text-teal-600">13%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '13%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-center text-gray-500 p-2 bg-gray-50 rounded-lg mb-4">
                    <span className="font-medium text-teal-600">Interactive Feature:</span> Click on any category to see detailed breakdown
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:space-x-3 mb-4">
                    <button className="w-full sm:w-auto px-3 py-2 bg-teal-100 rounded text-sm text-teal-600 font-medium">Chart View</button>
                    <button className="w-full sm:w-auto px-3 py-2 mt-2 sm:mt-0 bg-gray-100 rounded text-sm text-gray-600">Table View</button>
                    <button className="w-full sm:w-auto px-3 py-2 mt-2 sm:mt-0 bg-gray-100 rounded text-sm text-gray-600">Map View</button>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-3">Data Last Updated: June 1, 2023</span>
                  </div>
                  <button className="text-sm text-teal-600 font-medium">Data Sources →</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials removed */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Sustainability Reporting?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Generate professional, compliant reports with just a few clicks. 
              Save time and ensure accuracy in your sustainability disclosures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-teal-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;