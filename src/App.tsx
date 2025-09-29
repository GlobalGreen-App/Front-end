import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import ChatBot from './components/UI/ChatBot';
import CookieBanner from './components/UI/CookieBanner';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';

// Import feature sub-pages
import CarbonScore from './pages/features/CarbonScore';
import RealTimeMonitoring from './pages/features/RealTimeMonitoring';
import Recommendations from './pages/features/Recommendations';
import Analytics from './pages/features/Analytics';
import Reports from './pages/features/Reports';
import Integrations from './pages/features/Integrations';

// Import about sub-pages
import Mission from './pages/about/Mission';
import Team from './pages/about/Team';
import Advisory from './pages/about/Advisory';
import Privacy from './pages/about/Privacy';
import Cookies from './pages/about/Cookies';
import TermsOfService from './pages/about/TermsOfService';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition: any = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Enhanced transitions for blog pages
const blogPageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.98,
  },
};

const blogPageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollToTop />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/features"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Features />
                </motion.div>
              }
            />
            <Route path="/features/carbon-score" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CarbonScore />
              </motion.div>
            } />
            <Route path="/features/real-time-monitoring" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RealTimeMonitoring />
              </motion.div>
            } />
            <Route path="/features/recommendations" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Recommendations />
              </motion.div>
            } />
            <Route path="/features/analytics" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Analytics />
              </motion.div>
            } />
            <Route path="/features/reports" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Reports />
              </motion.div>
            } />
            <Route path="/features/integrations" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Integrations />
              </motion.div>
            } />
            
            <Route
              path="/about"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <About />
                </motion.div>
              }
            />
            <Route path="/about/mission" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Mission />
              </motion.div>
            } />
            <Route path="/about/team" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Team />
              </motion.div>
            } />
            <Route path="/about/advisory" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Advisory />
              </motion.div>
            } />
            <Route path="/about/privacy" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Privacy />
              </motion.div>
            } />
            
        
            <Route path="/about/cookies" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Cookies />
              </motion.div>
            } />
            <Route path="/about/terms-of-service" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TermsOfService />
              </motion.div>
            } />
            
            <Route
              path="/contact"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route path="/blog" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <BlogList />
              </motion.div>
            } />
            <Route path="/blog/:slug" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <BlogPost />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        
        <Footer />
        <ChatBot />
        <CookieBanner 
          privacyPolicyUrl="/about/privacy"
          cookiePolicyUrl="/about/cookies"
        />
      </div>
    </Router>
  );
}

export default App;