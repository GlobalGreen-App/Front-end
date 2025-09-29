import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const posts = [
  {
    title: 'Top 5 Ways AI Reduces Supply Chain Emissions',
    slug: 'top-5-ways-ai-reduces-supply-chain-emissions',
    excerpt: 'Discover how AI is transforming supply chain sustainability.',
    category: 'AI & Sustainability',
    date: 'September 15, 2025',
    image: '/images/5%20Ways%20to%20Cut%20Supply%20Chain%20Emissions.png'
  },
  {
    title: "ESG Reporting: What's Changing in 2026",
    slug: 'esg-reporting-whats-changing-in-2026',
    excerpt: 'Stay ahead of regulatory changes with our guide.',
    category: 'Compliance',
    date: 'September 10, 2025',
    image: '/images/How%20AI%20is%20Revolutionizing%20Carbon%20Tracking.png'
  },
  {
    title: 'Case Study: How CompanyX Reduced Emissions by 45%',
    slug: 'case-study-companyx-45-percent',
    excerpt: 'Learn how a manufacturer achieved sustainability results in 12 months.',
    category: 'Case Study',
    date: 'September 5, 2025',
    image: '/images/Why%20Real-Time%20Monitoring%20Matters%20for%20Supply%20Chains.png'
  }
];

const BlogList: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter posts based on category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory = filter === 'all' || post.category.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Available categories
  const categories = ['All', 'AI & Sustainability', 'Compliance', 'Case Study'];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4">
            INSIGHTS & NEWS
          </span>
          <h1 className="text-5xl font-bold mb-6 text-neutral-800">Latest From Our Blog</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Expert insights on sustainability, supply chain optimization, and carbon reduction strategies.
          </p>
        </motion.div>
        
        {/* Search and filter bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="text-neutral-500 h-5 w-5" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category === 'All' ? 'all' : category.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (filter === 'all' && category === 'All') || 
                    (filter === category.toLowerCase())
                      ? 'bg-primary-500 text-white' 
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Blog posts grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.slug}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-100 hover:shadow-lg transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="h-48 overflow-hidden bg-neutral-100">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="flex items-center text-xs font-medium text-primary-600 bg-primary-50 rounded-full px-3 py-1">
                      <Tag className="mr-1 h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center text-xs text-neutral-500">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center text-xs text-neutral-500">
                      <Clock className="mr-1 h-3 w-3" />
                      5 min read
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
                    <span className="text-primary-600 font-medium flex items-center">
                      Read more <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                    
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-primary-500' : 'bg-neutral-200'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-16"
          >
            <h3 className="text-xl text-neutral-600 mb-4">No articles matching your search</h3>
            <button 
              onClick={() => { setFilter('all'); setSearchTerm(''); }}
              className="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
        
        {/* Newsletter signup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="mb-6 text-primary-50">Get the latest sustainability insights delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogList;
