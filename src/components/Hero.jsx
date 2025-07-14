import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              A solução completa para
              <span className="block gradient-text-sky">
                o seu negócio decolar
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transforme a gestão da sua empresa com nosso sistema completo, maquininha de cartão e certificado digital. Tudo que você precisa em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('solucoes')}
                className="bg-azul-infostart from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nossas Soluções
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection('contato')}
                className="botao-azul-infostart rounded-full font-semibold text-lg hover:bg-sky-50 transition-all duration-300"
              >
                Falar com um especialista
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img 
                  className="w-[450px]"
                  alt="Painel de controle de software de gestão em um tablet"
                 src="/fundo.webp" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;