
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Supermercado Mangia", company: "Empresa do ramo de supermercado", videoId: "zLbS-rgDsho" },
  { name: "Contabilidade Pereira", company: "Contabilidade que faz diferença", videoId: "LNM8-DD7a4g" },
  { name: "Casa Arantes", company: "Loja de varejo de sapatos", videoId: "oTQc0G1ZDI0" },
  { name: "Loja Rosendo", company: "Varejo no ramo de vestuário", videoId: "tqvmgQIw7B4c" },
  { name: "Rw Peças", company: "Empresa do ramo de auto peças", videoId: "1VPHpTmr2rw" },
  { name: "Agro Emil", company: "Varejo no ramo do Agro e venda de maquinas", videoId: "qJybKXEE8QU" },
  { name: "Prediletta", company: "Cliente no ramo de restaurante de Delivery", videoId: "VQ9l8M4GWhA" },
  { name: "Café Premium", company: "Cliente no ramo alimentício", videoId: "go191cAZ1CE" },
  { name: "L&A Material de Construção", company: "Varejo no ramo material de construção", videoId: "rYYkoF5CGHo" },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Quem Usa, Confia e Recomenda</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre as soluções da Infostart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 rounded-2xl shadow-lg flex flex-col"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`Depoimento de ${testimonial.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-auto text-center">
                <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
