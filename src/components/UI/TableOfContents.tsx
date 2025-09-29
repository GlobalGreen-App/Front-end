import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef }) => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Extract headings from content
  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = contentRef.current.querySelectorAll('h2, h3, h4');
    const tocItems: TOCItem[] = Array.from(headingElements).map((element, index) => {
      // Create an id if none exists
      if (!element.id) {
        element.id = `heading-${index}`;
      }
      
      return {
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName[1])
      };
    });

    setToc(tocItems);
  }, [contentRef]);

  // Set up intersection observer to track which heading is in view
  useEffect(() => {
    if (!contentRef.current || toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 1.0
      }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      toc.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [toc, contentRef]);

  if (toc.length === 0) return null;

  return (
    <>
      {/* Mobile TOC toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-20">
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="w-12 h-12 bg-primary-600 rounded-full shadow-lg flex items-center justify-center text-white"
        >
          <List size={24} />
        </button>
      </div>
      
      {/* Mobile TOC dropdown */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 50,
          scale: isVisible ? 1 : 0.9
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed bottom-20 right-6 z-20 bg-white rounded-lg shadow-xl p-4 w-72 border border-neutral-200 ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <h3 className="text-lg font-bold mb-3 text-neutral-800">Table of Contents</h3>
        <nav>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm hover:text-primary-600 block py-1 border-l-2 pl-3 ${
                    activeId === item.id 
                      ? 'border-primary-500 text-primary-600 font-medium' 
                      : 'border-neutral-200 text-neutral-600'
                  }`}
                  onClick={() => setIsVisible(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      
      {/* Desktop TOC sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto w-64 ml-8 bg-white p-5 rounded-lg border border-neutral-100 shadow-sm"
      >
        <h3 className="font-bold mb-4 text-neutral-800">Table of Contents</h3>
        <nav>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm hover:text-primary-600 block py-1 border-l-2 pl-3 transition-colors duration-200 ${
                    activeId === item.id 
                      ? 'border-primary-500 text-primary-600 font-medium' 
                      : 'border-neutral-200 text-neutral-600'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default TableOfContents;