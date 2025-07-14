
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5535998403179"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
