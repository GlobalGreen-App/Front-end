import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, Bookmark, ThumbsUp, Calendar, ChevronUp, MessageSquare } from 'lucide-react';
import RelatedPosts from '../components/UI/RelatedPosts';
import TableOfContents from '../components/UI/TableOfContents';

// Define full post type with all properties
interface Post {
  title: string;
  content: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string;
  excerpt?: string;
  author?: string;
}

// Create a list of all blog posts for the RelatedPosts component
const allBlogPosts = [
  {
    title: 'Top 5 Ways AI Reduces Supply Chain Emissions',
    slug: 'top-5-ways-ai-reduces-supply-chain-emissions',
    excerpt: 'Discover how AI is transforming supply chain sustainability.',
    category: 'AI & Sustainability',
    date: 'September 15, 2025',
    image: 'ai-supply-chain'
  },
  {
    title: 'How AI is Revolutionizing Carbon Tracking',
    slug: 'esg-reporting-whats-changing-in-2026',
    excerpt: 'Stay ahead of regulatory changes with our guide.',
    category: 'Compliance',
    date: 'September 10, 2025',
    image: 'esg-reporting'
  },
  {
    title: 'Why Real-Time Monitoring Matters for Supply Chains',
    slug: 'case-study-companyx-45-percent',
    excerpt: 'Learn how a manufacturer achieved sustainability results in 12 months.',
    category: 'Case Study',
    date: 'September 5, 2025',
    image: 'case-study'
  }
];

const posts: Record<string, Post> = {
  'top-5-ways-ai-reduces-supply-chain-emissions': {
    title: 'Top 5 Ways AI Reduces Supply Chain Emissions',
    content: `
      <h2>How AI is Revolutionizing Carbon Tracking</h2>

      <p>In today’s world, sustainability isn’t just a buzzword; it’s a business imperative. Companies around the globe are under pressure to reduce their carbon footprint, not only for the planet but also to stay competitive and compliant with regulations. However, tracking carbon emissions across complex supply chains has traditionally been a daunting, time-consuming task.</p>

      <p>Enter AI-powered carbon tracking. Artificial intelligence is transforming the way businesses monitor, analyze, and optimize their environmental impact, making sustainability smarter, faster, and more actionable.</p>

      <h3>Real-Time Insights at Your Fingertips</h3>

      <p>Gone are the days of relying on spreadsheets and manual calculations. AI can process massive amounts of logistics and supplier data in real time, providing a clear picture of your carbon footprint across the entire supply chain. This means you can see where emissions are highest and take immediate action to reduce them.</p>

      <h3>Predictive and Actionable Recommendations</h3>

      <p>AI doesn’t just track emissions, it learns from patterns in your data. It can predict potential problem areas, suggest smarter routing for shipments, recommend energy-efficient suppliers, and highlight opportunities to cut waste. Essentially, it turns raw data into actionable sustainability strategies.</p>

      <h3>Streamlined Compliance and Reporting</h3>

      <p>Regulatory compliance can be a headache, especially when reporting emissions to authorities or stakeholders. AI simplifies this by automatically generating accurate, auditable reports. Businesses can confidently demonstrate their sustainability efforts without the usual manual effort.</p>

      <h3>Driving Business Value Through Sustainability</h3>

      <p>Beyond environmental benefits, AI-powered carbon tracking helps businesses optimize operations, reduce costs, and enhance brand reputation. Customers, investors, and partners increasingly expect companies to act responsibly, and AI gives businesses the tools to meet these expectations effectively.</p>

      <h3>The Future is Smarter and Greener</h3>

      <p>AI is no longer a futuristic concept; it’s here, actively helping companies make smarter, greener decisions. By leveraging AI for carbon tracking, businesses can not only reduce emissions but also gain a competitive edge in an increasingly sustainability-focused market.</p>

      <h3>Conclusion</h3>

      <p>Sustainability doesn’t have to be complex. With AI-powered carbon tracking, companies can transform environmental responsibility from a challenge into an opportunity for growth and impact. The future of supply chain management is not just efficient, it’s smarter and greener.</p>

      <hr />

      <h3>Practical Strategies to Reduce Supply Chain Emissions</h3>

      <p>Reducing carbon emissions in your supply chain is no longer just an environmental responsibility; it’s a strategic business move. Companies that actively work to lower their emissions can save costs, improve operational efficiency, and enhance their brand reputation. Yet, with complex logistics, multiple suppliers, and global networks, cutting emissions can feel overwhelming. The good news is that there are practical, actionable strategies that any business can implement to make a meaningful difference.</p>

      <h4>Optimize Transportation Routes</h4>

      <p>Transportation is often the largest contributor to supply chain carbon output, and small adjustments can lead to significant reductions. Using AI-powered logistics tools or route planning software, businesses can identify the most efficient paths for deliveries, combine shipments to reduce the number of trips, and select carriers with lower-emission vehicles. Even minor improvements, such as consolidating shipments or avoiding unnecessary detours, can drastically cut fuel consumption and emissions.</p>

      <h4>Collaborate with Sustainable Suppliers</h4>

      <p>Your suppliers play a huge role in your overall carbon footprint, and choosing the right partners can make a big difference. Collaborating with environmentally conscious suppliers who use renewable energy, low-emission vehicles, or sustainable packaging can help reduce emissions across the supply chain. Open communication with suppliers about sustainability goals and shared initiatives can also drive improvements and create a culture of responsibility throughout the network.</p>

      <h4>Embrace Digital and AI Tools</h4>

      <p>Technology is a game-changer for managing supply chain emissions. AI-powered dashboards and monitoring tools can track emissions in real time, identify inefficiencies, and provide actionable insights that allow businesses to make smarter decisions. These tools transform raw data into practical strategies, helping companies pinpoint high-emission areas and implement measures that reduce carbon output while maintaining productivity and operational efficiency.</p>

      <h4>Reduce Waste and Improve Packaging</h4>

      <p>Excess packaging, inefficient product handling, and unnecessary shipments contribute significantly to emissions. Streamlining packaging to use only what is necessary, switching to recyclable or biodegradable materials, and designing shipments to minimize space and weight can all reduce environmental impact. Additionally, reviewing production processes and inventory management to limit product waste ensures that materials are used efficiently, further decreasing carbon emissions.</p>

      <h4>Implement Circular Economy Practices</h4>

      <p>A circular approach, where materials are reused, recycled, or refurbished rather than discarded, reduces the need for raw material production, which is often energy-intensive and carbon-heavy. Encouraging suppliers and partners to adopt circular strategies lowers emissions and fosters innovation and resource efficiency throughout the supply chain.</p>

      <p>Finally, it’s important to remember that reducing emissions is a continuous process rather than a one-time effort. Regular monitoring, data-driven decision-making, and collaboration across all levels of the supply chain are key to achieving meaningful results. By focusing on transportation efficiency, sustainable supplier partnerships, AI-driven insights, waste and packaging reduction, and circular economy practices, businesses can systematically reduce their carbon footprint. These strategies not only contribute to a healthier planet but also improve operational performance, compliance, and brand reputation. Companies that take these steps position themselves as leaders in sustainability, demonstrating responsibility to customers, investors, and partners.</p>

      <p>Cutting supply chain emissions is a challenge, but with the right approach, it becomes an opportunity to innovate, optimize, and lead. By integrating these five strategies, businesses can build a supply chain that is efficient, resilient, and environmentally responsible, proving that profitability and sustainability can go hand in hand.</p>
    `
  },
  'esg-reporting-whats-changing-in-2026': {
    title: "ESG Reporting: What's Changing in 2026",
    content: `
      <h2>How AI is Revolutionizing Carbon Tracking</h2>

      <p>In today’s world, sustainability isn’t just a buzzword; it’s a business imperative. Companies around the globe are under pressure to reduce their carbon footprint, not only for the planet but also to stay competitive and compliant with regulations. However, tracking carbon emissions across complex supply chains has traditionally been a daunting, time-consuming task.</p>

      <p>Enter AI-powered carbon tracking. Artificial intelligence is transforming the way businesses monitor, analyze, and optimize their environmental impact, making sustainability smarter, faster, and more actionable.</p>

      <h3>Real-Time Insights at Your Fingertips</h3>

      <p>Gone are the days of relying on spreadsheets and manual calculations. AI can process massive amounts of logistics and supplier data in real time, providing a clear picture of your carbon footprint across the entire supply chain. This means you can see where emissions are highest and take immediate action to reduce them.</p>

      <h3>Predictive and Actionable Recommendations</h3>

      <p>AI doesn’t just track emissions, it learns from patterns in your data. It can predict potential problem areas, suggest smarter routing for shipments, recommend energy-efficient suppliers, and highlight opportunities to cut waste. Essentially, it turns raw data into actionable sustainability strategies.</p>

      <h3>Streamlined Compliance and Reporting</h3>

      <p>Regulatory compliance can be a headache, especially when reporting emissions to authorities or stakeholders. AI simplifies this by automatically generating accurate, auditable reports. Businesses can confidently demonstrate their sustainability efforts without the usual manual effort.</p>

      <h3>Driving Business Value Through Sustainability</h3>

      <p>Beyond environmental benefits, AI-powered carbon tracking helps businesses optimize operations, reduce costs, and enhance brand reputation. Customers, investors, and partners increasingly expect companies to act responsibly, and AI gives businesses the tools to meet these expectations effectively.</p>

      <h3>The Future is Smarter and Greener</h3>

      <p>AI is no longer a futuristic concept; it’s here, actively helping companies make smarter, greener decisions. By leveraging AI for carbon tracking, businesses can not only reduce emissions but also gain a competitive edge in an increasingly sustainability-focused market.</p>

      <h3>Conclusion</h3>

      <p>Sustainability doesn’t have to be complex. With AI-powered carbon tracking, companies can transform environmental responsibility from a challenge into an opportunity for growth and impact. The future of supply chain management is not just efficient, it’s smarter and greener.</p>
    `
  },
  'case-study-companyx-45-percent': {
    title: 'Case Study: How CompanyX Reduced Emissions by 45%',
    content: `
      <h2>Why Real-Time Monitoring Matters for Supply Chains</h2>

      <p>In today’s fast-paced business environment, supply chains are more complex than ever. From sourcing raw materials to delivering finished products, every step impacts efficiency, cost, and sustainability. One of the most powerful tools businesses can use to manage this complexity is real-time monitoring. By tracking operations, emissions, and performance in real time, companies can make informed decisions that optimize efficiency and reduce their environmental footprint.</p>

      <p>Real-time monitoring provides instant visibility across the entire supply chain. Traditional reporting methods often rely on delayed or static data, which can lead to inefficiencies and missed opportunities. With real-time insights, businesses can quickly identify bottlenecks, high-emission activities, or underperforming suppliers, allowing them to respond proactively rather than reactively. This level of visibility is critical for companies striving to meet sustainability goals and maintain operational excellence.</p>

      <h3>Data-Driven Decision Making</h3>

      <p>Another key benefit of real-time monitoring is the ability to improve decision-making through data-driven insights. Advanced AI tools can analyze large volumes of supply chain data, identify patterns, and suggest actionable improvements. For example, a company might discover that rerouting shipments or consolidating orders can significantly reduce emissions. These insights not only help in meeting environmental objectives but also enhance overall efficiency and cost-effectiveness.</p>

      <h3>Risk Management and Resilience</h3>

      <p>Real-time monitoring also plays a crucial role in risk management. Supply chains are vulnerable to disruptions caused by natural disasters, geopolitical events, or supplier issues. Monitoring operations continuously allows businesses to detect anomalies early, mitigate risks, and maintain smooth operations. This proactive approach ensures that companies remain resilient even in unpredictable circumstances.</p>

      <h3>Compliance and Transparency</h3>

      <p>Additionally, real-time monitoring supports regulatory compliance and transparency. Many industries are now required to report emissions, labor practices, and operational performance. Automated tracking and reporting tools make it easier to generate accurate, auditable reports, demonstrating accountability to regulators, investors, and customers. This transparency strengthens trust and positions a company as a responsible industry leader.</p>

      <h3>Fostering Continuous Improvement</h3>

      <p>Finally, implementing real-time monitoring fosters a culture of continuous improvement. Teams have access to immediate feedback on performance and sustainability metrics, enabling them to experiment with new strategies, track progress, and scale successful practices. Over time, this leads to smarter, leaner, and greener supply chains that are better equipped to meet both business and environmental goals.</p>

      <p>In conclusion, real-time monitoring is no longer optional, it’s essential for modern supply chains. By providing instant visibility, actionable insights, risk management, compliance, and continuous improvement, it empowers businesses to operate efficiently, sustainably, and competitively. Companies that embrace real-time monitoring not only optimize their operations but also demonstrate leadership in sustainability, ensuring long-term growth and impact.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <p className="mt-4">We couldn't find the post you're looking for. <Link to="/blog" className="text-primary-600">Back to blog</Link></p>
        </div>
      </div>
    );
  }

  const [likes, setLikes] = useState<number>(Math.floor(Math.random() * 30) + 5);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [showComments, setShowComments] = useState<boolean>(false);
  
  // Reference for the content element (for table of contents)
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation for progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Generate image URL based on the slug or use the default
  // This function can be used when we have actual images to display
  // const getImage = () => {
  //   const imageName = post.image || slug?.split('-').join('_') || 'default_blog';
  //   return `/images/blog/${imageName}.jpg`;
  // };

  // Get estimated read time
  const readTime = post.readTime || '5 min read';
  const category = post.category || 'Sustainability';
  const date = post.date || 'September 26, 2025';
  
  // Progress bar at the top of the page
  const ProgressBar = () => (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
  
  // Back to top button
  const BackToTopButton = () => {
    const [showButton, setShowButton] = useState<boolean>(false);
    
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 500);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    return (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showButton ? 1 : 0, 
          scale: showButton ? 1 : 0.5,
          y: showButton ? 0 : 10
        }}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-20 ${
          !showButton && 'pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </motion.button>
    );
  };
  
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Reading progress bar */}
      <ProgressBar />
      
      {/* Back to top button */}
      <BackToTopButton />
      
      <div className="container mx-auto px-6 py-12">
        {/* Back button with animation */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center text-primary-600 font-medium mb-8 hover:text-primary-700 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to all articles
          </Link>
        </motion.div>
        
        {/* Hero section with image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg mb-8 h-80 bg-gradient-to-r from-primary-500 to-accent-600 relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">{post.image || slug}</div>
              {/* We'd ideally use an actual image here - this is a placeholder */}
            </div>
            
            {/* Image overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold mb-6 text-neutral-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-8 text-neutral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{category}</span>
            </div>
            
            {/* Author info - if added later */}
            {post.author && (
              <div className="flex items-center ml-auto">
                <div className="w-8 h-8 rounded-full bg-primary-100 mr-2"></div>
                <span>{post.author}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Interactive sidebar - left side */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-1 sticky top-24 h-fit"
          >
            <div className="flex lg:flex-col gap-4 mb-6 lg:mb-0">
              <motion.button 
                className={`w-10 h-10 bg-white border rounded-full flex items-center justify-center transition-colors ${
                  isBookmarked 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-neutral-200 hover:bg-primary-50 hover:border-primary-200'
                }`}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? 'text-primary-600 fill-primary-600' : 'text-neutral-600'}`} />
              </motion.button>
              
              <motion.button 
                className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors"
                whileTap={{ scale: 0.9 }}
                onClick={() => setLikes(likes + 1)}
              >
                <ThumbsUp className="h-5 w-5 text-neutral-600" />
              </motion.button>
              
              <motion.button 
                className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors"
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowComments(!showComments)}
              >
                <Share2 className="h-5 w-5 text-neutral-600" />
              </motion.button>
              
              <motion.div
                className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 text-xs font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {likes}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main content - center */}
          <div className="lg:col-span-8">
            {/* Content with enhanced styling */}
            <motion.div 
              ref={contentRef}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="prose prose-lg max-w-none prose-headings:text-neutral-800 prose-p:text-neutral-600 prose-a:text-primary-600 prose-strong:text-neutral-700 prose-h2:pt-8 prose-h3:pt-6 prose-img:rounded-xl prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Interactive feedback section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100"
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Was this article helpful?</h3>
              <div className="flex gap-4">
                <button 
                  className="px-6 py-3 bg-white border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                  onClick={() => setLikes(likes + 1)}
                >
                  Yes, it helped!
                </button>
                <button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors">
                  Not really
                </button>
              </div>
            </motion.div>
            
            {/* Comments section */}
            {showComments && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12 p-6 bg-white rounded-xl border border-neutral-200"
              >
                <h3 className="text-xl font-bold text-neutral-800 mb-6 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Comments
                </h3>
                
                {/* Comment form */}
                <div className="mb-8">
                  <textarea 
                    className="w-full border border-neutral-200 rounded-lg p-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Share your thoughts..."
                  />
                  <button className="mt-2 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    Post Comment
                  </button>
                </div>
                
                {/* Sample comments */}
                <div className="space-y-6">
                  {[
                    { name: 'Alex Johnson', date: 'Yesterday', text: 'This is exactly what our company needed to understand. Great insights!' },
                    { name: 'Maria Smith', date: '2 days ago', text: 'I appreciate the practical examples. Would love to see more case studies on this topic.' }
                  ].map((comment, index) => (
                    <div key={index} className="border-b border-neutral-100 pb-6 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium text-neutral-800">{comment.name}</div>
                        <div className="text-sm text-neutral-500">{comment.date}</div>
                      </div>
                      <p className="text-neutral-600">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Related posts */}
            <RelatedPosts currentSlug={slug || ''} allPosts={allBlogPosts} />
            
            {/* Navigation links */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-neutral-200"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link to="/blog" className="mb-4 sm:mb-0 px-6 py-3 bg-white text-primary-600 border border-primary-200 rounded-lg font-medium hover:bg-primary-50 transition-colors inline-flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to blog
                </Link>
                
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">Share this article:</span>
                  {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                    <motion.button 
                      key={platform}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors text-sm"
                    >
                      {platform.charAt(0)}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Table of contents - right sidebar */}
          <aside className="lg:col-span-3">
            <TableOfContents contentRef={contentRef} />
          </aside>
        </div>
        
        {/* Newsletter signup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Stay Updated with Latest Insights</h3>
          <p className="mb-6 text-primary-50">Get the latest sustainability content delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
