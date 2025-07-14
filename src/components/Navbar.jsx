
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Menu, X, CreditCard } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'quemsomos', label: 'Quem Somos' },
    { id: 'segmentos', label: 'Segmentos' },
    { id: 'solucoes', label: 'Soluções' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'downloads', label: 'Downloads' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'quemsomos', 'segmentos', 'solucoes', 'depoimentos', 'downloads'];
      const scrollPosition = window.scrollY + 100;
      let currentSection = '';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-sky-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text-sky cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
          <img
            src="/logo.webp"
            alt="Infostart Logo"
            className="h-10"
          />
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'text-sky-600 bg-sky-100'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.a
                  href="https://emissor.infostart.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-amber-400 text-amber-900 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-amber-500 hover:shadow-xl transition-all duration-300"
              >
                  Emissor <ExternalLink size={16} />
              </motion.a>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link to="/pix" className="flex items-center gap-2 bg-green-400 text-green-900 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-green-500 hover:shadow-xl transition-all duration-300">
                  PIX <CreditCard size={16} />
                </Link>
              </motion.div>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contato')}
              className="hidden md:block bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contato
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileLinkClick(item.id)}
                  className="text-left text-gray-700 font-medium py-2 px-3 rounded-md hover:bg-sky-50"
                >
                  {item.label}
                </button>
              ))}
              <hr/>
              <motion.a
                  href="https://emissor.infostart.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-amber-400 text-amber-900 px-4 py-3 rounded-full font-semibold shadow-lg"
              >
                  Emissor <ExternalLink size={16} />
              </motion.a>
              <Link to="/pix" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 bg-green-400 text-green-900 px-4 py-3 rounded-full font-semibold shadow-lg">
                  PIX <CreditCard size={16} />
              </Link>
              <button
                onClick={() => handleMobileLinkClick('contato')}
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3 rounded-full font-semibold shadow-lg"
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
