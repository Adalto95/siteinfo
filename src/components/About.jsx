import React from 'react';
import { motion } from 'framer-motion';
import { Users, Smile, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="quemsomos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-gray-900">Quem Somos</h2>
            <h3 className="text-2xl font-bold gradient-text-sky">A Infostart</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Infostart é uma empresa dedicada à automação comercial, voltada especialmente para micros e pequenas empresas. Desde 2006, temos o compromisso de oferecer soluções personalizadas que atendam às necessidades específicas de cada negócio, contribuindo para o crescimento e a eficiência de nossos clientes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com um sistema de gestão simples e objetivo, já conquistamos mais de 1000 clientes ativos e alcançamos uma impressionante taxa de 97% de satisfação entre os usuários. Nossa equipe de programadores, com ampla experiência em sistemas de automação, desenvolve ferramentas que garantem confiabilidade e agilidade na gestão de lojas e comércios varejistas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                    <Users className="mx-auto h-10 w-10 text-infostart" />
                    <p className="mt-2 text-2xl font-bold text-gray-900">+1000</p>
                    <p className="text-gray-600">Clientes Ativos</p>
                </div>
                <div className="text-center">
                    <Smile className="mx-auto h-10 w-10 text-infostart" />
                    <p className="mt-2 text-2xl font-bold text-gray-900">97%</p>
                    <p className="text-gray-600">de Satisfação</p>
                </div>
                <div className="text-center">
                    <Code className="mx-auto h-10 w-10 text-infostart" />
                    <p className="mt-2 text-2xl font-bold text-gray-900">+18</p>
                    <p className="text-gray-600">Anos de Experiência</p>
                </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto aspect-video rounded-xl shadow-2xl overflow-hidden"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/k2Sxo7GWpQc?autoplay=1&mute=1&loop=1&playlist=k2Sxo7GWpQc&controls=0&showinfo=0&autohide=1&modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;