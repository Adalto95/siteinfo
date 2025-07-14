
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Laptop, Building } from 'lucide-react';

const solutionsData = [
  { 
    icon: Laptop, 
    title: "Sistema de Gestão", 
    description: "Controle total do seu negócio com nosso software completo: financeiro, estoque, vendas, e relatórios inteligentes.",
    image: "Software de gestão sendo usado em um laptop"
  },
  { 
    icon: CreditCard, 
    title: "Maquininha de Cartão", 
    description: "Venda mais com taxas competitivas e aceite as principais bandeiras. Integração total com nosso sistema.",
    image: "Pessoa usando maquininha de cartão para pagamento"
  },
  { 
    icon: ShieldCheck, 
    title: "Certificado Digital", 
    description: "Emita notas fiscais com segurança e validade jurídica. Essencial para a conformidade do seu negócio.",
    image: "Selo de segurança de certificado digital"
  },
  { 
    icon: Building, 
    title: "Loja Física Completa", 
    description: "Oferecemos todos os equipamentos e a automação que sua loja física precisa para operar com máxima eficiência.",
    image: "Interior de uma loja física moderna e organizada"
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Soluções Completas e Integradas</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tudo o que você precisa para gerenciar, vender e crescer com segurança e eficiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutionsData.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-azul-infostart from-sky-500 to-cyan-500 rounded-full">
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
