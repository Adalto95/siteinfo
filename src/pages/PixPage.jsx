
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PixPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>PIX no PDV - Infostart</title>
        <meta name="description" content="Acesse o portal PIX no PDV da Infostart para gerenciar suas transações de forma rápida e segura." />
      </Helmet>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-sky-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text-sky cursor-pointer"
              >
              <img
                src="/logo.webp"
                alt="Infostart Logo"
                className="h-10"
              />
              </motion.div>
            </Link>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Voltar ao Início
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      <div className="flex-grow">
        <iframe 
          src="https://pixnopdv.com.br/cliente/login.html" 
          title="Portal PIX no PDV"
          style={{
            display: 'block',
            background: '#fff',
            border: 'none',
            height: 'calc(100vh - 64px)', // Adjust height to account for navbar
            width: '100vw'
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default PixPage;
