
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-500 to-cyan-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTopButton;
