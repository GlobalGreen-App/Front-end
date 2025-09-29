import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full"
    >
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 italic">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
          <div className="text-sm text-green-600">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;