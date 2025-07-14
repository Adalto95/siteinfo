import React from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud } from 'lucide-react';

const downloadItems = [
    { name: "SUPORTE REMOTO", url: "https://infostart.com.br/download/suporteinfostart.exe" },
    { name: "OBERTHUR AWP MANAGER 5.1.8", url: "https://www.infostart.com.br/download/AWP_Manager_5.1.8_64_bits.exe?_gl=1*1pis0f0*_ga*Mjc3MTE2NTYwLjE3MzkzNTcwMzU.*_ga_4J38FJ7LKE*czE3NTIyMzM3ODIkbzE1JGcxJHQxNzUyMjM0OTE2JGo2MCRsMCRoMA.." },
    { name: "DRIVER SAFESIGN", url: "https://www.infostart.com.br/download/SafeSignIC30124-x64-win-tu-admin.exe?_gl=1*1pis0f0*_ga*Mjc3MTE2NTYwLjE3MzkzNTcwMzU.*_ga_4J38FJ7LKE*czE3NTIyMzM3ODIkbzE1JGcxJHQxNzUyMjM0OTE2JGo2MCRsMCRoMA.." },
    { name: "DRIVER LEITOR NONUS", url: "https://www.infostart.com.br/download/Nonus-Smartnonus-64bits.exe?_gl=1*1pis0f0*_ga*Mjc3MTE2NTYwLjE3MzkzNTcwMzU.*_ga_4J38FJ7LKE*czE3NTIyMzM3ODIkbzE1JGcxJHQxNzUyMjM0OTE2JGo2MCRsMCRoMA.." },
    { name: "SAFENET AUTHENTICATION 10.8", url: "https://www.infostart.com.br/download/iti-x64-10.8.msi?_gl=1*1c0lj8z*_ga*Mjc3MTE2NTYwLjE3MzkzNTcwMzU.*_ga_4J38FJ7LKE*czE3NTIyMzM3ODIkbzE1JGcxJHQxNzUyMjM0OTE2JGo2MCRsMCRoMA.." },
    { name: "DRIVER FEITIAN (EPASS)", url: "https://www.infostart.com.br/download/ePass2003-Setup_170623.exe?_gl=1*1c0lj8z*_ga*Mjc3MTE2NTYwLjE3MzkzNTcwMzU.*_ga_4J38FJ7LKE*czE3NTIyMzM3ODIkbzE1JGcxJHQxNzUyMjM0OTE2JGo2MCRsMCRoMA.." },
    { name: "DRIVER IMPRESSORA KNF", url: "https://www.infostart.com.br/download/elgin-knf.zip?_gl=1*1c0lj8z*_ga*Mjc3MTE2NTYwLjE3MzkzNTcwMzU.*_ga_4J38FJ7LKE*czE3NTIyMzM3ODIkbzE1JGcxJHQxNzUyMjM0OTE2JGo2MCRsMCRoMA.." },
];

const Downloads = () => {
    return (
        <section id="downloads" className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900">Downloads</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Acesse aqui os drivers e aplicativos necessários para o funcionamento das nossas soluções.
                    </p>
                </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {downloadItems.map((item, index) => {
                    const isSuporte = item.name === "SUPORTE REMOTO";
                    return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={isSuporte ? "col-span-full flex justify-center" : ""}
                    >
                        <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 ${
                            isSuporte ? "border-infostart w-full max-w-sm" : "border-infostart"
                        }`}
                        >
                        <span className="font-semibold text-gray-800">{item.name}</span>
                        <DownloadCloud className="w-6 h-6 text-infostart" />
                        </a>
                    </motion.div>
                    );
                })}
                </div>

            </div>
        </section>
    );
};

export default Downloads;