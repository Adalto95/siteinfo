
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
    const form = useRef();
    const { toast } = useToast();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                toast({
                    title: "Sucesso!",
                    description: "Obrigado pelo seu contato, o nosso comercial irá entrar o mais breve possível com você.",
                    variant: "success",
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                toast({
                    title: "Erro!",
                    description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
                    variant: "destructive",
                });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-white">Pronto para Simplificar sua Gestão?</h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Fale com um de nossos especialistas e descubra como a Infostart pode impulsionar o seu negócio. Sem compromisso!
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-shadow"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-shadow"
              />
              <textarea
                name="message"
                placeholder="Sua mensagem (opcional)"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-shadow"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Enviando...' : 'Enviar Contato'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
