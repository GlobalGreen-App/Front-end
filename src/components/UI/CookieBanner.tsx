import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface CookieBannerProps {
  // Optional props to customize banner (can be extended as needed)
  privacyPolicyUrl?: string;
  cookiePolicyUrl?: string;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ 
  privacyPolicyUrl = "/privacy", 
  cookiePolicyUrl = "/cookies" 
}) => {
  // State to track if banner should be visible
  const [isVisible, setIsVisible] = useState(false);
  
  // Check for existing consent on component mount
  useEffect(() => {
    // Check if user has previously accepted or rejected cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    
    // Only show banner if no previous consent recorded
    if (!cookieConsent) {
      // Small delay for better UX - show banner after page loads
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Handle user accepting cookies
  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };
  
  // Handle user rejecting cookies (necessary cookies only)
  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };
  
  // Animation variants
  const bannerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring" as const, 
        damping: 25, 
        stiffness: 500 
      } 
    },
    exit: { 
      y: 100, 
      opacity: 0, 
      transition: { 
        duration: 0.3 
      } 
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Cookie Policy
                </h3>
                <p className="text-gray-600">
                  We use cookies to improve your experience and analyze website traffic. 
                  By clicking "Accept All", you consent to our use of cookies as described in our 
                  <a 
                    href={cookiePolicyUrl} 
                    className="text-primary-600 hover:underline mx-1 inline-flex items-center"
                  >
                    Cookie Policy
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  and
                  <a 
                    href={privacyPolicyUrl} 
                    className="text-primary-600 hover:underline mx-1 inline-flex items-center"
                  >
                    Privacy Policy
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 items-center">
                <motion.button
                  onClick={handleReject}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Necessary Only
                </motion.button>
                
                <motion.button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Accept All
                </motion.button>
                
                <button
                  onClick={handleReject} 
                  className="rounded-full p-1 text-gray-500 hover:bg-gray-100 md:hidden"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <button
                onClick={handleReject} 
                className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hidden md:block"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;