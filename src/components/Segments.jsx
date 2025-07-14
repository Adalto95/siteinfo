
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Shirt, Utensils, Construction, Beer, Sofa, Stethoscope } from 'lucide-react';

const segmentsData = [
  { icon: ShoppingCart, name: "Supermercados" },
  { icon: Shirt, name: "Vestuário" },
  { icon: Utensils, name: "Alimentação e Bebidas" },
  { icon: Construction, name: "Materiais de Construção" },
  { icon: Beer, name: "Distribuidora de Bebidas" },
  { icon: Sofa, name: "Móveis e Decoração" },
  { icon: Stethoscope, name: "Farmácia" },
];

const Segments = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="segmentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Atendemos Diversos Segmentos</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossas soluções são flexíveis e se adaptam perfeitamente às necessidades do seu tipo de negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {segmentsData.map((segment, index) => (
            <motion.div
              key={segment.name}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200 shadow-lg cursor-pointer"
            >
              <div className="inline-block p-4 bg-azul-infostart from-sky-500 to-cyan-500 rounded-full mb-4">
                <segment.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{segment.name}</h3>
            </motion.div>
          ))}
           <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 rounded-xl bg-gray-100 border border-gray-200 shadow-lg flex flex-col justify-center items-center col-span-2 md:col-span-1"
            >
              <h3 className="text-lg font-bold text-gray-800">E muitos outros!</h3>
              <p className="text-gray-600 text-sm">Consulte-nos</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Segments;
