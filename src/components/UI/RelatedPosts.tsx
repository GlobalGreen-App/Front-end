import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface RelatedPostsProps {
  currentSlug: string;
  allPosts: Post[];
  limit?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentSlug, allPosts, limit = 2 }) => {
  // Filter out the current post and limit the number of related posts
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="mt-16 pt-8 border-t border-neutral-200"
    >
      <h2 className="text-2xl font-bold mb-8 text-neutral-800">Related Articles</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {relatedPosts.map((post) => (
          <motion.div
            key={post.slug}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-100"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="h-40 bg-gradient-to-r from-primary-400 to-accent-500 flex items-center justify-center">
                <div className="text-white font-bold">{post.image}</div>
              </div>
              
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 rounded-full px-2 py-1">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary-600 font-medium flex items-center">
                    Read article <ArrowRight className="ml-1 w-3 h-3" />
                  </span>
                  <span className="text-xs text-neutral-500">{post.date}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RelatedPosts;