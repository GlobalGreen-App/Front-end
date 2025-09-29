import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Youtube, PinIcon, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Global_greenio', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61581508972438', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UC0gwJAHTWkgySVu584BODow', label: 'YouTube' },

  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
   
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/images/GlobalGreen-App.svg"
              alt="GlobalGreen App Logo"
              className="h-10 md:h-14 lg:h-18 object-contain"
              style={{ display: 'block' }}
            />
            <p className="text-gray-300 text-sm">
              Pioneering AI-powered sustainability solutions for the modern enterprise.
              Track, analyze, and optimize your supply chain carbon footprint.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features/carbon-score" className="text-gray-300 hover:text-green-400 transition-colors">Carbon Footprint Score</Link>
              </li>
              <li>
                <Link to="/features/real-time-monitoring" className="text-gray-300 hover:text-green-400 transition-colors">Real-Time Monitoring</Link>
              </li>
              <li>
                <Link to="/features/recommendations" className="text-gray-300 hover:text-green-400 transition-colors">AI Recommendations</Link>
              </li>
              <li>
                <Link to="/features/analytics" className="text-gray-300 hover:text-green-400 transition-colors">Analytics & Reports</Link>
              </li>
              <li>
                <Link to="/features/integrations" className="text-gray-300 hover:text-green-400 transition-colors">System Integrations</Link>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 GlobalGreen-App.com. All rights reserved. <Link to="/about/privacy" className="ml-2 text-gray-300 hover:text-green-400">Privacy Policy</Link> · <Link to="/about/terms-of-service" className="ml-2 text-gray-300 hover:text-green-400">Terms of Service</Link> ·
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;